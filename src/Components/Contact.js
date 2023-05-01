import { Box, Flex, GridItem, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { contact } from "../Data/Data";
import Lumen_Wlogo from "../Images/Lumen_Wlogo.png";

const Contact = () => {
  return (
    <Flex w="100%" height="fit-content" bg="gray.800" justifyContent="space-between" p={20} gap="50px" flexWrap={{base:"wrap" , lg:"nowrap"}} overflow="hidden">
      <Box maxW="200px" color="whiteAlpha.700">
        <Image src={Lumen_Wlogo} width="150px" />
        <Text>
          Lumen5 combines powerful A.I. with a simple drag-and-drop interface to
          help you create professional video content in minutes.
        </Text>
      </Box>

    <Box color="whiteAlpha.600">
    <SimpleGrid gap="30px" minChildWidth="200px">
        {contact.map((name, index) => {
          return <GridItem key={index} minWidth={{sm:"600px" , md:"700px" , lg:"800px"}}><Text>{name}</Text></GridItem>;
        })}
      </SimpleGrid>
    </Box>
    </Flex>
  );
};

export default Contact;
