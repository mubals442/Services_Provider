import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {SafeAreaFrameContext} from 'react-native-safe-area-context';

const AddService = () => {
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
          placeholder="Price..."
        />
        <TouchableOpacity
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
