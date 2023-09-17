import { Box, Button, Heading } from '@chakra-ui/react'
import React from 'react'
import { useAuthContext } from '../Context/AuthContext'

const Home = () => {
    let {LogoutUser}=useAuthContext()

    let handleLogout=async()=>{
try {
    await LogoutUser()
} catch (error) {
    console.log(error);
}
    }
  return (
    <Box>
<Heading>Welcome Home</Heading>
<Button onClick={handleLogout}>Logout</Button>
    </Box>
  )
}

export default Home