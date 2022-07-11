import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colors} from '../../../res/colors';
const Estado = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.container__Titulo}>ESTADO</Text>
      <View style={styles.container__Info}>
        <View style={styles.container__Info__Grafica}>
          <View style={styles.container__Info__GraficaRecolectado} />
          <View style={styles.container__Info__GraficaLinea} />
          <View style={styles.container__Info__GraficaSolicitada} />
        </View>
        <View style={styles.container__Info__Detalles}>
          <View style={styles.container__Info__DetallesTodo}>
            <View style={styles.container__Info__DetallesRecolectado}>
              <Text
                style={styles.container__Info__DetallesRecolectadoDescripcion}>
                Reciclabes recolectados
              </Text>
              <Text
                style={styles.container__Info__DetallesRecolectadoDireccion}>
                Cra 12 # 13 - 14, 12:30 AM
              </Text>
            </View>
            <View style={styles.container__Info__DetallesRecolectadoFecha}>
              <Text
                style={styles.container__Info__DetallesRecolectadoFechaText}>
                13/02/2022
              </Text>
            </View>
          </View>
          <View style={styles.container__Info__DetallesTodo}>
            <View style={styles.container__Info__DetallesRecolectado}>
              <Text
                style={styles.container__Info__DetallesRecolectadoDescripcion}>
                Recolección solicitada con exito
              </Text>
              <Text
                style={styles.container__Info__DetallesRecolectadoDireccion}>
                Desde La AppMuta
              </Text>
            </View>
            <View style={styles.container__Info__DetallesRecolectadoFecha}>
              <Text
                style={styles.container__Info__DetallesRecolectadoFechaText}>
                13/02/2022
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Estado;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    width: '90%',
    height: '30%',
    backgroundColor: Colors.negro,
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  container__Titulo: {
    fontSize: 11,
    fontWeight: '400',
    lineHeight: 16,
    color: '#acacac',
  },
  container__Info: {
    flexDirection: 'row',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  container__Info__Grafica: {
    width: '10%',
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container__Info__GraficaRecolectado: {
    width: '40%',
    height: '15%',
    backgroundColor: Colors.amarillo,
    borderRadius: 100,
    position: 'relative',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  container__Info__GraficaLinea: {
    width: '10%',
    height: '60%',
    backgroundColor: Colors.amarillo,
  },
  container__Info__GraficaSolicitada: {
    borderWidth: 3,
    borderColor: Colors.amarillo,
    borderRadius: 50,
    backgroundColor: Colors.negro,
    width: '40%',
    height: '15%',
  },
  container__Info__Detalles: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '90%',
    height: '60%',
  },
  container__Info__DetallesTodo: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  container__Info__DetallesRecolectado: {
    width: '75%',
  },
  container__Info__DetallesRecolectadoDescripcion: {
    fontSize: 12,
    lineHeight: 20,
    fontWeight: '400',
    color: Colors.white,
  },
  container__Info__DetallesRecolectadoDireccion: {
    fontSize: 11,
    lineHeight: 16,
    fontWeight: '400',
    color: Colors.grisClaro,
  },
  container__Info__DetallesRecolectadoFecha: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  container__Info__DetallesRecolectadoFechaText: {
    fontSize: 11,
    lineHeight: 16,
    fontWeight: '400',
    color: Colors.grisClaro,
  },
});
