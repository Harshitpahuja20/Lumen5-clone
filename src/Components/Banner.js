import { Avatar, Divider, Heading, HStack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Box, Container, Flex, Img } from "@chakra-ui/react";
import React from "react";

const Banner = ( { src , width , direction , bg , wrap , boxbg , text , heading , linktext , DivDisplay , desc , AvtarImg , Fname, Lname, Plogo, to, avtardisplay, Second_box , imagepadding}) => {
  return (
    <Container
      minW="100%"
      minH={{ base: "100vh", md: "50vh", lg: "100vh" }}
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexWrap={wrap}
      paddingInlineStart="0"
      paddingInlineEnd="0"
      marginTop={{ base: "100px", md: "80px" , lg:"0px"}}
      bg={bg}>
      <Box
        minW="100%"
        display="flex"
        justifyContent="space-evenly"
        gap={{ base: "2rem", md: "5rem", lg: "0rem", xl: "0rem" }}
        alignItems="center"
        flexWrap={wrap}
        bg={boxbg}
        flexDirection={direction} 
        p="0 30px">
        <Flex
          maxWidth={width}
          p={{ base: "20px 0px", md: "20px" }}
          flexDirection="column"
          gap="1.5rem"
          alignItems="start"
          justifyContent="center">
          <Box
            display="flex"
            flexDirection="column"
            gap={{ base: "1rem", md: "1rem", lg: "2rem" }}>
            <Heading fontSize={{ base: "22px", md: "25px", lg: "36px" }}>
              {heading}
            </Heading>
            <Text fontSize={{ base: "sm", md: "14px", lg: "lg" }}>{text}</Text>
            <Link to={to}>
              <Text color="main">{linktext}</Text>
            </Link>
          </Box>
          <Divider borderBottomColor="black" display={DivDisplay} />
          <Box
            width="80%"
            display={Second_box ? Second_box : "flex"}
            flexDirection="column"
            gap="2rem">
            <Text fontSize="sm">{desc}</Text>
            <HStack spacing="1rem">
              <Avatar src={AvtarImg} display={avtardisplay} />
              <Flex flexDirection="column" gap="5px">
                <Text fontSize={{ base: "sm", md: "14px", lg: "lg" }}>
                  <Text as="span" fontWeight="bold">
                    {Fname}
                  </Text>
                  {Lname}
                </Text>
                <Img src={Plogo} alt="" width="80px" />
              </Flex>
            </HStack>
          </Box>
        </Flex>
        <Box
          height={{ base: "auto", md: "450px", lg: "500px" }}
          minW={{ base: "auto", md: "300px", lg: "auto" }}
          mt="10px">
          <Img
            src={src}
            alt=""
            width={{ base: "80vw", md: "100vw", lg: "100%" }}
            height={{ base: "80%", md: "100%", lg: "100%" }}
            p={imagepadding ? imagepadding : { base: "10px", md: "20px", lg: "30px" }}/>
        </Box>
      </Box>
    </Container>
  );
};

export default Banner;
