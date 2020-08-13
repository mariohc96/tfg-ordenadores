import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';

export default function Example() {
  const [computer, setComputer] = useState([
    {name: 'Ibm 610', image: require('../media/ibm_610.jpg'), key: '1'},
    {
      name: 'Datapoint 2200',
      image: require('../media/datapoint_2200.jpg'),
      key: '2',
    },
    {name: 'Kenbak-1', image: require('../media/kenbak_1.jpg'), key: '3'},
    {
      name: 'Xerox Alto and Star',
      image: require('../media/xerox.jpg'),
      key: '4',
    },
    {name: 'Ibm Scamp', image: require('../media/ibm_scamp.jpg'), key: '5'},
    {name: 'Apple 1', image: require('../media/apple1.jpg'), key: '6'},
    {name: 'Apple 2', image: require('../media/apple2.jpg'), key: '7'},
    {
      name: 'Commodore PET',
      image: require('../media/commodore_pet.jpg'),
      key: '8',
    },
    {name: 'TRS-80', image: require('../media/trs_80.jpg'), key: '9'},
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        data={computer}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => console.log('presionando')}>
            <Image source={item.image} style={styles.item} />
            <Text style={styles.title}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    marginVertical: 10,
    marginHorizontal: 10,
    width: 260,
    height: 260,
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
  },
});
