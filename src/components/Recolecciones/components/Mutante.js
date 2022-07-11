import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {selectTelefono, selectUsuario} from '../../../redux/reducers/userSlice';
import User from 'react-native-vector-icons/FontAwesome';
import Location from 'react-native-vector-icons/Ionicons';
import {Colors} from '../../../res/colors';
const Mutante = () => {
  const nombre = useSelector(selectUsuario);
  const telefono = useSelector(selectTelefono);
  return (
    <View style={styles.container}>
      <Text style={styles.container__Titulo}>MUTANTE</Text>
      <View style={styles.container__usuarioInfo}>
        <User name="user" size={16} color={Colors.amarillo} />
        <Text style={styles.container__usuarioInfoText}>{nombre} -</Text>
        <Text style={styles.container__usuarioInfoNUmber}>
          {` ${telefono}`}
        </Text>
      </View>
      <View style={styles.container__usuarioCiudad}>
        <Location name="location" size={13} color="#494949" />
        <Text style={styles.container__usuarioCiudadTexto}>
          Cra 12 # 13-14 Barranquilla, Atlantico
        </Text>
      </View>
    </View>
  );
};

export default Mutante;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    width: '90%',
    height: '20%',
    backgroundColor: Colors.negro,
    borderRadius: 8,
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  container__Titulo: {
    fontSize: 11,
    fontWeight: '400',
    lineHeight: 16,
    color: '#acacac',
  },
  container__usuarioInfo: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  container__usuarioInfoText: {
    color: Colors.white,
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 20,
    paddingLeft: 10,
  },
  container__usuarioInfoNUmber: {
    color: Colors.grisClaro,
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 20,
  },
  container__usuarioCiudad: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  container__usuarioCiudadTexto: {
    fontSize: 12,
    lineHeight: 20,
    fontWeight: '400',
    color: Colors.white,
    paddingLeft: 10,
  },
});
