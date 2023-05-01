import { BellIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box, Button, ButtonGroup, Center, Divider, Flex, Img, List, ListItem, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import {Link, useLocation, useNavigate } from "react-router-dom";
import { LumenContext } from "../Context/LumenContext";
import Lumen_Plogo from "../Images/Lumen_Plogo.png";

const Navbar = () => {
  const {pathname} = useLocation()
  const token = JSON.parse(localStorage.getItem("token"))
  const {setAuth} = useContext(LumenContext)
    const handlehover = {
        bg : "main",     
        color:"white"
       }
       const {auth} = useContext(LumenContext)
       const {Handlelogout} = useContext(LumenContext)
       const navigate = useNavigate()
       useEffect(() => {
         if(!token){
          navigate("/")
          setAuth(false)
         }else{
          navigate("/main/Dashboard")
          setAuth(true)
         }
       }, [auth])

       
        
  return (
    <Flex as="nav" minW="100%" bg="white" minH="100px" alignItems="center"  position="fixed" top="0px" left="0px" zIndex="10" borderBottom="1px" borderColor="blackAlpha.200" flexWrap={{base:"wrap" , lg:"nowrap"}} gap="0.5rem 0.2rem" justifyContent="space-between">
      <Box boxSize="sm" height="fit-content" ml="50px">
        <Link to={auth ? "/main/Dashboard" : "/"}>
          <Img src={Lumen_Plogo} width="120px" alt="Lumen5" />
        </Link>
      </Box>
     {!auth ? <Box mr={{base:"0px" , md:"50px"}} ml={{base:"40px", md:"50px"}}>
      <List display="flex" alignItems="center" justifyContent={{xs:"center"}}  gap={{base : "0.5rem" , md:"1rem"}} color="black" fontSize="lg">
        <ListItem fontSize={{base:"sm" , md:"lg"}}>
          <Link to="/Pricing">Pricing</Link>
        </ListItem>
        <ListItem fontSize={{base:"sm" , md:"lg"}}>
          <Link to="/enterprise">EnterPrise</Link>
        </ListItem>
        <ButtonGroup gap="2" fontSize="lg" justifyContent="flex-start">
          <Link to="/login"><Button colorScheme="main" variant="outline" bg="transparent" fontSize={{base:"sm" , md:"lg"}} color="main" p={{base:"8px" , md:"20px"}} borderRadius="20px" _hover={handlehover}>Log In</Button></Link>
          <Link to="/signup"><Button colorScheme="main" fontSize={{base:"sm" , md:"lg"}} bg="main" p={{base:"8px" , md:"20px"}} borderRadius="20px">Sign Up</Button></Link>
        </ButtonGroup>
      </List>
      </Box>
      :
      <Box  display="flex" gap="1rem" justifyContent="center" alignItems="center" mr="20px" mb="5px" ml={{base:"20px" , md:"0"}}>
      <Link to="/pricing"><Button display={`${pathname === "/payment" ? "none" : "flex"}`} colorScheme="main" variant="outline" bg="transparent" fontSize="lg" color="main" p="20px" borderRadius="20px" _hover={handlehover}>{token.subscription}</Button></Link>
      <Center height='90px' display={{base:"none" ,md:"block"}}>
         <Divider orientation='vertical' borderColor="blackAlpha.600"/>
      </Center>
      <Flex gap="1rem" alignItems="center">
        <BellIcon fontSize="30px"/>
        <Menu>
       <MenuButton as={Button} bg="transparent" width="fit-content">
        <Avatar src="" size="sm"/>
       </MenuButton>
      <MenuList>
        <MenuItem>{token.email}</MenuItem>
        <MenuItem onClick={Handlelogout}>Logout</MenuItem>
      </MenuList>
       </Menu>
      </Flex>
      </Box> }
    </Flex>
  );
};

export default Navbar;
