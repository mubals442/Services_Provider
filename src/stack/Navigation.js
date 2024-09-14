import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {routes} from './routes';
import LogIn from '../screens/auth/login/LogIn';
import UserSelector from '../screens/auth/userSelector/UserSelector';
import NewRegistration from '../screens/auth/newRegistration/NewRegistration';
import OTP from '../screens/auth/OTP/OTP';
import HomeClient from '../screens/client/home/HomeClient';
import InfoClient from '../screens/client/info/InfoClient';
import BookingClient from '../screens/client/bookings/BookingClient';
import HomeProvider from '../screens/provider/home/HomeProvider';
import BookingProvider from '../screens/provider/bookings/BookingProvider';
import InfoProvider from '../screens/provider/info/InfoProvider';
import {createStackNavigator} from '@react-navigation/stack';

const Navigation = () => {
  // const Tap = createBottomTabNavigator();
  const Stack = createStackNavigator();
  const user = 'auth';

  function initialRouteName(user) {
    switch (user) {
      case 'auth':
        return routes.auth.LogIn;
      case 'client':
        return routes.auth.LogIn;
      case 'provider':
        return routes.auth.LogIn;
    }
  }

  return (
    <Stack.Navigator
      screenOptions={{headerShown: true}}
      initialRouteName={initialRouteName(user)}>
      {user === 'auth' && (
        <>
          <Stack.Screen name={routes.auth.LogIn} component={LogIn} />
          <Stack.Screen
            name={routes.auth.UserSelector}
            component={UserSelector}
          />
          <Stack.Screen
            name={routes.auth.NewRegistration}
            component={NewRegistration}
          />
          <Stack.Screen name={routes.auth.OTP} component={OTP} />
        </>
      )}
      {user === 'client' && (
        <>
          <Stack.Screen
            name={routes.client.HomeClient}
            component={HomeClient}
          />
          <Stack.Screen
            name={routes.client.BookingClient}
            component={BookingClient}
          />
          <Stack.Screen
            name={routes.client.InfoClient}
            component={InfoClient}
          />
        </>
      )}
      {user === 'provider' && (
        <>
          <Stack.Screen
            name={routes.Provider.HomeProvider}
            component={HomeProvider}
          />
          <Stack.Screen
            name={routes.Provider.BookingProvider}
            component={BookingProvider}
          />
          <Stack.Screen
            name={routes.Provider.InfoProvider}
            component={InfoProvider}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default Navigation;
