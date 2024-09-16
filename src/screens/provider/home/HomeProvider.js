import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  ScrollViewBase,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Cards from '../../../components/Cards';
import AddService from './AddService';
import axios from 'axios';
import {APIs_BASE} from '../../../APIs/APIs_BASE';
import {getAccessToken} from '../../../APIs/token';
import {FlatList} from 'react-native-gesture-handler';
import ButtomDelete from './ButtomDelete';
import ButtomEdit from './ButtomEdit';

const HomeProvider = () => {
  const [ser, setSer] = useState([{}]);

  useEffect(() => {
    const getAllMyServices = async () => {
      await axios
        .get(`${APIs_BASE}/services/my-services`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${await getAccessToken()}`,
          },
        })
        .then(response => {
          // console.log(response.data.services);
          setSer(response.data.services);
        })
        .catch(err => {
          console.log(err.response.data);
        });
    };
    getAllMyServices();
  }, []);

  return (
    <SafeAreaView style={{marginTop: 30}}>
      <ScrollView>
        <View style={{marginBottom: 35}}>
          <AddService />
        </View>

        <FlatList
          data={ser}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return (
              <View
                style={{
                  borderWidth: 2,
                  width: 360,
                  height: 140,
                  borderRadius: 7,
                  alignSelf: 'center',
                  justifyContent: 'center',
                  marginVertical: 6,
                }}>
                <Text style={{textAlign: 'center', color: 'black'}}>
                  {item.service_name}
                </Text>
                <Text style={{textAlign: 'center', color: 'black'}}>
                  {item.description}
                </Text>
                <Text style={{textAlign: 'center', color: 'black'}}>
                  {item.price}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                  }}>
                  <ButtomEdit />
                  <ButtomDelete id={item.id} />
                </View>
              </View>
            );
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeProvider;
