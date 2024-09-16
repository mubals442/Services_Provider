import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useReducer} from 'react';
import axios from 'axios';
import {APIs_BASE} from '../../../APIs/APIs_BASE';
import {getAccessToken} from '../../../APIs/token';

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
        {
          service_name: state.service_name,
          description: state.description,
          price: state.price,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${await getAccessToken()}`,
          },
        },
      )
      .then(res => {
        console.log(res.data)
        Alert.alert("add succefull")
        dispatch({type: 'input', field: 'service_name', value: ''});
        dispatch({type: 'input', field: 'description', value: ''});
        dispatch({type: 'input', field: 'price', value: ''});
      })
      .catch(err => {
        console.log(err.response.data, 'errors');
      });
  };

  return (
    <SafeAreaView
      style={{
        alignSelf: 'center',
        borderWidth: 1,
        width: '87%',
        height: 580,
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
        <Text style={{color: 'black'}}>Name:</Text>
        <TextInput
          style={{
            borderWidth: 2,
            width: '100%',
            marginBottom: 7,
            borderRadius: 5,
            color: 'black',
          }}
          placeholderTextColor={'black'}
          onChangeText={text => handleChange('service_name', text)}
          value={state.service_name}
          placeholder="Name..."
        />

        <Text style={{color: 'black'}}>Discribe:</Text>
        <TextInput
          style={{
            borderWidth: 2,
            width: '100%',
            height: 190,
            marginBottom: 19,
            borderRadius: 5,
            color: 'black',
          }}
          placeholderTextColor={'black'}
          onChangeText={text => handleChange('description', text)}
          value={state.description}
          placeholder="Discribe..."
        />
        <Text style={{color: 'black'}}>Price:</Text>
        <TextInput
          style={{
            borderWidth: 2,
            width: '100%',
            marginBottom: 19,
            borderRadius: 5,
            color: 'black',
          }}
          placeholderTextColor={'black'}
          onChangeText={text => handleChange('price', text)}
          value={state.price}
          placeholder="Price..."
        />
        <TouchableOpacity
          onPress={handleSubmit}
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
