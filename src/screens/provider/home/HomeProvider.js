import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import Cards from '../../../components/Cards';
import AddService from './AddService';

const HomeProvider = () => {
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
