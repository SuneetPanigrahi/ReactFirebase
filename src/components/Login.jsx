'use client'

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react'
import GoogleButton from 'react-google-button';
import { Link, useNavigate } from 'react-router-dom'
import { useAuthContext } from '../Context/AuthContext';
import { useState } from 'react';

export default function Login() {
  let [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  let navigate = useNavigate();
  let toast=useToast();
  let {LoginUser,LoginWithGoogle}=useAuthContext();
let handlChange=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    setUserData({...userData,[name]:value})
}

  let handleSubmit=async()=>{
    try {
       
        await LoginUser(userData.email,userData.password)
navigate("/home")
    } catch (error) {
       
        toast({
          title: error.message,
          position: "top-right",
          status:"error",
          isClosable: true,
        })
    }
   
  }
//GoogleLogin

let handleGoogleLogin=async()=>{
try {
  await LoginWithGoogle()
  navigate("/home")
} catch (error) {
  console.log(error);
}
}

  return (
    <Flex
    direction={"column"}
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool <Text color={'blue.400'}>features</Text> ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" name='email' onChange={handlChange}/>
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" name='password' onChange={handlChange}/>
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Text color={'blue.400'}>Forgot password?</Text>
              </Stack>
              <Button
              onClick={handleSubmit}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign in
              </Button>
            </Stack>
            <Box w={"100%"}>
              
          <GoogleButton onClick={handleGoogleLogin}/>                       
            </Box>
          </Stack>
        </Box>
  
        
      </Stack>

      <Box>
        <Text>
            Don't have an account? <Link to={"/signup"}>Signup</Link> 
        </Text>
      </Box>
    </Flex>
  )
}