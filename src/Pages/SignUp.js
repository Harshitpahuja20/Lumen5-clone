import  { Box , Button , Flex , FormControl , FormLabel , Grid , GridItem , Heading , Img , Input , Text,} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { LumenContext } from "../Context/LumenContext";
import login_template from "../Images/login_template.jpg";
import Lumen_Wlogo from "../Images/Lumen_Wlogo.png";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  let { pathname } = useLocation();
  let path = pathname === "/signup";
  const context = useContext(LumenContext);
  const { HandleLogin , HandleSignup } = context;

  const boxStyle = {
    width:{ base: "100%", lg: "33.33%" },
    height:{ base: "15%", lg: "100%" },
    position:"absolute",
    top:"0",
    opacity:"0.85",
    color:"white",
    p:"0px 30px",
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-around",
    backgroundImage:{login_template},
  }
  
  const InputStyle={
    required:true,
    width:"100%",
    bg:"transparent",
    border:"none",
    borderBottom:"1px",
    borderColor:"blackAlpha.500",
    borderRadius:"0",
  }
  return (
    <Grid templateColumns="repeat(6 , 1fr)">
      <GridItem
        bg="black"
        colSpan={{ base: "6", lg: "2", xl: "2" }}
        minH={{ lg: "100vh" }}
      >
        <Box sx={boxStyle}>
          <Box
            position="absolute"
            bg="main"
            width="100%"
            height="100%"
            opacity="0.8"
            zIndex="-1"
            top={0}
            left={0}
          ></Box>
          <Link to="/">
            <Img src={Lumen_Wlogo} width="200px" />
          </Link>
          <Heading
            fontSize="50px"
            fontWeight="semibold"
            display={{ base: "none", lg: "block" }}
          >
            Supercharge your content strategy
          </Heading>
          <Text fontSize="30px" display={{ base: "none", lg: "block" }}>
            Join 800,000+ brands creating videos with Lumen5
          </Text>
          <Flex
            justifyContent="space-between"
            display={{ base: "none", lg: "block" }}
          >
            <Img
              src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-seimens-white.png"
              width="120px"
            />
            <Img
              src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-sf-white.png"
              width="120px"
            />
          </Flex>
        </Box>
      </GridItem>
      <GridItem
        colSpan={{ base: "6", lg: "4", xl: "4" }}
        display="flex"
        flexDirection="column"
        p="25px"
        gap="2rem"
        justifyContent="center"
        mt={{ base: "100px", lg: "0" }}
      >
        <Box>
          <Heading textAlign="center" fontWeight="extrabold" my="30px">
            {path ? "Get started with a free account" : "Welcome Back!"}
          </Heading>
        </Box>
        <Flex
          as="form"
          minW="50vw"
          flexDirection="column"
          alignItems="center"
          gap="1.5rem"
          alignSelf="center"
        >
          {path && (
            <FormControl>
              <FormLabel fontWeight="normal">FULL NAME</FormLabel>
              <Input
                type="text"
                value={userName}
              onChange={(e) => setUserName(e.target.value)}
               sx={InputStyle}
              />
            </FormControl>
          )}
          <FormControl>
            <FormLabel fontWeight="normal">WORK EMAIL</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={InputStyle}
            />
          </FormControl>
          <FormControl>
            <FormLabel fontWeight="normal">PASSWORD</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={InputStyle}
            />
          </FormControl>
          <Button
            width="50vw"
            bg="main"
            colorScheme="white"
            borderRadius="20px"
            p="25px 0px"
            variant="solid"
            onClick={
              () => path ? HandleSignup(userName , email , password) :  HandleLogin(email, password)
            }
          >
            {pathname === "/signup" ? "Create Account" : "Log In"}
          </Button>
        </Flex>
        <Text
          ml={{ base: "0", lg: "120px" }}
          textAlign={{ base: "center", lg: "start" }}
        >
          {path ? "Already have a Lumen5 account?" : "Need a Lumen5 account?"}
          <Link to="/login">
            <Text as="span" color="main" textDecoration="underline">
              {path ? "Log in" : "Create an Account"}
            </Text>
          </Link>
        </Text>
        {path && (
          <Text
            ml={{ base: "0", lg: "120px" }}
            textAlign={{ base: "center", lg: "start" }}
            fontSize="xs"
          >
            By clicking “Create account” I agree to Lumen5’s Terms of Use and
            Privacy Policy .
          </Text>
        )}
      </GridItem>
    </Grid>
  );
};

export default SignUp;
