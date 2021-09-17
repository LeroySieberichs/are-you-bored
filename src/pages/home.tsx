import { Stack, Button, useColorMode, Box, ButtonGroup } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import BeginCard from '../components/BeginCard'
import DummyRefresh from '../components/wireframe/DummyRefresh'


function Home() {
  const { colorMode, toggleColorMode } = useColorMode()
  const [isActive, setActive] = useState(-1);
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    renderBeginCard()

    if (isActive === 11) {
      setActive(0)
    }
  }, [isActive])

  const startDistractions = () => {
    setActive(isActive + 1);

  }

  const endDistractions = () => {
    setAccepted(true);

  }

  const whyAreouEvenHere = () => {
    window.location.href = "https://ikwilhierweg.nl/"
  }

  const actionbuttons = () => {
    if (isActive === -1) {
      return (
        <ButtonGroup spacing="450">
          <Button onClick={startDistractions} colorScheme="teal" size="lg">
            Yes
          </Button>
          <Button onClick={whyAreouEvenHere} colorScheme="teal" size="lg">
            No
          </Button>
        </ButtonGroup>

      )
    } else {
      return (
        <ButtonGroup spacing="450">
          <Button className="animate__animated animate__lightSpeedInLeft" onClick={startDistractions} colorScheme="teal" size="lg">
            No
          </Button>
          <Button className="animate__animated animate__lightSpeedInRight" onClick={endDistractions} colorScheme="teal" size="lg">
            Yes
          </Button>
        </ButtonGroup>
      )
    }
  }

  const renderBeginCard = () => {
    if (isActive === -1) {
      return <BeginCard NextItem={isActive}></BeginCard>
    } else {
      return (<DummyRefresh NextItem={isActive} EndDistractions={accepted} />)
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
