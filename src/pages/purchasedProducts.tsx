import { Box, Skeleton, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import { AlertMessage } from '../components/AlertMessage'
import { PurchasedProductList } from '../containers/purchasedProductList'
import { RootState } from '../store/reducers'

export const PurchasedProducts = () => {
   const {
      purchasedProducts,
      isPurchasedProductsFetching,
      isPurchasedProductsFetchError,
      errorPurchasedProductsFetchMessage,
   } = useSelector((state: RootState) => {
      return state.purchasedProducts
   })

   return (
      <>
         {purchasedProducts && purchasedProducts.length > 0 && (
            <>
               <Box bg="gray" w="100%" p={3} color="white">
                  <Stack spacing={3}>
                     <Text fontSize="1xl">Purchased Products</Text>
                  </Stack>
               </Box>
               <PurchasedProductList purchasedProducts={purchasedProducts}/>
            </>
         )}

         {isPurchasedProductsFetchError && (
            <AlertMessage
               status="error"
               title="Some Error Occured"
               description={errorPurchasedProductsFetchMessage}
            />
         )}
         {isPurchasedProductsFetching && (
            <Stack>
               <Skeleton height="20px" />
               <Skeleton height="20px" />
               <Skeleton height="20px" />
            </Stack>
         )}
      </>
   )
}
