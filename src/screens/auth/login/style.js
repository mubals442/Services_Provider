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
      width: '100%',
      marginBottom: 7,
      borderRadius: 5,
      paddingHorizontal: 10,
      height: 40,
    },
    optionsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 20,
    },
    link: {
      color: 'blue',
    },
  });