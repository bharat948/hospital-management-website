import React, { useState } from 'react'
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

const SignIn = () => {
  const [firstname, setfirstname] = useState()
  const [password, setpassword] = useState()
  const [show, setShow] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const handleClick = () => setShow(!show);
  return (
    <div><VStack spacing="5px">
    <FormControl id="first-name" >
      <FormLabel color={'#ADE141ff'}>Name</FormLabel>
      <Input
      color={'white'}
        placeholder="Enter Your Name"
        // onChange={(e) => setName(e.target.value)}
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
      Sign In
    </button>
  </VStack></div>
  )
}

export default SignIn