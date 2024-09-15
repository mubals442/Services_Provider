import AsyncStorage from '@react-native-async-storage/async-storage';

export const getAccessRole = async () => {
  try {
    const accessToken = await AsyncStorage.getItem('roleOfUser');
    if (accessToken !== null) {
      // Token exists, use it
    //   console.log(accessToken);
      return accessToken;
    } else {
      // Token not found
      console.log('No role found');
    }
  } catch (error) {
    console.error('Error retrieving role:', error);
  }
};
