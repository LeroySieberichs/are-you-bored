import { firestore } from "../../lib/firebase";
import React, { useState, useEffect } from 'react';
import { useCollectionDataOnce } from 'react-firebase-hooks/firestore';
import Distraction from '../Distraction'
import { Box, chakra, Flex, useColorModeValue, Image, useColorMode, Button, SkeletonText, SkeletonCircle, Container, Skeleton, Link, Badge, Input, InputGroup, InputRightElement, SimpleGrid, VisuallyHidden } from "@chakra-ui/react";
import '../../style/card.css'


export default function DummyRefresh(props: { NextItem: any; EndDistractions: boolean; }) {
  const { colorMode, toggleColorMode } = useColorMode()


  const [distractionList, setDistractionList] = useState(0)



  let itemlist: JSX.Element[] = []

  // retrieves first 10 entires in the firestore document
  const [value, loading, error] = useCollectionDataOnce(
    firestore.collection('distractions').limit(10),
    {

    }
  );


  // uses the given data to create cards and pushes them to a list of cards, which will then be returned
  function cardGenerate(data: any[]) {
    data.forEach((item: any) => {
      itemlist.push(distractionCard(item))
    })

    return itemlist;
  }

  // small animation for when data is loading (glowing grey boxes)
  const skeleton = () => {
    return (
      <Box padding="10" boxShadow="lg" bg="white">
        <SkeletonCircle size="10" />
        <SkeletonText mt="4" noOfLines={4} spacing="4" />
      </Box>
    )

  }

  // turns the link into a clickable href
  const notBored = (data: { acceptedLink: string; }) => {

    if (props.EndDistractions === true)

      window.location.href = data;


  }


  //big function of generating cards out of given data from the firestore document
  const distractionCard = (data: { id: React.Key | null | undefined; acceptedLink: { acceptedLink: string; }; image: string | undefined; name: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; description: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) => {
    return (
      <SimpleGrid
        className={props.NextItem == data.id ? 'animate__animated animate__lightSpeedInRight distraction' : props.NextItem > data.id ? 'animate__animated animate__lightSpeedOutLeft distraction' : 'inactive'}
        key={data.id}
        columns={{ base: 1, md: 2 }}
        spacing={0}
        _after={{
          bg: "white",
          opacity: 0.25,
          pos: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          zIndex: -1,
          content: '" "',
        }}
      >
        <Flex
          direction="column"
          alignItems="start"
          rounded="lg"
          shadow="lg"
          justifyContent="center"
          px={{ base: 4, lg: 20 }}
          py={24}

        >

          <chakra.h1
            mb={6}
            fontSize={{ base: "4xl", md: "4xl", lg: "5xl" }}
            fontWeight="bold"
            color={colorMode}
            lineHeight="shorter"
          >
            {data.name}
          </chakra.h1>
          <chakra.p
            pr={{ base: 0, lg: 16 }}
            mb={4}
            fontSize="sm"
            color={colorMode}
            letterSpacing="wider"
          >
            {data.description}
          </chakra.p>
        </Flex>
        <Box>
          <Image
            src={data.image}
            alt="logo"
            fit="cover"
            w="full"
            h={{ base: 64, md: "full" }}
            bg="gray.100"
            loading="lazy"
          />
        </Box>
      </SimpleGrid>
    )
  }

  return (
    <Container h="40em" maxW="container.xl" centerContent className="outer">
      {error && <strong>Error: {JSON.stringify(error)}</strong>}
      {loading && skeleton()}
      {value && cardGenerate(value)}
    </Container>
  )
}
