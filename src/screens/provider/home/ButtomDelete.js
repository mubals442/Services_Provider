import {Text, TouchableOpacity, Alert} from 'react-native';
import React, {useContext} from 'react';
import axios from 'axios';
import {APIs_BASE} from '../../../APIs/APIs_BASE';
import {getAccessToken} from '../../../APIs/token';
import {Role} from '../../../context/Role';

const ButtomDelete = props => {
  const id = `${props.id}`;

  // const {role} = useContext(Role);

  const handleDelete = async () => {
    await axios
      .delete(`${APIs_BASE}/services/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${await getAccessToken()}`,
        },
      })
      .then(res => {
        Alert.alert(res.data.message);
      })
      .catch(err => {
        console.log('Error:', err.message);
      });
  };

  return (
    <TouchableOpacity
      onPress={handleDelete}
      style={{
        width: '40%',
        borderWidth: 1,
        backgroundColor: 'red',
        borderRadius: 8,
      }}>
      <Text style={{textAlign: 'center', color: '#fff'}}>Delete</Text>
    </TouchableOpacity>
  );
};

export default ButtomDelete;
