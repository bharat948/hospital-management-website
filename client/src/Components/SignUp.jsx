import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,Select, useToast
} from "@chakra-ui/react";
import { VStack } from "@chakra-ui/layout";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import './sign.css'



import React from 'react'

const SignUp = () => {

  const [show, setShow] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [firstname, setfirstname] = useState()
  const [password, setpassword] = useState()
  const [Loading, setLoading] = useState();
  const [confirmpassword, setConfirmpassword] = useState();
  const handleClick = () => setShow(!show);

  const [role, setrole] = useState()
  const [email, setemail] = useState()
  const toast = useToast();
  
  return (
<VStack spacing="5px">
      <FormControl id="first-name" >
        <FormLabel color={'#ADE141ff'}>Name</FormLabel>
        <Input
          color={'white'}
          placeholder="Enter Your Name"
          // onChange={(e) => setName(e.target.value)}
        />
      </FormControl>
      <FormControl id="email" >
        <FormLabel color={'#ADE141ff'}>Email Address</FormLabel>
        <Input
          color={'white'}
          type="email"
          placeholder="Enter Your Email Address"
          // onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl id="password" >
        <FormLabel color={'#ADE141ff'}>Password</FormLabel>
        <InputGroup size="md">
          <Input
          color={'white'}
            type={show ? "text" : "password"}
            placeholder="Enter Password"
            // onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl id="password" >
        <FormLabel color={'#ADE141ff'}>Confirm Password</FormLabel>
        <InputGroup size="md">
          <Input
            color={'white'}
            type={showPassword ? "text" : "password"}
            placeholder="Confirm password"
            onChange={(e) => setConfirmpassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {showPassword ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      {/* <FormControl id="pic">
        <FormLabel>Upload your Picture</FormLabel>
        <Input
          type="file"
          p={1.5}
          accept="image/*"
          // onChange={(e) => postDetails(e.target.files[0])}
        />
      </FormControl> */}
      <button
        className="custom-btn btn-15"
        // onClick={submitHandler}
        // isLoading={picLoading}
      >
        Sign Up
      </button>
    </VStack>
  )
}

export default SignUp