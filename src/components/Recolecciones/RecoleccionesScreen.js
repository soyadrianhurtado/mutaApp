import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Colors} from '../../res/colors';
import {Solicitudes} from './components/Solicitudes';
import {TabMenu} from './components/TabMenu';

export const Recolecciones = () => {
  return (
    <View style={styles.container}>
      <TabMenu />
      <Solicitudes />
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
