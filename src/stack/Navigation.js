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

const Navigation = () => {
  const Tap = createBottomTabNavigator();

  const user = 'client';

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
    <Tap.Navigator
      screenOptions={{headerShown: true}}
      initialRouteName={initialRouteName(user)}>
      {user === 'auth' && (
        <>
          <Tap.Screen name={routes.auth.LogIn} component={LogIn} />
          <Tap.Screen
            name={routes.auth.UserSelector}
            component={UserSelector}
          />
          <Tap.Screen
            name={routes.auth.NewRegistration}
            component={NewRegistration}
          />
          <Tap.Screen name={routes.auth.OTP} component={OTP} />
        </>
      )}
      {user === 'client' && (
        <>
          <Tap.Screen name={routes.client.HomeClient} component={HomeClient} />
          <Tap.Screen
            name={routes.client.BookingClient}
            component={BookingClient}
          />
          <Tap.Screen name={routes.client.InfoClient} component={InfoClient} />
        </>
      )}
      {user === 'provider' && (
        <>
          <Tap.Screen
            name={routes.Provider.HomeProvider}
            component={HomeProvider}
          />
          <Tap.Screen
            name={routes.Provider.BookingProvider}
            component={BookingProvider}
          />
          <Tap.Screen
            name={routes.Provider.InfoProvider}
            component={InfoProvider}
          />
        </>
      )}
    </Tap.Navigator>
  );
};

export default Navigation;
