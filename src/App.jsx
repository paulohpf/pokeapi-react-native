/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './pages/home';
import PokemonDescription from './pages/pokemon-description';
import PAGES_ENUMS from './constants/pages_enums';

const Stack = createNativeStackNavigator();

const App = props => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name={PAGES_ENUMS.HOME}
        component={Home}
        options={{title: 'Welcome'}}
      />
      <Stack.Screen
        name={PAGES_ENUMS.POKEMON_DESCRIPTION}
        component={PokemonDescription}
        options={({route}) => ({title: route.params.title})}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
