import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useEffect} from 'react';
import Cards from '../../../components/Cards';
import AddService from './AddService';
import axios from 'axios';
import {APIs_BASE} from '../../../APIs/APIs_BASE';
import {getAccessToken} from '../../../APIs/token';

const HomeProvider = () => {
  useEffect(() => {
    const getAllMyServices = async () => {
      await axios.get(`${APIs_BASE}/services/my-services`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${await getAccessToken()}`,
        },
      })
        .then(response => {
          console.log(response.data);
        })
        .catch(err => {
          console.log(err);
        });
    };
    getAllMyServices()
  },[]);

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <AddService />
        </View>
        <TouchableOpacity>
          <Cards />
        </TouchableOpacity>
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeProvider;
