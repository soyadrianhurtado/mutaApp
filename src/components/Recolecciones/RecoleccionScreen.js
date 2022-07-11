import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Colors} from '../../res/colors';
import Estado from './components/Estado';
import Mutante from './components/Mutante';
import RecoleccionComponente from './components/Recoleccion';
export const Recoleccion = () => {
  return (
    <View style={styles.container}>
      <Mutante />
      <Estado />
      <RecoleccionComponente />
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
