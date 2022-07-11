import React, {useState} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {Colors} from '../../../res/colors';

export const TabMenu = () => {
  const [servicio, setServicio] = useState(true);
  return (
    <View style={styles.container}>
      <View style={styles.container__botones}>
        <Pressable
          onPress={() => setServicio(true)}
          style={
            servicio
              ? styles.container__botones__botonActivo
              : styles.container__botones__botonInactivo
          }>
          <Text
            style={
              servicio
                ? styles.container__botones__TextoActivo
                : styles.container__botones__TextoInactivo
            }>
            Solicitadas
          </Text>
        </Pressable>
        <Pressable
          onPress={() => setServicio(false)}
          style={
            !servicio
              ? styles.container__botones__botonActivo
              : styles.container__botones__botonInactivo
          }>
          <Text
            style={
              !servicio
                ? styles.container__botones__TextoActivo
                : styles.container__botones__TextoInactivo
            }>
            Historial
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.negro,
  },
  container__botones: {
    width: '80%',
    height: '80%',
    padding: 5,
    backgroundColor: Colors.gris,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 8,
  },
  container__botones__botonActivo: {
    backgroundColor: Colors.negro,
    width: '49%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
  },
  container__botones__botonInactivo: {
    width: '49%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container__botones__TextoActivo: {
    color: Colors.white,
    fontSize: 14,
    lineHeight: 24,
    fontWeight: '400',
  },
  container__botones__TextoInactivo: {
    color: Colors.grisClaro,
    fontSize: 14,
    lineHeight: 24,
    fontWeight: '400',
  },
});
