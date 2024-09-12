import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import React, {useReducer} from 'react';
import {routes} from '../../../stack/routes';

const LogIn = ({navigation}) => {

  const initialValue = {
    email: '',
    password: '',
  };

  const [state, dispatch] = useReducer(reducer, initialValue);

  const reducer = (state, action) => {};

  const handleChange = () => {};
  const handleSumbit = () => {};

  return (
    <SafeAreaView
      style={{
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        marginHorizontal: 30,
      }}>
      <View>
        <Text style={{textAlign: 'center'}}>Log In</Text>
        <Text>Email:</Text>
        <TextInput
          style={{borderWidth: 2, width: '100%', marginBottom: 7,borderRadius: 5}}
          placeholder="Email..."
        />

        <Text>Password:</Text>
        <TextInput
          style={{borderWidth: 2, width: '100%', marginBottom: 19}}
          placeholder="Password..."
        />

        <Button
          title="Submit"
          onPress={() => {
            console.log('');
          }}
        />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 6,
          }}>
          <TouchableOpacity onPress={() => {}}>
            <Text style={{color: 'blue'}}>Remeber me</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate(routes.auth.UserSelector);
            }}>
            <Text style={{color: 'blue'}}>I dont Have Account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LogIn;
