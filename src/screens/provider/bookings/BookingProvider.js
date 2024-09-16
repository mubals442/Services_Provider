import {SafeAreaView, TouchableOpacity, View, ScrollView} from 'react-native';
import React from 'react';
import Cards from '../../../components/Cards';
import ButtonUi from '../../../components/ButtonUi';
import useToggle from '../../../hooks/useToggle';

const BookingProvider = () => {
  const [isDisaple, disabledFunc] = useToggle();

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{marginTop:30}}>
          <TouchableOpacity >
            <Cards />
          </TouchableOpacity>
          <View
            style={{flexDirection: 'row', justifyContent: 'center', gap: 10}}>
            <ButtonUi
              text={'accept'}
              color={'green'}
              textColor={'#ffffff'}
              action={() => {
                disabledFunc();
              }}
              disabled={isDisaple}
            />
            <ButtonUi
              text={'reject'}
              color={'red'}
              textColor={'#ffffff'}
              action={() => {
                disabledFunc();
              }}
              disabled={isDisaple}
            />
          </View>
        </View>
        <View style={{}}>
          <TouchableOpacity>
            <Cards />
          </TouchableOpacity>
          <View
            style={{flexDirection: 'row', justifyContent: 'center', gap: 10}}>
            <ButtonUi text={'accept'} color={'green'} textColor={'#ffffff'} />
            <ButtonUi text={'reject'} color={'red'} textColor={'#ffffff'} />
          </View>
        </View>
        <View style={{}}>
          <TouchableOpacity>
            <Cards />
          </TouchableOpacity>
          <View
            style={{flexDirection: 'row', justifyContent: 'center', gap: 10}}>
            <ButtonUi text={'accept'} color={'green'} textColor={'#ffffff'} />
            <ButtonUi text={'reject'} color={'red'} textColor={'#ffffff'} />
          </View>
        </View>
        <View style={{}}>
          <TouchableOpacity>
            <Cards />
          </TouchableOpacity>
          <View
            style={{flexDirection: 'row', justifyContent: 'center', gap: 10}}>
            <ButtonUi text={'accept'} color={'green'} textColor={'#ffffff'} />
            <ButtonUi text={'reject'} color={'red'} textColor={'#ffffff'} />
          </View>
        </View>
        <View style={{}}>
          <TouchableOpacity>
            <Cards />
          </TouchableOpacity>
          <View
            style={{flexDirection: 'row', justifyContent: 'center', gap: 10}}>
            <ButtonUi text={'accept'} color={'green'} textColor={'#ffffff'} />
            <ButtonUi text={'reject'} color={'red'} textColor={'#ffffff'} />
          </View>
        </View>
        <View style={{}}>
          <TouchableOpacity>
            <Cards />
          </TouchableOpacity>
          <View
            style={{flexDirection: 'row', justifyContent: 'center', gap: 10}}>
            <ButtonUi text={'accept'} color={'green'} textColor={'#ffffff'} />
            <ButtonUi text={'reject'} color={'red'} textColor={'#ffffff'} />
          </View>
        </View>
        <View style={{}}>
          <TouchableOpacity>
            <Cards />
          </TouchableOpacity>
          <View
            style={{flexDirection: 'row', justifyContent: 'center', gap: 10}}>
            <ButtonUi text={'accept'} color={'green'} textColor={'#ffffff'} />
            <ButtonUi text={'reject'} color={'red'} textColor={'#ffffff'} />
          </View>
        </View>
        <View style={{}}>
          <TouchableOpacity>
            <Cards />
          </TouchableOpacity>
          <View
            style={{flexDirection: 'row', justifyContent: 'center', gap: 10}}>
            <ButtonUi text={'accept'} color={'green'} textColor={'#ffffff'} />
            <ButtonUi text={'reject'} color={'red'} textColor={'#ffffff'} />
          </View>
        </View>
        <View style={{}}>
          <TouchableOpacity>
            <Cards />
          </TouchableOpacity>
          <View
            style={{flexDirection: 'row', justifyContent: 'center', gap: 10}}>
            <ButtonUi text={'accept'} color={'green'} textColor={'#ffffff'} />
            <ButtonUi text={'reject'} color={'red'} textColor={'#ffffff'} />
          </View>
        </View>
        <View style={{}}>
          <TouchableOpacity>
            <Cards />
          </TouchableOpacity>
          <View
            style={{flexDirection: 'row', justifyContent: 'center', gap: 10}}>
            <ButtonUi text={'accept'} color={'green'} textColor={'#ffffff'} />
            <ButtonUi text={'reject'} color={'red'} textColor={'#ffffff'} />
          </View>
        </View>
        <View style={{}}>
          <TouchableOpacity>
            <Cards />
          </TouchableOpacity>
          <View
            style={{flexDirection: 'row', justifyContent: 'center', gap: 10}}>
            <ButtonUi text={'accept'} color={'green'} textColor={'#ffffff'} />
            <ButtonUi text={'reject'} color={'red'} textColor={'#ffffff'} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BookingProvider;
