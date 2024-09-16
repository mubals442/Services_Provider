import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';

const Cards = () => {
  return (
    <SafeAreaView>
      <View
        style={{
          borderWidth: 2,
          width: 360,
          height: 130,
          borderRadius: 7,
          alignSelf: 'center',
          marginVertical: 6,
        }}>
        <Text style={{color:'black'}}>Cards</Text>
      </View>
    </SafeAreaView>
  );
};

export default Cards;
