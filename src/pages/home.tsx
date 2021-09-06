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
  
  return (
    <div>
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Button>

      <BeginCard NextItem = {isActive}></BeginCard>
      <Button onClick={toggleClass} colorScheme="teal" size="lg">
    Yes
  </Button>
  <DummyRefresh />
    </div>
  )
}

export default Home
