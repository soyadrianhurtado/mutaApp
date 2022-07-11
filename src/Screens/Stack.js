import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Colors} from '../res/colors';
import {Inicio} from '../Screens/Inicio';
import Icon from 'react-native-vector-icons/Feather';
import {NavigationContainer} from '@react-navigation/native';
import RecoleccionStack from './Recolecciones';
const Tab = createBottomTabNavigator();

export const StackGeneral = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: Colors.amarillo,
          tabBarInactiveTintColor: Colors.grisClaro,
          tabBarStyle: {
            backgroundColor: Colors.negro,
            position: 'absolute',
          },
          headerShown: false,
        }}>
        <Tab.Screen
          name="Inicio"
          component={Inicio}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="home" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Billetera"
          component={Inicio}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="credit-card" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Recolecciones"
          component={RecoleccionStack}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="calendar" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Perfil"
          component={Inicio}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="user" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
