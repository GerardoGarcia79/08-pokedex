import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../screens/home/HomeScreen';
import {SearchScreen} from '../screens/search/SearchScreen';
import {PokemonScreen} from '../screens/pokemon/PokemonScreen';

export type RootStackParams = {
  HomeScreen: undefined;
  PokemonScreen: {pokemonId: number};
  SearchScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParams>();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="PokemonScreen" component={PokemonScreen} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
