import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Recolecciones} from '../components/Recolecciones/RecoleccionesScreen';
import {Recoleccion} from '../components/Recolecciones/RecoleccionScreen';
import {Colors} from '../res/colors';

const Stack = createNativeStackNavigator();

const RecoleccionStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Recolecciones Screen"
        component={Recolecciones}
        options={{
          title: 'Recolecciones',
          headerStyle: {backgroundColor: Colors.negro},
          headerTintColor: Colors.white,
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: '500',
            fontSize: 16,
          },
        }}
      />
      <Stack.Screen
        name="Recoleccion"
        component={Recoleccion}
        options={{
          title: 'Detalle de recolección',
          headerStyle: {backgroundColor: Colors.negro},
          headerTintColor: Colors.white,
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: '500',
            fontSize: 16,
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default RecoleccionStack;
