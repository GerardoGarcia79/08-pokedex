import React from 'react';
import {View} from 'react-native';
import {ActivityIndicator, Button, Text} from 'react-native-paper';
import {getPokemons} from '../../../actions/pokemons';
import {useQuery} from '@tanstack/react-query';

export const HomeScreen = () => {
  const {isLoading} = useQuery({
    queryKey: ['pokemons'],
    queryFn: () => getPokemons(0),
    staleTime: 1000 * 60 * 60, // 60 min
  });

  return (
    <View>
      <Text variant="displaySmall">HomeScreen</Text>

      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <Button mode="contained" onPress={() => console.log('Pressed')}>
          Press me
        </Button>
      )}
    </View>
  );
};
