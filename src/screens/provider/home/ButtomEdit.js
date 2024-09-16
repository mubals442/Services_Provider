import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const ButtomEdit = () => {
  return (
    <TouchableOpacity
    onPress={() => {console.log('Edit')}}
      style={{
        width: '40%',
        borderWidth: 1,
        backgroundColor: 'purple',
        borderRadius: 8,
      }}>
      <Text style={{textAlign: 'center', color: '#fff'}}>Edit</Text>
    </TouchableOpacity>
  );
};

export default ButtomEdit;
