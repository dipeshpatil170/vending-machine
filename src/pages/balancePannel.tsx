import { Box, Text } from '@chakra-ui/react'
import React from 'react'

interface Props {}

export const BalancePannel = (props: Props) => {
   return (
      <>
         <Box w="100%" p={4} color="black" bg={"white"} border="1px solid gray" borderBottomEndRadius={10} borderBottomStartRadius={10}>
            <Text fontSize="lg">Available Balance : 500 INR</Text>
         </Box>
      </>
   )
}
