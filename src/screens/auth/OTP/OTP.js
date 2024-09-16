import {View, Text, SafeAreaView, TextInput, Button, Alert} from 'react-native';
import React, {useEffect, useReducer, useState} from 'react';
import {routes} from '../../../stack/routes';
import APIs_BASE from '../../../APIs/APIs_BASE';
// import {Token} from '../../../APIs/token';
import axios from 'axios';
import {getAccessToken} from '../../../APIs/token';

const OTP = ({navigation}) => {
  const [minute, setMinute] = useState(1);
  const [second, setSecond] = useState(59);

  // const token = "61|BchWEt2ORa10cbFWn8GvNqyLmoJ0R7wntGRXJTLA664f1d1d";

  useEffect(() => {
    const countdown = setInterval(() => {
      if (second > 0) {
        setSecond(second - 1);
      } else if (minute > 0 && second === 0) {
        setMinute(minute - 1);
        setSecond(59);
      }
    }, 1000);

    return () => clearInterval(countdown);
  }, [minute, second]);

  const initialValue = {
    otp1: null,
    otp2: null,
    otp3: null,
    otp4: null,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'input':
        return {...state, [action.field]: action.value};
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialValue);

  const handleChange = (field, value) => {
    dispatch({
      type: 'input',
      field: field,
      value: value,
    });
  };

  const handleSubmit = async () => {
    const otpObj = {
      otp: `${state.otp1}${state.otp2}${state.otp3}${state.otp4}`,
    };

    await axios
      .post(`${APIs_BASE}/verify-otp`, JSON.stringify(otpObj), {
        headers: {
          Authorization: `Bearer ${await getAccessToken()}`,
        },
      })
      .then(response => {
        console.log(response);
        navigation.navigate(routes.auth.UserSelector);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <SafeAreaView
      style={{
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        marginHorizontal: 30,
      }}>
      <Text style={{textAlign: 'center', color: 'black', fontSize: 45}}>
        OTP
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: 27,
        }}>
        <TextInput
          style={{borderWidth: 1, width: 50, borderRadius: 5, color: 'black'}}
          keyboardType="number-pad"
          value={state.otp1}
          placeholderTextColor={'black'}
          onChangeText={text => handleChange('otp1', text)}
        />
        <TextInput
          style={{borderWidth: 1, width: 50, borderRadius: 5, color: 'black'}}
          keyboardType="number-pad"
          value={state.otp2}
          placeholderTextColor={'black'}
          onChangeText={text => handleChange('otp2', text)}
        />
        <TextInput
          style={{borderWidth: 1, width: 50, borderRadius: 5, color: 'black'}}
          keyboardType="number-pad"
          value={state.otp3}
          placeholderTextColor={'black'}
          onChangeText={text => handleChange('otp3', text)}
        />
        <TextInput
          style={{borderWidth: 1, width: 50, borderRadius: 5, color: 'black'}}
          keyboardType="number-pad"
          value={state.otp4}
          placeholderTextColor={'black'}
          onChangeText={text => handleChange('otp4', text)}
        />
      </View>
      <Text style={{textAlign: 'center', marginBottom: 15, color: 'black'}}>
        {minute}:{second < 10 ? `0${second}` : second}
      </Text>

      <Button title="Send" onPress={handleSubmit} color={'green'} />
    </SafeAreaView>
  );
};

export default OTP;
