// // import {AsyncStorage} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

// export const Token = AsyncStorage.getItem('accessToken');

export const getAccessToken = async () => {
  try {
    const accessToken = await AsyncStorage.getItem('accessToken');
    if (accessToken !== null) {
      // Token exists, use it
      console.log(accessToken);
      
      return accessToken;
    } else {
      // Token not found
      console.log('No token found');
    }
  } catch (error) {
    console.error('Error retrieving token:', error);
  }
};
