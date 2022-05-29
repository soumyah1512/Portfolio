import React from 'react';
import {ChakraProvider} from '@chakra-ui/react';
import Home from './Pages/Home';
import styles from './Styles/styles.css'

function App() {
  
  return (
    <ChakraProvider>
      <Home/>
    </ChakraProvider>
  );
}

export default App;
