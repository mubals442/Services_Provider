import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import {routes} from '../../../stack/routes';

const UserSelector = ({navigation}) => {
  const typeOfUser = {
    provider: ' provider',
    customer: 'customer',
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View>
        <Text style={{color:'black',textAlign:'start',fontSize:12}}>Place Select Your User Account:</Text>
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(routes.auth.NewRegistration, {
                user: typeOfUser.customer,
              });
            }}
            style={{
              borderWidth: 2,
              borderRadius: 15,
              width: 350,
              height: 150,
              marginVertical: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{alignSelf: 'center', color: 'black', fontSize: 64}}>
              Client
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate(routes.auth.NewRegistration, {
                user: typeOfUser.provider,
              });
            }}
            style={{
              borderWidth: 2,
              borderRadius: 15,
              width: 350,
              height: 150,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{alignSelf: 'center', color: 'black', fontSize: 64}}>
              Provider
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default UserSelector;
