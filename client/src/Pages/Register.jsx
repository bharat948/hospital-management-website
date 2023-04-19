import React from 'react'
import { Stack, HStack, VStack,Box ,Tab,Tabs,TabList,TabPanel,TabPanels} from '@chakra-ui/react'
import './Register.css'
import SignUp from '../Components/SignUp'
import SignIn from '../Components/SignIn'

const Register = () => {
  return (
   <div className='info'>
    <VStack
  
  spacing={4}
  align='stretch'
  >
  <Box h='40px' color={'white'} >
    1
  </Box>
  <Box h='40px'color={'white'} >
    2
  </Box>
  <Box h='40px'color={'white'} >
    3
  </Box>
</VStack>
<Box  w="100%" p={4} borderRadius="lg" borderWidth="1px"  font-family='Lobster' width={'60%'}>
        <Tabs bg={"#181E21ff"} variant="enclosed">
          <TabList mb="1em" > 
            <Tab color={'#4F6631ff'}  _selected={ { color: '#ADE141ff' }} width="50%" >Login</Tab>
            <Tab color={'#4F6631ff'}  _selected={ { color: '#ADE141ff' }} width="50%" >Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <SignIn/>
            </TabPanel>
            <TabPanel>
              <SignUp/>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>

   </div>
  )
}

export default Register