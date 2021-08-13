import { Box, Button, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addBalance } from '../api/balanceApi'
import { RootState } from '../store/reducers'

export const AddMoneyPannel = () => {
   const dispatch = useDispatch()
   const moneyOption = [10, 20, 30, 40, 50, 100, 500]

   const { balance } = useSelector((state: RootState) => {
      return state.balance
   })
   const handleAddmoney = (moneyTobeAdded: number) => {
      const money = Number(balance.amount + moneyTobeAdded)
      dispatch(addBalance(money))
   }
   return (
      <>
         <Box bg="gray" w="100%" p={3} color="white">
            <Stack spacing={3}>
               <Text fontSize="1xl">Add money option</Text>
            </Stack>
         </Box>
         <Box w="100%" p={4} boxShadow="lg" bg="gray.50" rounded={"md"}>
            <Stack spacing={4} direction="row" align="center">
               {moneyOption.map((money, index) => {
                  return (
                     <Button
                        key={index}
                        onClick={() => handleAddmoney(money)}
                        colorScheme="pink"
                        size="sm"
                     >
                        {money}
                     </Button>
                  )
               })}
            </Stack>
         </Box>
      </>
   )
}
