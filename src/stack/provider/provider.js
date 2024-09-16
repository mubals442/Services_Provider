import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { routes } from "../routes";
import HomeProvider from "../../screens/provider/home/HomeProvider";
import BookingProvider from "../../screens/provider/bookings/BookingProvider";
import InfoProvider from "../../screens/provider/info/InfoProvider";

const Tap = createBottomTabNavigator();

export const Provider = () => {
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
};
