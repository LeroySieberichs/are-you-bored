import { Box, useColorModeValue, chakra, Link, Flex, Image } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'




export default function Distraction(props) {

  const [distractionList, setDistractionList] = useState([])
  useEffect(() => {
    setDistractionList(props.data);
  }, [])
    return (
      
      
      <div>
        {distractionList[1].name}
        {props.data[0].name}
      </div>

    )
}
