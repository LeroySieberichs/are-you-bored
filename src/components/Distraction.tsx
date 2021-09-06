import { Box, useColorModeValue, chakra, Link, Flex, Image } from '@chakra-ui/react'
import React from 'react'

export default function Distraction(props) {
    return (
        <div>
                  <Box
        mx="auto"
        rounded="lg"
        shadow="md"
        bg={useColorModeValue("white", "gray.800")}
        maxW="2xl"
      >
        <Image
          roundedTop="lg"
          w="full"
          h={64}
          fit="cover"
          src={props.image.slice(1, -1)}
          alt="Article"
        />

        <Box p={6}>
          <Box>
            <chakra.span
              fontSize="xs"
              textTransform="uppercase"
              color={useColorModeValue("brand.600", "brand.400")}
            >
              Product
            </chakra.span>
            <Link
              display="block"
              color={useColorModeValue("gray.800", "white")}
              fontWeight="bold"
              fontSize="2xl"
              mt={2}
              _hover={{ color: "gray.600", textDecor: "underline" }}
              
            >
              {props.name.slice(1, -1)}
            </Link>
            <chakra.p
              mt={2}
              fontSize="sm"
              color={useColorModeValue("gray.600", "gray.400")}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie
              parturient et sem ipsum volutpat vel. Natoque sem et aliquam
              mauris egestas quam volutpat viverra. In pretium nec senectus
              erat. Et malesuada lobortis.
            </chakra.p>
          </Box>

          <Box mt={4}>
            <Flex alignItems="center">
              <Flex alignItems="center">
                <Image
                  h={10}
                  fit="cover"
                  rounded="full"
                  src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60"
                  alt="Avatar"
                />
                <Link
                  mx={2}
                  fontWeight="bold"
                  color={useColorModeValue("gray.700", "gray.200")}
                  
                >
                  Jone Doe
                </Link>
              </Flex>
              <chakra.span
                mx={1}
                fontSize="sm"
                color={useColorModeValue("gray.600", "gray.300")}
              >
                21 SEP 2015
              </chakra.span>
            </Flex>
          </Box>
        </Box>
      </Box>
        </div>
    )
}
