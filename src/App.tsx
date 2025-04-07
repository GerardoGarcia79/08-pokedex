import '../gesture-handler';
import React from 'react';
import {ThemeContextProvider} from './presentation/context/ThemeContext';
import StackNavigator from './presentation/navigator/StackNavigator';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeContextProvider>
        <StackNavigator />
      </ThemeContextProvider>
    </QueryClientProvider>
  );
};

export default App;
