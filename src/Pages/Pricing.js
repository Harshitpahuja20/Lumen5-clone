import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import Footer from "../Components/Footer";
import Temp from "../Components/Temp";
import Contact from "../Components/Contact";
import PriceCard from "../Components/PriceCard";
import { priceData } from "../Data/Data";
import { LumenContext } from "../Context/LumenContext";

const Pricing = () => {
  const {auth} = useContext(LumenContext)
  return (
    <Container
      minW="100%"
      height="100vh"
      paddingInlineEnd={0}
      paddingInlineStart={0}
    >
      <Box marginTop="120px" textAlign="center" minW="100%">
        <Box textAlign="center">
          <Text fontSize="xl">PRICING</Text>
          <Heading fontWeight="semibold">
            Plans for your video content creation strategy
          </Heading>
        </Box>
        <Flex justify="space-evenly" flexWrap="wrap" gap="1rem" padding={10} marginTop="20px">
          {priceData.map((data , index)=>{
            return <PriceCard data={data} key={index}/>
          })}
        </Flex>
      </Box>
     {!auth && <>
      <Temp/>
      <Contact/>
      <Footer/>
     </>}
    </Container>
  );
};

export default Pricing;
