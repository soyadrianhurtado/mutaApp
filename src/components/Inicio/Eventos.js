import React from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import ChatIcon from 'react-native-vector-icons/Ionicons';
import Arrow from 'react-native-vector-icons/MaterialIcons';
import {Colors} from '../../res/colors';

export const Evento1 = () => {
  return (
    <View style={styles.evento}>
      <View style={styles.evento__Titulo}>
        <Text style={styles.evento__Titulo__Text}>24 Jun 2022</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.container__Icon}>
          <Icon name="sun" size={24} color={Colors.white} />
        </View>
        <View style={styles.container__Descripcion}>
          <Text style={styles.container__Descripcion__Titulo}>
            Evento Galapa
          </Text>
          <Text style={styles.container__Descripcion__Info}>
            Haz Parte de la iniciativa
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
      <View style={styles.container}>
        <View style={styles.container__Icon}>
          <Icon name="video" size={24} color={Colors.white} />
        </View>
        <View style={styles.container__Descripcion}>
          <Text style={styles.container__Descripcion__Titulo}>Conferencia</Text>
          <Text style={styles.container__Descripcion__Info}>
            Video conferencia acerca de reciclaje
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

export const Evento2 = () => {
  return (
    <View style={styles.evento}>
      <View style={styles.evento__Titulo}>
        <Text style={styles.evento__Titulo__Text}>17 Feb 2022</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.container__Icon}>
          <ChatIcon
            name="ios-chatbubble-outline"
            size={24}
            color={Colors.white}
          />
        </View>
        <View style={styles.container__Descripcion}>
          <Text style={styles.container__Descripcion__Titulo}>
            Bienvenido a MUTA
          </Text>
          <Text style={styles.container__Descripcion__Info}>
            Carta de bienvenida
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

const styles = StyleSheet.create({
  evento: {
    width: '100%',
    height: '20%',
    marginTop: 10,
  },
  evento__Titulo: {
    height: '20%',
    width: '100%',
  },
  evento__Titulo__Text: {
    color: Colors.white,
    fontSize: 13,
    letterSpacing: 0.5,
    fontWeight: '600',
    paddingLeft: 20,
  },
  container: {
    width: '100%',
    height: '40%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
  },
  container__Icon: {
    backgroundColor: Colors.negro,
    width: '13%',
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
