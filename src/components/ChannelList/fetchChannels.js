export const fetchChannels = async () => {
  const response = await fetch('https://iptv-org.github.io/iptv/countries/ar.m3u');
  if (!response.ok) throw new Error('Error al cargar la lista de canales');

  const m3uText = await response.text();
  return parseM3U(m3uText);
};

const parseM3U = (m3uText) => {
  const lines = m3uText.split('\n');
  const channelList = {};
  let currentChannel = { title: '', logo: '', url: '' };
  let currentCategory = 'Otros';

  const logoRegex = /tvg-logo="([^"]*)".*?,(.+)/;
  const categoryRegex = /group-title="([^"]*)"/;

  lines.forEach((line) => {
    if (line.startsWith('#EXTINF')) {
      const match = line.match(logoRegex);
      const categoryMatch = line.match(categoryRegex);
      if (match) {
        currentChannel = { 
          title: match[2].replace(/\s*\(.*?\)\s*|\s*\[.*?\]\s*/g, '').trim(), 
          logo: match[1],
          url: ''
        };
        currentCategory = (categoryMatch?.[1]?.split(';')[0] || 'Otros').replace(/Undefined/, 'Otros').trim();
      }
    } else if (line.startsWith('http')) {
      currentChannel.url = line;
      if (!channelList[currentCategory]) {
        channelList[currentCategory] = [];
      }
      channelList[currentCategory].push(currentChannel);
      currentChannel = { title: '', logo: '', url: '' }; // Reset currentChannel
    }
  });

  return channelList;
};