import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const ButtonComponent = props => {
  return (
    <View>
      <TouchableOpacity
        style={[
          props.disable ? styles.inactiveBtn : styles.activeBtn,
          props.Btn,
        ]}
        disabled={props.disable}
        onPress={props.onPress}>
        <Text
          style={[
            props.disable ? styles.inactiveTxt : styles.activeTxt,
            props.BtnText,
          ]}>
          {props.buttonName}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default ButtonComponent;

const styles = StyleSheet.create({
  activeBtn: {
    backgroundColor: '#fe3c72',
    width: '80%',
    alignSelf: 'center',
    padding: 12,
    borderRadius: 35,
  },
  inactiveBtn: {
    backgroundColor: '#ECECEC',
    width: '80%',
    alignSelf: 'center',
    padding: 12,
    borderRadius: 35,
  },
  inactiveTxt: {
    color: '#888888',
    fontSize: 20,
    fontWeight: '600',
    alignSelf: 'center',
  },
  activeTxt: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
    alignSelf: 'center',
  },
});
