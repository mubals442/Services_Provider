import {
  SafeAreaView,
  TouchableOpacity,
  View,
  ScrollView,
  Text,
} from 'react-native';
import React, {useEffect} from 'react';
import Cards from '../../../components/Cards';
import axios from 'axios';
import {APIs_BASE} from '../../../APIs/APIs_BASE';
import {getAccessToken} from '../../../APIs/token';

const BookingClient = () => {
  useEffect(() => {
    const getAllreservations = async () => {
      await axios
        .get(`${APIs_BASE}/reservations?status=pending&page=1`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${await getAccessToken()}`,
          },
        })
        .then(res => {
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    };

    getAllreservations();
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Cards />
          <View
            style={{
              width: '87.5%',
              alignSelf: 'center',
              borderRadius: 5,
              backgroundColor: 'green',
              padding: 2,
            }}>
            <Text style={{textAlign: 'center', fontSize: 22, color: 'white'}}>
              success
            </Text>
          </View>
        </View>

        <View>
          <Cards />
          <View
            style={{
              width: '87.5%',
              alignSelf: 'center',
              borderRadius: 5,
              backgroundColor: 'orange',
              padding: 2,
            }}>
            <Text style={{textAlign: 'center', fontSize: 22, color: 'white'}}>
              pending
            </Text>
          </View>
        </View>
        <View>
          <Cards />
          <View
            style={{
              width: '87.5%',
              alignSelf: 'center',
              borderRadius: 5,
              backgroundColor: 'red',
              padding: 2,
            }}>
            <Text style={{textAlign: 'center', fontSize: 22, color: 'white'}}>
              rejict
            </Text>
          </View>
        </View>
        <View>
          <Cards />
          <View
            style={{
              width: '87.5%',
              alignSelf: 'center',
              borderRadius: 5,
              backgroundColor: 'gray',
              padding: 2,
            }}>
            <Text style={{textAlign: 'center', fontSize: 22, color: 'white'}}>
              cancled
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BookingClient;
