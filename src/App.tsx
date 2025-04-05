import '../gesture-handler';
import React from 'react';
import {ThemeContextProvider} from './presentation/context/ThemeContext';
import StackNavigator from './presentation/navigator/StackNavigator';

const App = () => {
  return (
    <ThemeContextProvider>
      <StackNavigator />
    </ThemeContextProvider>
  );
};

export default App;
