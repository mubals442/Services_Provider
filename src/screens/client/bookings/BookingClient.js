import {
  SafeAreaView,
  TouchableOpacity,
  View,
  ScrollView,
  Text,
} from 'react-native';
import React from 'react';
import Cards from '../../../components/Cards';

const BookingClient = () => {
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
              backgroundColor: 'green',
              padding: 2,
            }}>
            <Text style={{textAlign: 'center', fontSize: 22, color: 'white'}}>
              success
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BookingClient;
