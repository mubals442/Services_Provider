import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import Cards from '../../../components/Cards';

const HomeClient = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <TouchableOpacity>
          <Cards />
        </TouchableOpacity>
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeClient;
