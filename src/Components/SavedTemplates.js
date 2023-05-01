import { Flex, Heading, Img } from "@chakra-ui/react";
import React from "react";

const SavedTemplates = ({heading , src}) => {
  return (
    <Flex minW="full" flexDirection="column" alignItems="center">
      <Heading my={5} fontWeight="semibold" fontSize={{base:"25px" , md:"30px"}} textAlign="center" p="0px 5px">{heading}</Heading>
      <Img src={src} width="300px" mt="100px"/>
    </Flex>
  );
};

export default SavedTemplates;
