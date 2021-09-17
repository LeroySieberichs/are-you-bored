import { firestore } from "../../lib/firebase";
import React, { useState, useEffect } from 'react';
import { useCollectionDataOnce } from 'react-firebase-hooks/firestore';
import Distraction from '../Distraction'
import { Box, chakra, Flex, useColorModeValue, Image, useColorMode, Button, SkeletonText, SkeletonCircle, Container, Skeleton, Link } from "@chakra-ui/react";
import '../../style/card.css'


export default function DummyRefresh(props: { NextItem: any; EndDistractions: boolean; }) {
  const { colorMode, toggleColorMode } = useColorMode()


  const [distractionList, setDistractionList] = useState(0)



  let itemlist: JSX.Element[] = []

  const [value, loading, error] = useCollectionDataOnce(
    firestore.collection('distractions').limit(10),
    {

    }
  );



  function cardGenerate(data: any[]) {
    data.forEach((item: any) => {

      itemlist.push(distractionCard(item))



    })

    return itemlist;
  }

  const skeleton = () => {
    return (
      <Box padding="10" boxShadow="lg" bg="white">
        <SkeletonCircle size="10" />
        <SkeletonText mt="4" noOfLines={4} spacing="4" />
      </Box>
    )

  }

  const notBored = (data: { acceptedLink: string; }) => {
    console.log(data);
    
    if (props.EndDistractions === true) 
    
    window.location.href = data;

    
  }

  const distractionCard = (data: { name: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; description: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; image: string | undefined; id: any }) => {
    return (
      <Box className={props.NextItem == data.id ? 'animate__animated animate__lightSpeedInRight distraction' : props.NextItem > data.id ? 'animate__animated animate__lightSpeedOutLeft distraction' : 'inactive'}
        key={data.id}
        w="xs"
        bg={colorMode}
        shadow="lg"
        rounded="lg"
        overflow="hidden"
        mx="auto"
      >
        {props.NextItem == data.id? notBored(data.acceptedLink): ''}
        <Box
          w="xs"
          bg={colorMode}
          shadow="lg"
          rounded="lg"
          overflow="hidden"
          mx="auto"
        >
          <Image
            w="full"
            h={56}
            fit="cover"
            src={data.image}
            alt="avatar"
          />

          <Box py={5} textAlign="center">
            <Link

              display="block"
              fontSize="2xl"
              color={colorMode}
              fontWeight="bold"
            >
              {data.name}
            </Link>
            <chakra.span
              fontSize="sm"
              color={colorMode}
            >
              {data.description}
            </chakra.span>
          </Box>
        </Box>
      </Box>
    )
  }

  return (
    <Container h="21em" centerContent className="outer">
      {error && <strong>Error: {JSON.stringify(error)}</strong>}
      {loading && skeleton()}
      {value && cardGenerate(value)}
    </Container>
  )
}
