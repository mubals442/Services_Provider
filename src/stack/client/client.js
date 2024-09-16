import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {routes} from '../routes';
import HomeClient from '../../screens/client/home/HomeClient';
import BookingClient from '../../screens/client/bookings/BookingClient';
import InfoClient from '../../screens/client/info/InfoClient';

const Tap = createBottomTabNavigator();

export const Client = () => {
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
};
