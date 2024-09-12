import {View, Text, Touchable, TouchableOpacity} from 'react-native';
import React from 'react';

const ButtonUi = props => {
  return (
    <TouchableOpacity
      disabled={props.disabled}
      style={{
        // borderWidth: 1,
        width: '42.5%',
        height: 29,
        justifyContent: 'center',
        borderRadius: 7,
        backgroundColor: props.color,
        opacity: props.disabled ? 0.5 : null,
      }}
      onPress={props.action}>
      <Text style={{textAlign: 'center', color: props.textColor}}>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonUi;
