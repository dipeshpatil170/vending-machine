import {
   Box,
   Progress,
   Skeleton,
   Stack,
   Stat,
   StatLabel,
   StatNumber,
   Text
} from '@chakra-ui/react'
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
      errorBalanceFetchMessage,
      isAddBalanceSuccess,
      isAddBalanceError,
      errorAddBalanceMessage,
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
               <Stat p={4} boxShadow="lg" bg="gray.50" rounded={"md"}>
                  <StatLabel>Available Balance</StatLabel>
                  <StatNumber>₹ {balance?.amount}</StatNumber>
               </Stat>
            </>
         )}
         {isAddBalanceSuccess && (
            <ToastNotification
               title="Balance Credited !"
               description="Amount has been credited into your wallet."
               status="success"
            />
         )}
         {isAddBalanceError && (
            <ToastNotification
               title="Error Occured !"
               description={errorAddBalanceMessage}
               status="error"
            />
         )}

         {isBalanceFetching && isBalanceFetchSuccess && (
            <>
               <Box w="100%" boxShadow="lg" bg="gray.50">
                  <Progress size="xs" isIndeterminate />
               </Box>
            </>
         )}

         {isBalanceFetchError && (
            <AlertMessage
               status="error"
               title="Some Error Occured"
               description={errorBalanceFetchMessage}
            />
         )}
         {isBalanceFetching && !isBalanceFetchSuccess && (
            <Stack>
               <Skeleton height="20px" />
               <Skeleton height="20px" />
               <Skeleton height="20px" />
            </Stack>
         )}
      </>
   )
}
