import '../gesture-handler';
import React from 'react';
import StackNavigator from './presentation/navigator/StackNavigator';
import {PaperProvider} from 'react-native-paper';

const App = () => {
  return (
    <PaperProvider>
      <StackNavigator />
    </PaperProvider>
  );
};

export default App;
