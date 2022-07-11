import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Colors} from '../../res/colors';

const Slider = () => {
  return (
    <View style={styles.slider}>
      <View style={styles.container}>
        <Image
          style={styles.container__Imagen}
          source={require('../../assets/bgSlider.jpeg')}
        />
        <View style={styles.container__Info}>
          <Text style={styles.container__Info__Titulo}>¿Cómo Reciclar?</Text>
          <Text style={styles.container__Info__Descripcion}>
            ¿Sabes dónde depositar la basura para no contaminar?
          </Text>
        </View>
        <View style={styles.container__Flecha}>
          <Icon name="arrow-forward-circle" size={43} color="#cecece" />
        </View>
      </View>
      <View style={styles.elipses}>
        <View style={styles.elipse} />
        <View style={styles.elipseInactivo} />
        <View style={styles.elipseInactivo} />
      </View>
    </View>
  );
};
export default Slider;

const styles = StyleSheet.create({
  slider: {
    width: '90%',
    height: 167.11,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: 5,
  },
  container: {
    height: 146.03,
    width: '100%',
  },
  container__Imagen: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  container__Info: {
    width: '60%',
    height: '70%',
    position: 'absolute',
    paddingLeft: 20,
    paddingVertical: 10,
    justifyContent: 'center',
  },
  container__Info__Titulo: {
    fontSize: 16,
    lineHeight: 28,
    fontWeight: '700',
    color: '#f8f8f8',
  },
  container__Info__Descripcion: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 20,
    color: Colors.white,
  },
  container__Flecha: {
    position: 'absolute',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 90,
  },
  elipses: {
    width: '12%',
    height: '10%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 20,
  },
  elipse: {
    width: 10.59,
    height: 10.59,
    borderRadius: 50,
    backgroundColor: Colors.white,
  },
  elipseInactivo: {
    width: 8.44,
    height: 8.44,
    backgroundColor: '#494949',
    borderRadius: 50,
  },
});
