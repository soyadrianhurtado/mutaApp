import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colors} from '../../../res/colors';
import Calendar from 'react-native-vector-icons/FontAwesome5';
const Recoleccion = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.container__Titulo}>RECOLECCIÓN</Text>
      <View style={styles.container__detalles}>
        <Calendar name="calendar" size={13.33} color="#494949" />
        <Text style={styles.container__detalles__Text}>
          Solicitada para Jueves Febrero 05 de 2022
        </Text>
      </View>
    </View>
  );
};

export default Recoleccion;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: '15%',
    backgroundColor: Colors.negro,
    marginTop: 10,
    borderRadius: 8,
    paddingLeft: 25,
    paddingVertical: 10,
    justifyContent: 'space-around',
  },
  container__detalles: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container__detalles__Text: {
    color: Colors.white,
    fontSize: 12,
    lineHeight: 20,
    fontWeight: '400',
    paddingLeft: 5,
  },
  container__Titulo: {
    color: '#ACACAC',
    fontSize: 11,
    lineHeight: 16,
    fontWeight: '400',
  },
});
