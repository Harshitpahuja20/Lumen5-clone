import {Button, Container, Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Temp = () => {
  return (
    <Container minW="100%" height="90vh" padding={{base:"20px" , md:"50px" , lg:"100px"}}>
         <Flex width="100%" height="100%" bg="main" borderRadius="20px" justifyContent="center" alignItems="center" flexDirection="column" gap="2rem">
            <Heading width="70%" color="White" textAlign="center">Join 800,000+ companies that are using Lumen5 to tell their stories.</Heading>
            <Link to="/signup"><Button bg="white" variant="solid" color="main" borderRadius="20px">Sign up Free</Button></Link>
         </Flex>
    </Container>
  )
}

export default Temp