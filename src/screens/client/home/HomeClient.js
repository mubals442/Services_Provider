import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Cards from '../../../components/Cards';
import axios from 'axios';
import {APIs_BASE} from '../../../APIs/APIs_BASE';
import {getAccessToken} from '../../../APIs/token';
import {FlatList} from 'react-native-gesture-handler';

const HomeClient = () => {
  const [services, setServices] = useState([{}]);

  useEffect(() => {
    const getAllServices = async () => {
      await axios
        .get(`${APIs_BASE}/services?page=1`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${await getAccessToken()}`,
          },
        })
        .then(res => {
          setServices(res.data.data);
        })
        .catch(err => {
          console.log(err);
        });
    };
    getAllServices();
  }, []);

  console.log(services);

  return (
    <SafeAreaView>
      {/* <TouchableOpacity>
        <Cards />
      </TouchableOpacity> */}

      <FlatList
        data={services}
        // keyExtractor={}
        renderItem={({item}) => {
          return (
            <View
              style={{
                borderWidth: 2,
                width: 360,
                height: 130,
                borderRadius: 7,
                alignSelf: 'center',
                justifyContent: 'center',
                marginVertical: 6,
              }}>
              {/* <Text style={{textAlign: 'center',color:'black'}}>{item.provider.name}</Text> */}
              <Text style={{textAlign: 'center',color:'black'}}>{item.description}</Text>
              <Text style={{textAlign: 'center',color:'black'}}>{item.price}</Text>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default HomeClient;
