import React from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-paper';
import ButtonComponent from '../Components/buttonComponent';
import {useState} from 'react';
import DatePicker from 'react-native-date-picker';

const BirthdayScreen = ({navigation}) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  let [test, setTest] = useState([]);

  console.log('test', test);
  console.log('test2', test);
  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <View style={{marginTop: 65, marginLeft: 55}}>
        <Text style={styles.title}>My </Text>
        <Text style={styles.title}>Birthday is</Text>
      </View>
      <View style={styles.dateInput}>
        <TouchableOpacity
          onPress={() => {
            setOpen(true);
          }}>
          {test.length > 0 ? (
            <Text style={{fontSize: 31, color: '#555555'}}>
              {date.toLocaleDateString()}
            </Text>
          ) : (
            <Text style={{fontSize: 31, color: '#555555'}}>DD/MM/YYYY</Text>
          )}
        </TouchableOpacity>
        <DatePicker
          modal
          mode="date"
          open={open}
          date={date}
          onConfirm={date => {
            setOpen(false);
            setDate(date);
            setTest('1');
          }}
          onCancel={() => {
            setOpen(false);
          }}
        />
      </View>

      <View style={styles.middleView}>
        <Text style={styles.middleText}>Your age will be public.</Text>
      </View>

      <ButtonComponent
        buttonName="CONTINUE"
        disable={test.length > 0 ? false : true}
        ui={test.length > 0 ? false : true}
        Btn={{marginBottom: 20}}
        onPress={() => {
          navigation.navigate('Gender');
        }}
      />
    </View>
  );
};

export default BirthdayScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 45,
    fontWeight: '500',
    color: '#333333',
  },
  dateInput: {
    marginTop: 65,
    width: '73%',
    alignSelf: 'center',
    fontSize: 50,
    marginBottom: 7,
  },
  middleView: {
    flex: 1,
    marginLeft: 56,
    marginTop: 0,
    width: '73%',
  },
  middleText: {
    fontSize: 15,
    color: 'grey',
  },
});
