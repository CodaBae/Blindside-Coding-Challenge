import React, { useState } from "react";
import { Box, Text, Flex, HStack, Input, Image, useToast, Link } from "@chakra-ui/react";
import CS from "./movies.png";
import CustomButton from "../../component/button";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../services/network";
import axios from "axios";

const Register = () => {
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigate();

  
  const handleRegister = async () => {
    setIsLoading(true)
    const res = await registerUser({email, password})
    setIsLoading(false)
    if(res.status){
      toast({
        title: 'Account created.',
        description: "We've created your account for you.",
        status: 'success',
        position: 'top-right',
        duration: 4000,
        isClosable: true,
      })
      navigation('/')
    }
  };
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
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          variant="flushed"
          width={{
            md: "400px",
            base: "90%",
          }}
          fontSize={16}
          placeholder="Enter Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <CustomButton onClick={handleRegister} isLoading={isLoading} action="Register" />
        <Link href="/">
          <Text>Login</Text>
        </Link>
      </Flex>
    </Flex>
  );
};

export default Register;
