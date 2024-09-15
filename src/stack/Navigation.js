import React, {useContext, useEffect} from 'react';
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
import {getAccessRole} from '../APIs/role';
import {Role} from '../context/Role';

const Navigation = () => {
  const Tap = createBottomTabNavigator();
  const Stack = createStackNavigator();
  const {role} = useContext(Role);

  function initialRouteName(user) {
    switch (user) {
      case 'auth':
        return routes.auth.LogIn;
      case 'client':
        return routes.client.HomeClient;
      case 'provider':
        return routes.Provider.HomeProvider;
      default:
        return routes.auth.LogIn;
    }
  }

  function Client() {
    return (
      <Tap.Navigator screenOptions={{headerShown: false}}>
        <Tap.Screen name={routes.client.HomeClient} component={HomeClient} />
        <Tap.Screen
          name={routes.client.BookingClient}
          component={BookingClient}
        />
        <Tap.Screen name={routes.client.InfoClient} component={InfoClient} />
      </Tap.Navigator>
    );
  }

  function Provider() {
    return (
      <Tap.Navigator screenOptions={{headerShown: false}}>
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
      </Tap.Navigator>
    );
  }

  return (
    <Stack.Navigator
      screenOptions={{headerShown: true}}
      initialRouteName={initialRouteName(role)}>
      {role === 'auth' && (
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
      {role === 'client' && <Stack.Screen name={'client'} component={Client} />}
      {role === 'provider' && (
        <Stack.Screen name={'provider'} component={Provider} />
      )}
    </Stack.Navigator>
  );
};

export default Navigation;
