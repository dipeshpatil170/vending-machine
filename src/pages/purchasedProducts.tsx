import { Box, Skeleton, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { creditBalance } from '../api/balanceApi'
import { incrementProductQuantity } from '../api/productsApi'
import { removeProduct } from '../api/purchasedProductsApi'
import { AlertMessage } from '../components/AlertMessage'
import { PurchasedProductList } from '../containers/purchasedProductList'
import { RootState } from '../store/reducers'

export const PurchasedProducts = () => {
   const dispatch = useDispatch();
   const {
      purchasedProducts,
      isPurchasedProductsFetching,
      isPurchasedProductsFetchError,
      errorPurchasedProductsFetchMessage,
   } = useSelector((state: RootState) => {
      return state.purchasedProducts
   })

   const handleRemovePurchasedProduct = (purchasedProduct: IProductPurchaseProduct) => {
      dispatch(removeProduct(purchasedProduct));
      dispatch(incrementProductQuantity(purchasedProduct.productId, purchasedProduct.quantity))
      dispatch(creditBalance(purchasedProduct.price))
      
      
   }

   return (
      <>
         {purchasedProducts && purchasedProducts.length > 0 && (
            <>
               <Box bg="gray" w="100%" p={3} color="white">
                  <Stack spacing={3}>
                     <Text fontSize="1xl">Purchased Products</Text>
                  </Stack>
               </Box>
               <PurchasedProductList purchasedProducts={purchasedProducts} handleRemovePurchasedProduct={handleRemovePurchasedProduct} />
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
