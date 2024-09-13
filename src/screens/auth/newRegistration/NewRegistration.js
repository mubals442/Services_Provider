import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  Pressable,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import React, {useReducer, useState} from 'react';
import {APIs_BASE} from '../../../APIs/APIs_BASE';

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'input':
      return {...state, [action.field]: action.value};
    default:
      return state;
  }
};

const NewRegistration = ({route}) => {
  const [image, setImage] = useState({uri: ''});
  const typeOfUser = route.params;

  console.log(typeOfUser.user);
  // Initial state
  const initialValue = {
    name: '',
    email: '',
    password: '',
    mobile_number: '',
    role: `${typeOfUser.user}`,
  };

  // Set up reducer
  const [state, dispatch] = useReducer(reducer, initialValue);

  // Handle change in inputs
  const handleChange = (field, value) => {
    dispatch({
      type: 'input',
      field: field,
      value: value,
    });
  };

  // Handle form submission
  const handleSubmit = async () => {
    // Basic validation
    if (
      !state.name ||
      !state.email ||
      !state.password ||
      !state.mobile_number
    ) {
      Alert.alert('Validation Error', 'Please fill all the fields');
      return;
    }

    try {
      const response = await APIs_BASE.post('/register', {
        name: state.name,
        email: state.email,
        password: state.password,
        mobile_number: state.mobile_number,
        role: state.role,
        image: image,
      });
      // Handle successful response
      Alert.alert('Success', 'Registration successful');
      console.log(response.data);
      // Clear fields after successful registration
      dispatch({type: 'input', field: 'name', value: ''});
      dispatch({type: 'input', field: 'email', value: ''});
      dispatch({type: 'input', field: 'password', value: ''});
      dispatch({type: 'input', field: 'mobile_number', value: ''});
    } catch (error) {
      // Handle error response
      const errorMsg = error.response?.data?.message || 'Something went wrong';
      Alert.alert(errorMsg);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>New Registration</Text>

        <TouchableOpacity
          style={{
            backgroundColor: 'gray',
            width: 130,
            height: 130,
            borderRadius: 100,
            alignSelf: 'center',
            justifyContent: 'strat',
            alignItems: 'center',
            overflow: 'hidden',
          }}>
          <View
            style={{
              backgroundColor: '#00000055',
              marginTop: 0,
              width: 150,
              paddingTop: 15,
            }}>
            <Text style={{color: '#fff', textAlign: 'center'}}>
              Uplode image
            </Text>
          </View>

          <Text style={{alignSelf: 'center', marginTop: 25}}>Uplode Image</Text>
        </TouchableOpacity>

        <Text>Name:</Text>
        <TextInput
          style={styles.input}
          placeholder="Name..."
          value={state.name}
          onChangeText={text => handleChange('name', text)}
        />

        <Text>Role:</Text>
        <TextInput editable={false} style={styles.input} value={state.role} />

        <Text>Email:</Text>
        <TextInput
          style={styles.input}
          placeholder="Email..."
          value={state.email}
          onChangeText={text => handleChange('email', text)}
        />
        <Text>Password:</Text>
        <TextInput
          style={styles.input}
          placeholder="Password..."
          secureTextEntry
          value={state.password}
          onChangeText={text => handleChange('password', text)}
        />
        <Text>Phone:</Text>
        <TextInput
          style={styles.input}
          placeholder="Phone..."
          value={state.mobile_number}
          onChangeText={text => handleChange('mobile_number', text)}
        />
      </View>

      <Button title="Submit" onPress={handleSubmit} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    marginHorizontal: 30,
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 2,
    borderColor: '#ccc',
    width: '100%',
    borderRadius: 5,
    marginBottom: 10,
    padding: 10,
  },
});
export default NewRegistration;
