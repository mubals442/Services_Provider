import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import React from 'react';

const InfoClient = () => {
  return (
    <View style={{marginHorizontal: 30, marginTop: 30}}>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 20,
          color: 'black',
          marginBottom: 30,
        }}>
        Profile
      </Text>
      <TouchableOpacity
        onPress={() => {}}
        style={{
          backgroundColor: 'gray',
          width: 120,
          height: 120,
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
          <Text style={{color: '#fff', textAlign: 'center', fontSize: 8}}>
            Uplode image
          </Text>
        </View>
        <Text style={{alignSelf: 'center', marginTop: 25, fontSize: 8}}>
          Uplode Image
        </Text>
      </TouchableOpacity>

      <Text style={{color: 'black'}}>Name:</Text>
      <TextInput
        editable={false}
        style={styles.input}
        value="musab"
        placeholder="Name..."
      />

      <Text style={{color: 'black'}}>Role:</Text>
      <TextInput editable={false} style={styles.input} value="client" />

      <Text style={{color: 'black'}}>Email:</Text>
      <TextInput
        editable={false}
        style={styles.input}
        value="musab20151@gmail.com"
        placeholder="Email..."
      />
      <Text style={{color: 'black'}}>Phone:</Text>
      <TextInput
        editable={false}
        style={styles.input}
        keyboardType="number-pad"
        placeholder="Phone..."
        value="0535901627"
      />
    </View>
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
    borderColor: '#000000',
    width: '100%',
    borderRadius: 5,
    marginBottom: 10,
    padding: 10,
    color: 'black',
    backgroundColor: 'gray',opacity:0.4 
  },
});

export default InfoClient;
