import React from 'react';
import {IconButton} from 'react-native-paper';
import {createStackNavigator} from '@react-navigation/stack';
import About from '../screens/About';
import Home from '../screens/Home';
import Ordenador from '../screens/Lista';

const Stack = createStackNavigator();

export default function StackNavigation(props) {
  const {navigation} = props;

  const buttonLeft = () => {
    return <IconButton icon="menu" onPress={() => navigation.openDrawer()} />;
  };

  const buttonRight = () => {
    return (
      <IconButton
        icon="camera"
        onPress={() => console.log('Abriendo la camara')}
      />
    );
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={Home}
        options={{
          title: 'Inicio',
          headerLeft: () => buttonLeft(),
          headerRight: () => buttonRight(),
        }}
      />
      <Stack.Screen
        name="about"
        component={About}
        options={{
          title: 'Sobre El proyecto',
          headerLeft: () => buttonLeft(),
          headerRight: () => buttonRight(),
        }}
      />
      <Stack.Screen
        name="lista"
        component={Ordenador}
        options={{
          title: 'Ordenadores',
          headerLeft: () => buttonLeft(),
          headerRight: () => buttonRight(),
        }}
      />
    </Stack.Navigator>
  );
}
