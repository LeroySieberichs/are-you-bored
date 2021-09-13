import { Stack, Button, useColorMode, Box } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import BeginCard from '../components/BeginCard'
import DummyRefresh from '../components/wireframe/DummyRefresh'


function Home() {
  const { colorMode, toggleColorMode } = useColorMode()
  const [isActive, setActive] = useState(-1);

  useEffect(() => {
    renderBeginCard()
    if (isActive === 11){
      setActive(0)
    }
  }, [isActive])

  const startDistractions = () => {
    setActive(isActive + 1);

  }

  const actionbuttons = () => {
    if (isActive === -1) {
      return <Button onClick={startDistractions} colorScheme="teal" size="lg">
      Yes
    </Button>
    } else {
      return (<Button className="animate__animated animate__lightSpeedInRight" onClick={startDistractions} colorScheme="teal" size="lg">
      no
    </Button>)
    }
  }

  const renderBeginCard = () => {
    if (isActive === -1) {
      return <BeginCard NextItem={isActive}></BeginCard>
    } else {
      return (<DummyRefresh NextItem={isActive} />)
    }
  }

  return (
    <div>
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Button>


      {renderBeginCard()}
      <Box mx="auto"
        px={8}
        py={4}
        rounded="lg"
        shadow="lg"
        
        maxW="2xl">
      <Stack direction="row" spacing={4} align="center">
      {actionbuttons()}
      </Stack>
      </Box>

    </div>
  )
}

export default Home
