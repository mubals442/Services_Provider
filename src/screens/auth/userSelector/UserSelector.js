import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import {routes} from '../../../stack/routes';

const UserSelector = ({navigation}) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View>
        <Text>Place Select Your User Account</Text>
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(routes.auth.NewRegistration);
            }}
            style={{
              borderWidth: 2,
              borderRadius: 5,
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
              navigation.navigate(routes.auth.NewRegistration);
            }}
            style={{
              borderWidth: 2,
              borderRadius: 5,
              width: 350,
              height: 150,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{alignSelf: 'center', color: 'black', fontSize: 64}}>Provider</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default UserSelector;
