import { Box, Container, Flex, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import { ImagesSrc } from '../Data/Data'

const Section = () => {
  return (
    <Container minW="100%" bg="blackAlpha.200" p="20px">
        <Box textAlign="center"><Heading fontSize={{base:"22px" , md:"28px" , lg:"32px"}}>Over 6 million videos created by thousands of businesses</Heading></Box>
        <Flex justify="space-around" my="30px" flexWrap="wrap" gap={10}>
            {ImagesSrc.map((src , index)=>{
               return <Image src={src} key={index} width="90px" height="80px"/>
            })}
        </Flex>

    </Container>
  )
}

export default Section