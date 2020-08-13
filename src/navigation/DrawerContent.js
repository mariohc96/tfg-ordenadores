import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {Drawer, Switch, TouchableRipple, Text} from 'react-native-paper';

export default function DrawerContent(props) {
  const {navigation} = props;
  const [active, setActive] = useState('home');

  const onChangeScreen = (screen) => {
    setActive(screen);
    navigation.navigate(screen);
  };

  return (
    <DrawerContentScrollView>
      <Drawer.Section>
        <Drawer.Item
          label="Inicio"
          active={active === 'home'}
          onPress={() => onChangeScreen('home')}
        />
        <Drawer.Item
          label="Ordenadores"
          active={active === 'lista'}
          onPress={() => onChangeScreen('lista')}
        />
        <Drawer.Item
          label="Sobre el proyecto"
          active={active === 'about'}
          onPress={() => onChangeScreen('about')}
        />
      </Drawer.Section>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({});
