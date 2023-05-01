import {
  Container,
  Flex,
  GridItem,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";


const VideoSection = ({Srcs , width , heading , desc}) => {
  const onMouseEnter = (e) => {
    e.target.play();
  };
  const onMouseLeave = (e) => {
    e.target.pause();
  };
  return (
    <Container minWidth="100%" p={{ base: "50px 10px", md: "50px 100px" }}>
      <Flex textAlign="center" gap={3} flexDirection="column">
        <Heading>{heading}</Heading>
        <Text mb={10}>{desc}</Text>
      </Flex>
      <SimpleGrid
        gap={10}
        minChildWidth={width}
        margin="auto"
      >
        {Srcs.map((src, index) => {
          return (
            <GridItem key={index} maxWidth="400px" margin="auto">
              <video
                key={index}
                src={src}
                style={{ borderRadius: "20px" }}
                loop
                onMouseEnter={onMouseEnter}
                onMouseOut={onMouseLeave}
                muted
                disablePictureInPicture
                disableRemotePlayback
                playsInline
              />
            </GridItem>
          );
        })}
      </SimpleGrid>
    </Container>
  );
};

export default VideoSection;
