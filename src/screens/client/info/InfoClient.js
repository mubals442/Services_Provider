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
    <View style={{marginHorizontal: 30,marginTop:30}}>
      <Text style={{textAlign:'center',fontSize:30,color:'black',marginBottom:30}}>Profile</Text>
      <TouchableOpacity
        onPress={() => {}}
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
          <Text style={{color: '#fff', textAlign: 'center'}}>Uplode image</Text>
        </View>
        <Text style={{alignSelf: 'center', marginTop: 25}}>Uplode Image</Text>
      </TouchableOpacity>

      <Text>Name:</Text>
      <TextInput editable={false} style={styles.input} value='musab' placeholder="Name..." />

      <Text>Role:</Text>
      <TextInput editable={false} style={styles.input} value='client'/>

      <Text>Email:</Text>
      <TextInput editable={false} style={styles.input} value="musab20151@gmail.com" placeholder="Email..." />
      <Text>Phone:</Text>
      <TextInput
        editable={false}
        style={styles.input}
        keyboardType="number-pad"
        placeholder="Phone..."
        value='0535901627'
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
    borderColor: '#ccc',
    width: '100%',
    borderRadius: 5,
    marginBottom: 10,
    padding: 10,
  },
});

export default InfoClient;
