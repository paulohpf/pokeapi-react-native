import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {getPokemon} from '../../services/api';
import {POKEMONS_IMAGE} from '../../assets/images/pokemons';

const PokemonDescription = ({navigation, route}) => {
  const [pokemon, setPokemon] = useState();
  const [description, setDescription] = useState('');

  useEffect(() => {
    console.log({route: route.params});

    getPokemon(route.params.pokemon.url).then(res => {
      setPokemon(res.data);

      setDescription(
        res.data.flavor_text_entries.find(
          entry => entry?.language?.name === 'en',
        ).flavor_text,
      );
    });
  }, []);

  const styles = StyleSheet.create({
    text: {
      fontFamily: 'pokemon-rbygsc',
    },
  });

  return (
    <View>
      {pokemon && (
        <Image
          source={POKEMONS_IMAGE[pokemon?.pokedex_numbers?.[0].entry_number]}
        />
      )}

      <Text style={styles.text}>{description}</Text>
    </View>
  );
};

export default PokemonDescription;
