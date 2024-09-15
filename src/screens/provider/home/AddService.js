import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useReducer} from 'react';
import {SafeAreaFrameContext} from 'react-native-safe-area-context';
import axios from 'axios';
import {APIs_BASE} from '../../../APIs/APIs_BASE';

const AddService = () => {
  const initialValue = {
    service_name: '',
    description: '',
    price: null,
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
    await axios
      .post(
        `${APIs_BASE}/services`,
        {},
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${await getAccessToken()}`,
          },
        },
      )
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <SafeAreaView
      style={{
        alignSelf: 'center',
        borderWidth: 1,
        width: '87%',
        height: 480,
        borderRadius: 5,
      }}>
      <Text
        style={{
          textAlign: 'center',
          fontWeight: 'bold',
          color: 'black',
          fontSize: 22,
        }}>
        AddService
      </Text>
      <View style={{marginHorizontal: 5}}>
        <Text>Name:</Text>
        <TextInput
          style={{
            borderWidth: 2,
            width: '100%',
            marginBottom: 7,
            borderRadius: 5,
          }}
          onChangeText={text => handleChange('service_name', text)}
          value={state.service_name}
          placeholder="Name..."
        />

        <Text>Discribe:</Text>
        <TextInput
          style={{
            borderWidth: 2,
            width: '100%',
            height: 190,
            marginBottom: 19,
            borderRadius: 5,
          }}
          onChangeText={text => handleChange('description', text)}
          value={state.description}
          placeholder="Discribe..."
        />
        <Text>Price:</Text>
        <TextInput
          style={{
            borderWidth: 2,
            width: '100%',
            marginBottom: 19,
            borderRadius: 5,
          }}
          onChangeText={text => handleChange('price', text)}
          value={state.price}
          placeholder="Price..."
        />
        <TouchableOpacity
          onPress={() => {
            handleSubmit;
          }}
          style={{
            width: '100%',
            alignSelf: 'center',
            borderRadius: 5,
            backgroundColor: 'green',
            padding: 2,
          }}>
          <Text style={{textAlign: 'center', fontSize: 22, color: 'white'}}>
            ADD
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AddService;
