import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Colors} from '../res/colors';
import Header from '../components/Inicio/Header';
import Slider from '../components/Inicio/Slider';
import Recomendado from '../components/Inicio/Recomendado';
import {Evento1, Evento2} from '../components/Inicio/Eventos';
export const Inicio = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Slider />
      <Recomendado />
      <Evento1 />
      <Evento2 />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    backgroundColor: Colors.gris,
  },
});
