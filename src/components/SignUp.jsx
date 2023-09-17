import { useState } from "react";
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
  useToast
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../Context/AuthContext";

export default function SignUp() {
  let [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  let navigate = useNavigate();
  let toast=useToast();
  let {SignUpUser}=useAuthContext();
let handlChange=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    setUserData({...userData,[name]:value})
}

  let handleSubmit=async()=>{
    try {
        
        await SignUpUser(userData.email,userData.password)
navigate("/")
    } catch (error) {
       
        toast({
          title: error.message,
          position: "top-right",
          status:"error",
          isClosable: true,
        })
    }
   
  }
  return (
    <Flex
      direction={"column"}
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign up to your account</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool <Text color={"blue.400"}>features</Text> ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" name="email" onChange={handlChange}/>
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" name="password" onChange={handlChange}/>
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Text color={"blue.400"}>Forgot password?</Text>
              </Stack>
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={handleSubmit}
              >
                Sign up
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
      <Box>
        <Text>
          Already have an account? <Link to={"/"}>Login</Link>
        </Text>
      </Box>
    </Flex>
  );
}
