import { Box, Progress, Skeleton, Stack, Stat, StatLabel, StatNumber, Text } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import { AlertMessage } from '../components/AlertMessage'
import { ToastNotification } from '../components/ToastNotification'
import { RootState } from '../store/reducers'

export const Wallet = () => {
   const {
      balance,
      isBalanceFetching,
      isBalanceFetchSuccess,
      isBalanceFetchError,
      balanceFetchErrorMessage,
      isBalanceAddLoading,
      isBalanceAddSuccess,
      isBalanceAddError,
      balanceAddErrorMessage
   } = useSelector((state: RootState) => {
      return state.balance
   })

   return (
      <>
         <Box bg="gray" w="100%" p={3} color="white">
            <Stack spacing={3}>
               <Text fontSize="1xl">Wallet</Text>
            </Stack>
         </Box>
        

         {balance && isBalanceFetchSuccess && (
            <>
               <Stat p={4} boxShadow="lg" bg="gray.50">
                  <StatLabel>Available Balance</StatLabel>
                  <StatNumber>₹ {balance?.amount}</StatNumber>
               </Stat>
            </>
         )}
         {isBalanceAddSuccess && (
            <ToastNotification  title="Balance Credited !" description="Amount has been credited into your wallet." status="success"/>
         )}
         {isBalanceAddError && (
            <ToastNotification title="Error Occured !" description={balanceAddErrorMessage} status="error"/>
         )}

         {isBalanceAddLoading && (
            <>
               <Box w="100%"  boxShadow="lg" bg="gray.50">
                  <Progress size="xs" isIndeterminate />
               </Box>
            </>
         )}

         {isBalanceFetchError && (
            <AlertMessage
               status="error"
               title="Some Error Occured"
               description={balanceFetchErrorMessage}
            />
         )}
         {isBalanceFetching && (
            <Stack>
               <Skeleton height="20px" />
               <Skeleton height="20px" />
               <Skeleton height="20px" />
            </Stack>
         )}
      </>
   )
}
