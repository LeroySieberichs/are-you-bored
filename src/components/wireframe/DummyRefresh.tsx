import {firestore} from "../../lib/firebase";
import React, { useState, useEffect } from 'react';
import { useCollectionDataOnce  } from 'react-firebase-hooks/firestore';
import Distraction from '../Distraction'
import { Box, chakra, Flex, useColorModeValue, Image, useColorMode, Button } from "@chakra-ui/react";

export default function DummyRefresh() {
  const { colorMode, toggleColorMode } = useColorMode()

  const [distractionList, setDistractionList] = useState([])
  
  let itemlist: JSX.Element[]=[]

    const [value, loading, error] = useCollectionDataOnce(
        firestore.collection('distractions').limit(10),
        {
          
        }
      );

      

        function cardGenerate(data: any[]) {
          data.forEach((item: any)=>{

            itemlist.push(distractionCard(item))
          
          })
          return itemlist;
        }
        

        const distractionCard = (data: { name: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; description: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; image: string | undefined; }) =>(
          <Box className="animate__animated animate__lightSpeedInRight"
        maxW="xs"
        mx="auto"
        bg={colorMode}
        shadow="lg"
        rounded="lg"
      >
        <Box px={4} py={2}>
          <chakra.h1
            color={colorMode}
            fontWeight="bold"
            fontSize="3xl"
            textTransform="uppercase"
          >
            {data.name}
          </chakra.h1>
          <chakra.p
            mt={1}
            fontSize="sm"
            color={colorMode}
          >
            {data.description}
          </chakra.p>
        </Box>

        <Image
          h={48}
          w="full"
          fit="cover"
          mt={2}
          src={data.image}
          alt="NIKE AIR"
        />

        <Flex
          alignItems="center"
          justifyContent="space-between"
          px={4}
          py={2}
          bg="gray.900"
          roundedBottom="lg"
        >
          <chakra.h1 color="white" fontWeight="bold" fontSize="lg">
            $129
          </chakra.h1>
          <chakra.button
            
            px={2}
            py={1}
            bg="white"
            fontSize="xs"
            color="gray.900"
            fontWeight="bold"
            rounded="lg"
            textTransform="uppercase"
            _hover={{
              bg: "gray.200",
            }}
            _focus={{
              bg: "gray.400",
            }}
          >
            Add to cart
          </chakra.button>
        </Flex>
      </Box>
        )

    return (
        <div>

        {error && <strong>Error: {JSON.stringify(error)}</strong>}
        {loading && <span>Document: Loading...</span>}
        {value && cardGenerate(value) }
        
        
    </div>
    )
}
