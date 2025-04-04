import {HomeScreen} from '../screens/home/HomeScreen';
import {SearchScreen} from '../screens/search/SearchScreen';
import {PokemonScreen} from '../screens/pokemon/PokemonScreen';
import {createStaticNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export type RootStackParams = {
  HomeScreen: undefined;
  PokemonScreen: {pokemonId: number};
  SearchScreen: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParams>({
  screens: {
    HomeScreen: HomeScreen,
    PokemonScreen: PokemonScreen,
    SearchScreen: SearchScreen,
  },
});

const StackNavigator = createStaticNavigation(RootStack);

export default StackNavigator;
