import React, { useContext } from "react";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  List,
  ListItem,
  Spacer,
  Text,
} from "@chakra-ui/react";
import {Link } from "react-router-dom";
import { LumenContext } from "../Context/LumenContext";
const token = JSON.parse(localStorage.getItem("token"))

const PriceCard = ({ data }) => {
  const {auth} = useContext(LumenContext)
  const handleClick = (e) => {
localStorage.setItem("token" , JSON.stringify({ email: token.email,
  token:token.token,
  subscription : data.name === "Enterprise" ? token.subscription : data.name,
  price : data.price
})
 )
  }
  return (
    <Box>
      <Card maxW="250px" minW="250px" gap="1rem" textAlign="start"minH="360px" maxH="400px" border="1px solid" borderColor="blackAlpha.300">
        <CardHeader>
          <Heading fontWeight="semibold" fontSize="2xl" mb="2px">{data.name}</Heading>
          <Text fontSize="sm">{data.type}</Text>
        </CardHeader>
        <CardBody display="flex" justifyContent="start" flexDirection="column" gap={1}>
          <Heading fontSize="2xl">{data.price}</Heading>
          <Text fontSize="sm">{data.maintainence}</Text>
          <Text color="main">{data.save}</Text>
        </CardBody>
        <CardFooter display="flex" justifyContent="center">
          <Link to={auth ?  data.Link : "/"} onClick={handleClick}>
            <Button p="20px 30px" borderRadius={10} variant="outline" color="main" borderColor="main" _hover={{color:"white" , bg:"main"}}>Get Started</Button>
          </Link>
        </CardFooter>
      </Card>
      <Spacer padding="10px"/>
      <Box>
        <List textAlign="start" fontSize="xs" p="5px">{data.Benefits.map((data , index)=>{
          return <ListItem key={index} color="blackAlpha.800">✓ {data}</ListItem>
        })}</List>
      </Box>
    </Box>
  );
};

export default PriceCard;
