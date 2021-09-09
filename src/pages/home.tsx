import { Flex, Box, Link, Button, useColorMode } from '@chakra-ui/react'
import { useColorModeValue, chakra } from '@chakra-ui/system'
import React, { useState } from 'react'
import BeginCard from '../components/BeginCard'
import DummyRefresh from '../components/wireframe/DummyRefresh'

function Home() {
  const { colorMode, toggleColorMode } = useColorMode()
  const [isActive, setActive] = useState('start');
  const toggleClass = () => {
    setActive('');
    
  };

  const startDistractions = () => {
    setActive('pee');
    
  }

  const renderBeginCard = () => {
    if(isActive === 'start'){
      return <BeginCard NextItem = {isActive}></BeginCard>
    } else {
      return(<DummyRefresh />) 
    }
  }
  
  return (
    <div>
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Button>

      
      {renderBeginCard()}
      
      <Button onClick={startDistractions} colorScheme="teal" size="lg">
    Yes
  </Button>
  
    </div>
  )
}

export default Home
