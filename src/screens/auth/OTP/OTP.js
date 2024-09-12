import {View, Text, SafeAreaView, TextInput, Button} from 'react-native';
import React, {useState} from 'react';
import {routes} from '../../../stack/routes';

const OTP = ({navigation}) => {
  const [minute, setMinute] = useState(1);
  const [second, setSecond] = useState(59);

  return (
    <SafeAreaView
      style={{
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        marginHorizontal: 30,
      }}>
      <Text style={{textAlign: 'center'}}>OTP</Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-between',marginVertical:27}}>
        <TextInput style={{borderWidth: 1, width: 50, borderRadius: 5}} />
        <TextInput style={{borderWidth: 1, width: 50, borderRadius: 5}} />
        <TextInput style={{borderWidth: 1, width: 50, borderRadius: 5}} />
        <TextInput style={{borderWidth: 1, width: 50, borderRadius: 5}} />
      </View>
      <Text style={{textAlign: 'center',marginBottom:15}}>
        {minute}:{second}
      </Text>

      <Button
        title="Send"
        onPress={() => {
          navigation.navigate(routes.auth.LogIn);
        }}
      />
    </SafeAreaView>
  );
};

export default OTP;
