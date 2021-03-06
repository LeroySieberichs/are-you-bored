import { Flex, useColorModeValue, Box, chakra, Link, Button } from '@chakra-ui/react'
import React from 'react'

export default function BeginCard(props: { NextItem: number }) {


  return (
    <div>
      <Box
        className={props.NextItem === -1 ? 'animate__animated animate__lightSpeedInRight' : 'animate__animated animate__rotateOutDownLeft'}
        mx="auto"
        px={8}
        py={4}
        rounded="lg"
        shadow="lg"
        bg={useColorModeValue("white", "gray.900")}
        maxW="2xl"
      >
        <Box mt={2} align="center">
          <Link

            fontSize="2xl"
            color={useColorModeValue("gray.700", "white")}
            fontWeight="700"
            _hover={{
              color: useColorModeValue("gray.600", "gray.200"),
              textDecor: "underline",
            }}
          >
            Hey there buddy!
          </Link>
          <chakra.p mt={2} color={useColorModeValue("gray.600", "gray.300")}>
            Are you bored?
          </chakra.p>
        </Box>
        <Flex justifyContent="space-evenly" alignItems="center" mt={4}>
          <Flex alignItems="center">
          </Flex>
        </Flex>
      </Box>
    </div>
  )
}
