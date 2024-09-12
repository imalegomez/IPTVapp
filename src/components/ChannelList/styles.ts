import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#000",
    },
    categoryContainer: {
      marginBottom: 20,
    },
    horizontalContainer: {
      flexDirection: "row",
      alignItems: "center",
    },
    scrollViewContent: {
      flexDirection: "row",
      flexGrow: 1,
    },
    channelWrapper: {
      marginHorizontal: 10,
    },
    scrollButton: {
      width: 50,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
    },
  
    itemContainer: {
      alignItems: "center",
      justifyContent: "center",
      marginRight: 10,
      padding: 10,
      backgroundColor: "#333",
      borderRadius: 5,
      width: 100,
    },
    logo: {
      width: 70,
      height: 70,
      borderRadius: 5,
    },
    channel: {
      color: "#fff",
      fontSize: 16,
      textAlign: "center",
    },
    categoryTitle: {
      color: "#fff",
      fontSize: 20,
      marginVertical: 10,
      fontWeight: "bold",
    },
    errorText: {
      color: "red",
      textAlign: "center",
      margin: 20,
    },
    categoriesList: {
      paddingBottom: 20,
    },
  });