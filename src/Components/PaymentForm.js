import  { Box , Button , Card , CardBody , CardFooter , CardHeader , Checkbox , Container , Divider , Flex , Img , Spacer , Stack , Text} from "@chakra-ui/react";
import {CardCvcElement, CardExpiryElement, CardNumberElement } from "@stripe/react-stripe-js";
import {useState } from "react";
import Lumen_Wlogo from "../Images/Lumen_Wlogo.png";
import { CheckIcon } from "@chakra-ui/icons";
import {useNavigate } from "react-router-dom";

const PaymentForm = () => {
    const navigate = useNavigate();
    const baseStripeElementOptions = {
        style: {
            base: {
                fontSize: '20px',
                fontWeight:'semibold',
                    color: '#000000',
                    '::placeholder': {
                    color: 'gray',
                },
            },
            invalid: {
                    color: '#000000',
            },
        }
    }

  const [mode, setMode] = useState(false);
  const [payment, setPayment] = useState(false);

  const handleBack = () => {
    if (payment && mode) {
      setPayment(false);
    }
    if (mode && !payment) {
      setMode(false);
    }
  };
  const handleNext = () => {
    if (!payment && mode) {
      setPayment(true);
    }
    if (!mode && !payment) {
      setMode(true);
    }
    if (payment && mode) {
      navigate("/main/Dashboard");
    }
  };
const token = JSON.parse(localStorage.getItem("token"))
  return (
    <Container minW={{base:"auto" , md:"full"}} minH="100vh" display="flex" justifyContent="center" alignItems="center"
     mt={{base:"80px" , lg:"0px"}}>
      <Card minW={{ base: "80%", lg: "65%", xl: "50%" }} minH="70vh" border="1px solid" borderColor="gray.200">
        <CardHeader>
          <Flex minW="100%" height="8vh" bg="gray.700" justifyContent="center" alignItems="center">
            <Img src={Lumen_Wlogo} alt="" width="100px" height="40px" />
          </Flex>
          <Spacer padding="10px" />
             <Box maxW={{base:"100%" , md:"80%"}} height="5vh" display="flex" alignItems={{base:"start" , md:"center"}} m="auto" flexDir={{base:"column" , md:"row"}} gap={2} >
            <Flex as="span" minW="fit-content" gap="5px">
              <Text p="3px 10px" borderRadius="50px" bg="facebook.700" fontSize="sm" color="white" >
                {mode ? <CheckIcon fontSize="x-small" /> : "1"}
              </Text>
              <Text>Payment Mode</Text>
            </Flex>
            <Divider />
            <Flex as="span" minW="fit-content" gap="5px">
              <Text p="3px 10px" borderRadius="50px" bg={mode ? "facebook.700" : "blackAlpha.500"} fontSize="sm" color="white" >
                {payment ? <CheckIcon fontSize="x-small" /> : "2"}
              </Text>
              <Text>Payment</Text>
            </Flex>
            <Divider />
            <Flex as="span" minW="fit-content" gap="5px" >
              <Text p="3px 10px" borderRadius="50px" bg={payment ? "facebook.700" : "blackAlpha.500"} fontSize="sm" color="white">
                3
              </Text>
              <Text>Order Confirmed</Text>
            </Flex>
          </Box>
        </CardHeader>
        <CardBody mt={{base:"80px" , md:"0"}}>
          {!mode ? (
            <Flex flexDirection="column" gap={2} boxShadow="0.5px 0.5px 2px black" borderRadius={5} padding={5} maxW={{base:"100%" , md:"80%"}} m="auto">
              <Text>Payment Mode</Text>
              <Stack mt={1} spacing={3}>
                <Checkbox defaultChecked colorScheme="facebook">
                  Credit / Debit Card
                </Checkbox>
                <Checkbox disabled>COD(Cash On Delivery) *</Checkbox>
                <Text fontSize="xs">* Not Available</Text>
              </Stack>
            </Flex> 
            ) : payment ? (
            <Flex flexDirection="column" alignItems="center">
            <Img src="https://payment-kohl.vercel.app/static/media/animat-checkmark.c751c36f.gif" alt="order confirmed" width="200px"/>
                <Text >Order Confirmed</Text>
            </Flex>)
             :
              ( <Flex as="form" maxWidth={{base:"100%" , md:"80%"}} m="auto" flexDirection="column" gap="1.5rem">
              <Flex justifyContent="space-between" flexDirection={{base:"column" , md:"row"}} gap={1}>
              <Text >Subscription : <Text as="span" color="facebook.500" textDecor="underline" fontWeight="bold">{token.subscription}</Text></Text>
              <Text >Amount to be paid : <Text as="span" color="facebook.500" textDecor="underline" fontWeight="bold">{token.price}</Text></Text>
              </Flex>
                <Box border="1px solid" borderColor="gray.200" p={2}><CardNumberElement options={baseStripeElementOptions}/></Box>
                <Flex gap="1rem">
                  <Box width="100%" border="1px solid" borderColor="gray.200" p={2}><CardExpiryElement options={baseStripeElementOptions}/></Box>
                  <Box width="100%" border="1px solid" borderColor="gray.200" p={2}><CardCvcElement options={baseStripeElementOptions}/></Box>
                </Flex>
                <Flex flexDir="column" gap="0.5rem">
                <Checkbox size="sm" colorScheme="facebook">I Accept the terms And Conditions.</Checkbox>
                  <Text fontSize="xs" ml="15px">*Your Payment is secure here*</Text>
                </Flex>
            </Flex>
          )}
        </CardBody>
        <CardFooter justifyContent="center" gap={5}>
          <Button variant="ghost" onClick={handleBack}>
            Back
          </Button>
          <Button bg="gray.700" colorScheme="white" onClick={handleNext}>
            {!mode ? "Next" : (payment ? "Finish" : "Pay 🔒")}
          </Button>
        </CardFooter>
      </Card>
    </Container>
  );
};

export default PaymentForm;
