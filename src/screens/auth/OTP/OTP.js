import {View, Text, SafeAreaView, TextInput, Button, Alert} from 'react-native';
import React, {useEffect, useReducer, useState} from 'react';
import {routes} from '../../../stack/routes';
import APIs_BASE from '../../../APIs/APIs_BASE';
// import {Token} from '../../../APIs/token';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
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
    otp1: '',
    otp2: '',
    otp3: '',
    otp4: '',
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
          'Content-Type': 'application/json',
          Authorization: `Bearer ${await getAccessToken()}`,
        },
      })
      .then(response => {
        console.log(response.data);
        navigation.navigate(routes.auth.UserSelector);
      })
      .catch(err => {
        const errorMsg = err.response?.data?.message || 'Something went wrong';
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
      <Text style={{textAlign: 'center'}}>OTP</Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: 27,
        }}>
        <TextInput
          style={{borderWidth: 1, width: 50, borderRadius: 5}}
          keyboardType="number-pad"
          maxLength={1}
          value={state.otp1}
          onChangeText={text => handleChange('otp1', text)}
        />
        <TextInput
          style={{borderWidth: 1, width: 50, borderRadius: 5}}
          keyboardType="number-pad"
          maxLength={1}
          value={state.otp2}
          onChangeText={text => handleChange('otp2', text)}
        />
        <TextInput
          style={{borderWidth: 1, width: 50, borderRadius: 5}}
          keyboardType="number-pad"
          maxLength={1}
          value={state.otp3}
          onChangeText={text => handleChange('otp3', text)}
        />
        <TextInput
          style={{borderWidth: 1, width: 50, borderRadius: 5}}
          keyboardType="number-pad"
          maxLength={1}
          value={state.otp4}
          onChangeText={text => handleChange('otp4', text)}
        />
      </View>
      <Text style={{textAlign: 'center', marginBottom: 15}}>
        {minute}:{second < 10 ? `0${second}` : second}
      </Text>

      <Button title="Send" onPress={handleSubmit} />
    </SafeAreaView>
  );
};

export default OTP;

// import {View, Text, SafeAreaView, TextInput, Button} from 'react-native';
// import React, {useEffect, useReducer, useState} from 'react';
// import {routes} from '../../../stack/routes';
// import APIs_BASE from '../../../APIs/APIs_BASE';
// import {Token} from '../../../APIs/token';

// const OTP = ({navigation}) => {
//   const [minute, setMinute] = useState(1);
//   const [second, setSecond] = useState(59);

//   const LogIn = ({navigation}) => {
//     const initialValue = {
//       otp1: '',
//       otp2: '',
//       otp3: '',
//       otp4: '',
//     };

//     const reducer = (logInState, action) => {
//       switch (action.type) {
//         case 'input':
//           return {...logInState, [action.field]: action.value};
//         default:
//           return logInState;
//       }
//     };

//     const [state, dispatch] = useReducer(reducer, initialValue);

//     const handleChange = (field, value) => {
//       dispatch({
//         type: 'input',
//         field: field,
//         value: value,
//       });
//     };

//   const handleSubmit = async () => {
//     console.log(Token);

//     try {
//       const response = await APIs_BASE.post(
//         '/verify-otp',
//         {
//           otp: '',
//         },
//         {
//           headers: {
//             'Content-Type': 'application/json',
//             Authorization: `Bearer ${Token}`,
//           },
//         },
//       );
//       console.log(response.data);
//       navigation.navigate(routes.auth.LogIn);
//     } catch (error) {
//       const errorMsg = error.response?.data?.message || 'Something went wrong';
//       Alert.alert(errorMsg);
//     }
//   };

//   return (
//     <SafeAreaView
//       style={{
//         height: '100%',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         marginHorizontal: 30,
//       }}>
//       <Text style={{textAlign: 'center'}}>OTP</Text>
//       <View
//         style={{
//           flexDirection: 'row',
//           justifyContent: 'space-between',
//           marginVertical: 27,
//         }}>
//         <TextInput
//           style={{borderWidth: 1, width: 50, borderRadius: 5}}
//           keyboardType="number-pad"
//         />
//         <TextInput
//           style={{borderWidth: 1, width: 50, borderRadius: 5}}
//           keyboardType="number-pad"
//         />
//         <TextInput
//           style={{borderWidth: 1, width: 50, borderRadius: 5}}
//           keyboardType="number-pad"
//         />
//         <TextInput
//           style={{borderWidth: 1, width: 50, borderRadius: 5}}
//           keyboardType="number-pad"
//         />
//       </View>
//       <Text style={{textAlign: 'center', marginBottom: 15}}>
//         {minute}:{second}
//       </Text>

//       <Button
//         title="Send"
//         onPress={() => {
//           handleSubmit;
//         }}
//       />
//     </SafeAreaView>
//   );
// };
// }
// export default OTP
