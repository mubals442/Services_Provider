import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useReducer} from 'react';
import {routes} from '../../../stack/routes';
import {APIs_BASE} from '../../../APIs/APIs_BASE';
import {style, styles} from './style';

const LogIn = ({navigation}) => {
  const initialValue = {
    email: '',
    password: '',
  };

  const reducer = (logInState, action) => {
    switch (action.type) {
      case 'input':
        return {...logInState, [action.field]: action.value};
      default:
        return logInState;
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
    if (!state.email || !state.password) {
      Alert.alert('Validation Error', 'Please fill out both fields.');
      return;
    }

    try {
      const response = await APIs_BASE.post('/login', JSON.stringify(state), {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      accessToken = response.data;
      // AsyncStorage.setItem('accessToken', accessToken); // Store token using AsyncStorage
      navigation.navigate(routes.auth.UserSelector);
      console.log(accessToken);
    } catch (error) {
      console.error(
        'Login failed:',
        error.response ? error.response.data : error.message,
      );
      Alert.alert(
        'Login Error',
        'Unable to log in. Please check your credentials.',
      );
    }
  };

  return (
    <SafeAreaView style={style.container}>
      <View>
        <Text style={{textAlign: 'center', fontSize: 24, marginBottom: 20}}>
          Log In
        </Text>

        <Text>Email:</Text>
        <TextInput
          style={style.input}
          onChangeText={text => handleChange('email', text)}
          value={state.email}
          placeholder="Email..."
          keyboardType="email-address"
        />

        <Text>Password:</Text>
        <TextInput
          style={style.input}
          secureTextEntry={true}
          onChangeText={text => handleChange('password', text)}
          value={state.password}
          placeholder="Password..."
        />

        <Button title="Submit" onPress={handleSubmit} />

        <View style={style.optionsContainer}>
          <TouchableOpacity
            onPress={() => {
              /* Implement remember me functionality */
            }}>
            <Text style={style.link}>Remember me</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate(routes.auth.UserSelector);
            }}>
            <Text style={style.link}>I don't Have Account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LogIn;