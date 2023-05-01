import { Container } from "@chakra-ui/react";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import Section from "../Components/Section";
import Temp from "../Components/Temp";
import VideoSection from "../Components/VideoSection";
import { videoSrc } from "../Data/Data";
import {
  BannerData1,
  BannerData2,
  BannerData3,
  BannerData4,
} from "../Data/Data";

const Home = () => {
  return (
    <Container as="section" minW="100%" maxWidth="100%" m={0} p={0}>

      {/* ********************** first Banner ************************** */}

      {BannerData1}

      {/* ********************** second Banner************************** */}

      <Section />

      {/* ********************** Third Banner************************** */}

      <VideoSection
        Srcs={videoSrc.slice(0,9)}
        width={{ base: "200px", md: "320px" }}
        heading="Captivating video templates"
        desc="Drag and drop. No experience required."
      />

      {/* ********************** fourth Banner************************** */}

      {BannerData2}

      {/* ********************** fifth Banner************************** */}

      {BannerData3}

      {/* ********************** sixth Banner************************** */}

      {BannerData4}

      {/* ********************** seventh Banner************************** */}
      <Temp />

      {/* ********************** eight Banner************************** */}
      <Contact />
      {/* ********************** nine Banner************************** */}
      <Footer />
    </Container>
  );
};

export default Home;
