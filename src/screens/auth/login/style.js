import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
      height: '100%',
      flexDirection: 'column',
      justifyContent: 'center',
      marginHorizontal: 30,
    },
    title: {
      textAlign: 'center',
      fontSize: 24,
      marginBottom: 20,
    },
    input: {
      borderWidth: 2,
      borderColor: '#ccc',
      width: '100%',
      borderRadius: 5,
      marginBottom: 10,
      padding: 10,
      color: 'black',
    },
    optionsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 20,
    },
    link: {
      color: 'blue',
      fontSize:12
    },
  });