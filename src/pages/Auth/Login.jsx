import React, { useState } from "react";
import {
  Box,
  Text,
  Flex,
  HStack,
  Input,
  Image,
  useToast,
  Link,
  InputGroup,
  Icon,
  InputRightElement,
} from "@chakra-ui/react";
import CS from "./movies.png";
import CustomButton from "../../component/button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {AiFillEye, AiFillEyeInvisible} from 'react-icons/ai'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { loginUser } from "../../services/network";

const Login = () => {
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false)

  const handleLogin = async () => {
    setIsLoading(true);
    const res = await loginUser({email, password})
      if (res.status) {
        const userToken = {token : res?.data?.token}
        console.log(userToken)
        await AsyncStorage.setItem('userDetails', JSON.stringify(userToken))
        toast({
          title: "Account created.",
          description: "Login success.",
          status: "success",
          position: "top-right",
          duration: 4000,
          isClosable: true,
        });
        navigation("/home");
      
    } else {
      setIsLoading(false);
      toast({
        title: "Invalid credentials",
        description: "Login success.",
        status: "error",
        position: "top-right",
        duration: 4000,
        isClosable: true,
      });
    }
}
  const navigation = useNavigate();
  return (
    <Flex justify="center" align="center" width="100%" height="100vh">
      <Box
        bgImage={CS}
        bgSize="cover"
        height="100%"
        flexBasis={{
          md: "50%",
          base: "0%",
        }}
      ></Box>
      <Flex
        height="100%"
        bgSize="cover"
        align="center"
        gap={34}
        flexDir="column"
        p={{
          md: "0px 50px",
          base: "10px",
        }}
        justify="center"
        flexBasis={{
          md: "50%",
          base: "100%",
        }}
      >
        <HStack fontSize="2rem">
          <Text>Just</Text>
          <Text>Watch</Text>
        </HStack>
        <Input
          variant="flushed"
          width={{
            md: "400px",
            base: "90%",
          }}
          fontSize={16}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
        />
        <InputGroup
        width={{
          md: "400px",
          base: "90%",
        }}
        >
          <Input
            variant="flushed"
            
            fontSize={16}
            placeholder="Enter Password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Icon as={showPassword ? AiFillEye : AiFillEyeInvisible} h={10} w={10} onClick={() => setShowPassword(!showPassword)} />
              
          </InputRightElement>
        </InputGroup>
        <CustomButton
          isLoading={isLoading}
          onClick={handleLogin}
          action="Login"
        />
        <Link href="/register">
          <Text>Register</Text>
        </Link>
      </Flex>
    </Flex>
  );
};

export default Login;
