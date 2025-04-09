/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable curly */
/* eslint-disable @typescript-eslint/no-shadow */
import React, {useMemo, useState} from 'react';
import {FlatList, View} from 'react-native';
import {globalTheme} from '../../../config/theme/global-theme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ActivityIndicator, TextInput, useTheme} from 'react-native-paper';
import {PokemonCard} from '../../components/pokemons/PokemonCard';
import {useQuery} from '@tanstack/react-query';
import {
  getPokemonsByIds,
  getPokemonsNamesWithId,
} from '../../../actions/pokemons';
import {FullScreenLoader} from '../../components/ui/FullScreenLoader';

export const SearchScreen = () => {
  const theme = useTheme();
  const {top} = useSafeAreaInsets();
  const [term, setTerm] = useState('');

  const {isLoading, data: pokemonNameList = []} = useQuery({
    queryKey: ['pokemons', 'all'],
    queryFn: () => getPokemonsNamesWithId(),
  });

  // TODO: Debounce
  const pokemonNameIdList = useMemo(() => {
    // Es un número
    if (!isNaN(Number(term))) {
      const pokemon = pokemonNameList.find(
        pokemon => pokemon.id === Number(term),
      );
      return pokemon ? [pokemon] : [];
    }

    if (term.length === 0) return [];
    if (term.length < 3) return [];

    return pokemonNameList.filter(pokemon =>
      pokemon.name.includes(term.toLowerCase()),
    );
  }, [term]);

  const {isLoading: isLoadingPokemons, data: pokemons = []} = useQuery({
    queryKey: ['pokemons', 'by', pokemonNameIdList],
    queryFn: () =>
      getPokemonsByIds(pokemonNameIdList.map(pokemon => pokemon.id)),
    staleTime: 1000 * 60 * 5, //5 mins
  });

  if (isLoading) {
    return <FullScreenLoader />;
  }

  return (
    <View style={[globalTheme.globalMargin, {paddingTop: top + 10}]}>
      <TextInput
        placeholder="Buscar Pokemon"
        mode="flat"
        autoFocus
        autoCorrect={false}
        onChangeText={value => setTerm(value)}
        value={term}
        style={{backgroundColor: theme.colors.background}}
      />

      {isLoadingPokemons && <ActivityIndicator style={{paddingTop: 20}} />}

      <FlatList
        data={pokemons}
        keyExtractor={(pokemon, index) => `${pokemon.id}-${index}`}
        numColumns={2}
        style={{paddingTop: top}}
        renderItem={({item}) => <PokemonCard pokemon={item} />}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<View style={{height: 120}} />}
      />
    </View>
  );
};
