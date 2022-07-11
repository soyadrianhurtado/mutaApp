import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colors} from '../../res/colors';
import Icon from 'react-native-vector-icons/Ionicons';
const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container__Text}>
        <Text style={styles.container__Text__momento}>Buenas tardes,</Text>
        <Text style={styles.container__Text__name}>Alejandro Caiaffa</Text>
      </View>
      <View style={styles.container__Notifcacion}>
        <View style={styles.container__Notifcacion__Icon}>
          <Icon
            name="notifications"
            size={24}
            color={Colors.grisClaro}
            style={{marginTop: 5}}
          />
          <View style={styles.container__Notifcacion__BadgeContainer}>
            <View style={styles.container__Notifcacion__BadgePoint} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 60,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  container__Text: {
    width: 165,
    height: 60,
  },
  container__Text__momento: {
    fontWeight: '400',
    color: Colors.grisClaro,
    fontSize: 14,
    lineHeight: 24,
  },
  container__Text__name: {
    fontWeight: '500',
    fontSize: 20,
    lineHeight: 32,
    color: Colors.white,
  },
  container__Notifcacion: {
    height: '100%',
    justifyContent: 'center',
  },
  container__Notifcacion__Icon: {
    borderWidth: 1,
    borderColor: Colors.grisClaro,
    borderRadius: 8,
    width: 40,
    height: 40,
    alignItems: 'center',
  },
  container__Notifcacion__BadgeContainer: {
    width: 24,
    height: 10,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    position: 'absolute',
    borderRadius: 100,
    marginTop: 17,
  },
  container__Notifcacion__BadgePoint: {
    width: 9,
    height: 9,
    backgroundColor: Colors.amarillo,
    borderRadius: 50,
    shadowColor: Colors.negro,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
