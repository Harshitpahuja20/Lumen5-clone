import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <Flex w="100%" bg="blackAlpha.900" height="70px" color="white" justifyContent={{base:"center" , md:"space-between"}} alignItems="center" flexWrap="wrap" gap={4}>
        <Text ml={{base : "0" , md:"50"}} textAlign="center">Copyright &copy; 2023 Lumen5</Text>
        <Text mr={{base : "0" , md:"50"}} textAlign="center">Terms of Use & Privacy Policy</Text>
    </Flex>
  )
}

export default Footer