import React from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Arrow from 'react-native-vector-icons/MaterialIcons';
import {Colors} from '../../res/colors';

const Recomendado = () => {
  return (
    <View style={styles.recomendado}>
      <View style={styles.recomendado__Titulo}>
        <Text style={styles.recomendado__Titulo__Text}>Recomendado</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.container__Icon}>
          <Icon name="box" size={35} color={Colors.white} />
        </View>
        <View style={styles.container__Descripcion}>
          <Text style={styles.container__Descripcion__Titulo}>
            Solicitar Recolección
          </Text>
          <Text style={styles.container__Descripcion__Info}>
            MUTA envía un recolector a tu puerta
          </Text>
        </View>
        <View style={styles.container__Boton}>
          <Pressable>
            <Arrow
              name="arrow-forward-ios"
              size={15}
              color={Colors.grisClaro}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Recomendado;

const styles = StyleSheet.create({
  recomendado: {
    width: '100%',
    height: '15%',
    marginVertical: 5,
  },
  recomendado__Titulo: {
    height: '30%',
    width: '100%',
  },
  recomendado__Titulo__Text: {
    color: Colors.white,
    fontSize: 13,
    letterSpacing: 0.5,
    fontWeight: '600',
    paddingLeft: 20,
  },
  container: {
    width: '100%',
    height: '70%',
    borderLeftColor: Colors.amarillo,
    borderLeftWidth: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
  },
  container__Icon: {
    backgroundColor: Colors.negro,
    width: '18%',
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  container__Descripcion: {
    height: '80%',
    width: '70%',
    justifyContent: 'center',
    paddingLeft: 10,
  },
  container__Descripcion__Titulo: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 15.5,
    color: Colors.white,
  },
  container__Descripcion__Info: {
    color: Colors.grisClaro,
    fontSize: 11,
    fontWeight: '400',
    lineHeight: 15.5,
  },
  container__Boton: {
    width: '8%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
