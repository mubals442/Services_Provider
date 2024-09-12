import {SafeAreaView} from 'react-native';
import React from 'react';
import LogIn from './src/screens/auth/login/LogIn';
import NewRegistration from './src/screens/auth/newRegistration/NewRegistration';
import OTP from './src/screens/auth/OTP/OTP';
import UserSelector from './src/screens/auth/userSelector/UserSelector';
import Cards from './src/components/Cards';
import HomeClient from './src/screens/client/home/HomeClient';
import BookingClient from './src/screens/client/bookings/BookingClient';
import HomeProvider from './src/screens/provider/home/HomeProvider';
import BookingProvider from './src/screens/provider/bookings/BookingProvider';
import InfoClient from './src/screens/client/info/InfoClient';
import InfoProvider from './src/screens/provider/info/InfoProvider';
import ProviderServicesOffered from './src/screens/client/home/ProviderServicesOffered';
import Navigation from './src/stack/Navigation';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
};

export default App;
