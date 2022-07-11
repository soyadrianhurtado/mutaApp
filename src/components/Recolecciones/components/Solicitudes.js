import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import Calendar from 'react-native-vector-icons/FontAwesome5';
import User from 'react-native-vector-icons/FontAwesome';
import Location from 'react-native-vector-icons/Ionicons';
import Arrow from 'react-native-vector-icons/AntDesign';
import {Colors} from '../../../res/colors';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {enviarTelefono, enviarUsuario} from '../../../redux/reducers/userSlice';
const DATA = [
  {
    id: 1,
    fecha: 'Viernes 22 de Julio de 2022',
    nombre: 'Alberto Mango',
    telefono: '(+57) 300 292 2381',
    ciudad: 'Barranquilla, Colombia',
  },
  {
    id: 2,
    fecha: 'Viernes 22 de Julio de 2022',
    nombre: 'Luis Mango',
    telefono: '(+57) 300 292 2381',
    ciudad: 'Barranquilla, Colombia',
  },
];

export const Solicitudes = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <View style={styles.container__FechaSolicitud}>
        <View style={styles.container__Fecha}>
          <View style={styles.container__FechaTitulo}>
            <Calendar name="calendar" size={13.33} color="#494949" />
            <Text style={styles.container__FechaTitulo__Text}>
              FECHA DE RECOLECCIÓN
            </Text>
          </View>
          <Text style={styles.container__Fecha__Text}>
            Viernes 22 de Julio de 2022
          </Text>
        </View>
        <View style={styles.container__Boton}>
          <Pressable style={styles.container__Boton__Press}>
            <Arrow name="arrowright" color={Colors.white} size={20} />
          </Pressable>
        </View>
      </View>
      {DATA.map(dato => {
        return (
          <View style={styles.container__solicitud} key={dato.id}>
            <View style={styles.container__FechaSolicitudItem}>
              <View style={styles.container__solicitud__Fecha}>
                <View style={styles.container__FechaTitulo}>
                  <Calendar name="calendar" size={13.33} color="#494949" />
                  <Text style={styles.container__FechaTitulo__Text}>
                    FECHA DE RECOLECCIÓN
                  </Text>
                </View>
                <Text style={styles.container__Fecha__Text}>{dato.fecha}</Text>
              </View>
              <View style={styles.container__Boton}>
                <Pressable
                  style={styles.container__Boton__Press}
                  onPress={() => {
                    dispatch(enviarUsuario(dato.nombre));
                    dispatch(enviarTelefono(dato.telefono));
                    navigation.navigate('Recoleccion');
                  }}>
                  <Arrow name="arrowright" color={Colors.white} size={20} />
                </Pressable>
              </View>
            </View>
            <View style={styles.container__solicitud__usuario}>
              <View style={styles.container__solicitud__usuarioInfo}>
                <User name="user" size={16} color={Colors.amarillo} />
                <Text style={styles.container__solicitud__usuarioInfoText}>
                  {dato.nombre} -
                </Text>
                <Text style={styles.container__solicitud__usuarioInfoNUmber}>
                  {` ${dato.telefono}`}
                </Text>
              </View>
              <View style={styles.container__solicitud__usuarioCiudad}>
                <Location name="location" size={13} color="#494949" />
                <Text style={styles.container__solicitud__usuarioCiudadTexto}>
                  {dato.ciudad}
                </Text>
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: '100%',
    alignItems: 'center',
    paddingTop: 10,
  },
  container__FechaSolicitud: {
    width: '100%',
    height: '13%',
    flexDirection: 'row',
    backgroundColor: Colors.negro,
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  container__Fecha: {
    width: '85%',
    alignItems: 'flex-start',
    justifyContent: 'center',

    height: '100%',
    paddingLeft: 20,
  },
  container__FechaTitulo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container__FechaTitulo__Text: {
    fontSize: 11,
    lineHeight: 16,
    fontWeight: '400',
    color: '#ACACAC',
    marginLeft: 10,
  },
  container__Fecha__Text: {
    fontSize: 12,
    fontWeight: '400',
    color: Colors.white,
    marginLeft: 21,
    marginTop: 5,
  },
  container__Boton: {
    height: '100%',
    width: '14%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container__Boton__Press: {
    width: '100%',
    height: '70%',
    backgroundColor: Colors.gris,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  container__solicitudes: {
    width: '100%',
    marginTop: 10,
  },
  container__solicitud: {
    width: '100%',
    height: '26%',
    marginTop: 8,
    backgroundColor: Colors.negro,
    padding: 10,
    borderRadius: 8,
  },
  container__FechaSolicitudItem: {
    width: '100%',
    height: '55%',
    flexDirection: 'row',
    backgroundColor: Colors.negro,
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  container__solicitud__Fecha: {
    width: '85%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    height: '100%',
    paddingLeft: 8,
    borderBottomColor: Colors.gris,
    borderBottomWidth: 1,
  },
  container__solicitud__usuario: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 1,
    paddingVertical: 10,
  },
  container__solicitud__usuarioInfo: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  container__solicitud__usuarioInfoText: {
    color: Colors.white,
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 20,
    paddingLeft: 10,
  },
  container__solicitud__usuarioInfoNUmber: {
    color: Colors.grisClaro,
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 20,
  },
  container__solicitud__usuarioCiudad: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  container__solicitud__usuarioCiudadTexto: {
    fontSize: 12,
    lineHeight: 20,
    fontWeight: '400',
    color: Colors.white,
    paddingLeft: 10,
  },
});
