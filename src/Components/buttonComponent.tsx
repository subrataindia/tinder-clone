import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const ButtonComponent = props => {
  let disable = props.disable;
  return (
    <View>
      <TouchableOpacity disabled={props.disable} onPress={props.onPress}>
        <LinearGradient
          colors={
            props.disable || props.ui
              ? ['#ECECEC', '#ECECEC']
              : ['#fe3c72', '#FF512F']
          }
          style={[styles.LinearGradient, props.Btn]}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}>
          <Text
            style={[
              props.disable || props.ui ? styles.inactiveTxt : styles.activeTxt,
              props.BtnText,
            ]}>
            {props.buttonName} {props.total ? '(' : ''}
            {props.count}
            {props.div}
            {props.total}
            {props.total ? ')' : ''}
          </Text>
        </LinearGradient>
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
  LinearGradient: {
    padding: 12,
    borderRadius: 35,
    width: '80%',
    alignSelf: 'center',
  },
});
