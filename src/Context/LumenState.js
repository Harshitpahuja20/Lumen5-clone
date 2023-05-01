import { LumenContext } from "./LumenContext";
import React, { useState } from "react";
import { useToast } from "@chakra-ui/react";

const LumenState = (props) => {
  const [auth, setAuth] = useState(false);
  const toast = useToast();

  const HandleLogin = async(email,password)=>{
    try {
     const response = await fetch("https://reqres.in/api/login",{
       method:"POST",
       headers: {
         "Content-Type": "application/json",
         "accept": "application/json",
       },
      body: JSON.stringify({email,password })
     })
     const {token} = await response.json()
    if(response.ok){
      localStorage.setItem("token" , 
       JSON.stringify({ email:email,
       token,
       subscription : "free"})
      )
        setAuth(true)
     toast({
       title: 'Login Succesfully',
       status: 'info',
       duration: 5000,
       isClosable: true,
       position:"top"
     })
    }else{
      toast({
        title: 'Login Failed',
        description:"Check the Email and password again",
        status: 'error',
        duration: 5000,
        isClosable: true,
        position:"top"
      })
    }
    } catch (error) {
     console.log("error in login : " + error )
    }
   }

   const HandleSignup = async(email,password,name)=>{
    try {
     const response = await fetch("https://reqres.in/api/register",{
       method:"POST",
       headers: {
         "Content-Type": "application/json",
         "accept": "application/json",
       },
      body: JSON.stringify({email,password,name })
     })
    if(response.ok){
     toast({
       title: 'Account Created Succesfully',
       status: 'info',
       duration: 5000,
       isClosable: true,
       position:"top"
     })
    }else{
      toast({
        title: 'Signup Failed',
        description:"Server Down",
        status: 'error',
        duration: 5000,
        isClosable: true,
        position:"top"
      })
     }
    } catch (error) {
     console.log("error in login : " + error )
    }
   }

   const Handlelogout = async()=>{
    try {
      const response =  await fetch("https://reqres.in/api/logout",{
       method:"POST",
       headers: {
         "Content-Type": "application/json",
         "Accept": "application/json",
       }
      })
      if(response.ok){localStorage.removeItem("token")
      setAuth(false)}
    } catch (error) {
      console.log("error in login : " + error )
    }
   }

  return (
    <LumenContext.Provider value={{auth,setAuth, HandleLogin , Handlelogout , HandleSignup}}>{props.children}</LumenContext.Provider>
  );
};

export default LumenState;
