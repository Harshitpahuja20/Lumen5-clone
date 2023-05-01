import { Avatar,Card, CardBody, CardFooter, Container, Flex, Heading, HStack, Text } from "@chakra-ui/react";
import {
  EnterpriseBanner1,
  EnterpriseBanner2,
  EnterpriseBanner3,
  EnterpriseBanner4,
  reviewData,
  videoSrc,
} from "../Data/Data";
import Section from "../Components/Section";
import VideoSection from "../Components/VideoSection";
import Footer from "../Components/Footer";
import Contact from "../Components/Contact";
import Temp from "../Components/Temp";

const Enterprise = () => {
  return (
    <Container minW="100%" p="0">
      {EnterpriseBanner1}
      <Section />
      <VideoSection Srcs={videoSrc.slice(9 , 13)} width={{ base: "200px", md: "450px" }} />
      {EnterpriseBanner2}
      {EnterpriseBanner3}
      {EnterpriseBanner4}

      <Flex as="section" w="100" bg="gray.800" justifyContent={{md:"start" , lg:"space-between"}} alignItems="start" color="whiteAlpha.800" gap="2rem" flexWrap="wrap" padding="30px 10px">
        {reviewData.map((e, index) => {
          return <Card bg="transparent" color="whiteAlpha.800" minW="250px" maxW="350px" key={index}>
            <CardBody>
              <Heading size="md">{e.Cname}</Heading>
              <Text>{e.reveiew}</Text>
            </CardBody>
            <CardFooter>
            <HStack spacing="1rem">
              <Avatar src={e.image}/>
              <Flex flexDirection="column" gap="5px">
                <Text fontSize="lg">{e.name}</Text>
                <Text fontSize="sm">{e.post}</Text>
              </Flex>
            </HStack>
            </CardFooter>
          </Card>
        })}
      </Flex>

      <Temp />
      <Contact />
      <Footer />
    </Container>
  );
};

export default Enterprise;
