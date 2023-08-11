import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './source/Components/Navigation/index.js';




export default function App() {  
  // Define your route object here
  const route = { params: { selectedMessages: [] } };
  return (

    <NavigationContainer>
      <Navigation route={route} />
    </NavigationContainer>
   
    
  );
}
