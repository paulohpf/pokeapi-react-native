/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableHighlight,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {getGeneration} from '../../services/api';
import PAGES_ENUMS from '../../constants/pages_enums';
import {IMAGE_ITEMS} from '../../assets/images/items';

const Home = props => {
  const [pokemons, setPokemons] = useState([]);
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  useEffect(() => {
    getGeneration().then(res => {
      setPokemons(res.data.pokemon_species);
    });
  }, []);

  const Item = ({name, item}) => (
    <TouchableHighlight
      style={styles.container}
      onPress={() => {
        props.navigation.navigate(PAGES_ENUMS.POKEMON_DESCRIPTION, {
          pokemon: item,
          title: item.name,
        });
      }}>
      <View style={{display: 'flex', flexDirection: 'row'}}>
        <Image source={IMAGE_ITEMS.pokeball} />
        <Text style={styles.text}>{name}</Text>
      </View>
    </TouchableHighlight>
  );

  return (
    <SafeAreaView style={backgroundStyle}>
      <FlatList
        data={pokemons}
        renderItem={({item}) => <Item name={item.name} item={item} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
  text: {
    fontFamily: 'pokemon-rbygsc',
    textTransform: 'uppercase',
  },
});

export default Home;
