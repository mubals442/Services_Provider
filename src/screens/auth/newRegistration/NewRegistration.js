import {View, Text, SafeAreaView, TextInput, Button} from 'react-native';
import React, {useReducer} from 'react';

const NewRegistration = () => {
  const initialValue = {
    name: '',
    email: '',
    password: '',
    mobile_number: '',
    role: '',
    image: '',
  };

  const [state, dispatch] = useReducer(reducer, initialValue);

  const reducer = (state, action) => {};

  const handleChange = () => {};
  const handleSubmit = () => {};
  return (
    <SafeAreaView
      style={{
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        marginHorizontal: 30,
      }}>
      <View>
        <Text style={{textAlign: 'center'}}>New registration</Text>
        <Text>Name:</Text>
        <TextInput
          style={{borderWidth: 2, width: '100%',borderRadius: 5}}
          placeholder="name..."
        />
        <Text>Email:</Text>
        <TextInput
          style={{borderWidth: 2, width: '100%',borderRadius: 5}}
          placeholder="Email..."
        />
        <Text>Password:</Text>
        <TextInput
          style={{borderWidth: 2, width: '100%',borderRadius: 5}}
          placeholder="Password..."
        />
        <Text>Phone:</Text>
        <TextInput
          style={{borderWidth: 2, width: '100%',borderRadius: 5,marginBottom:13}}
          placeholder="Phone..."
        />
      </View>

      <Button
        title="Submit"
        onPress={() => {
          console.log('');
        }}
      />
    </SafeAreaView>
  );
};

export default NewRegistration;
