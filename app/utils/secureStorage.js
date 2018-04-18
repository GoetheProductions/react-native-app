import { AsyncStorage } from 'react-native';

export default async token => {
  try {
    await AsyncStorage.setItem('token', token);
  } catch (error) {
    console.log('Error when trying to set token');
  }
};
