import React, {useState} from 'react';
import Navigation from './src/stack/Navigation';
import {NavigationContainer} from '@react-navigation/native';
import {Role} from './src/context/Role';

const App = () => {
  const [role, setRole] = useState('auth');

  return (
    <Role.Provider value={{role, setRole}}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </Role.Provider>
  );
};

export default App;
