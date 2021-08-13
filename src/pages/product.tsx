import { Box, Skeleton, Stack, Text } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct } from '../api/purchasedProductsApi'
import { AlertMessage } from '../components/AlertMessage'
import { ProductsList } from '../containers/productsList'
import { RootState } from '../store/reducers'

export const Product = () => {
   const dispatch = useDispatch()
   const {
      products,
      isProductFetching,
      isProductFetchSuccess,
      isProductFetchError,
      errorProductFetchMessage,
   } = useSelector((state: RootState) => {
      return state.product
   })
   const { balance } = useSelector((state: RootState) => {
      return state.balance
   })

   const handleBuyProduct = (product: IProduct) => {
      dispatch(addProduct(product, balance))
   }

   return (
      <>
         <Box bg="gray" w="100%" p={3} color="white">
            <Stack spacing={3}>
               <Text fontSize="1xl">Products</Text>
            </Stack>
         </Box>
         {products && !isProductFetching && products.length > 0 && (
            <ProductsList
               products={products}
               balance={balance}
               handleBuyProduct={handleBuyProduct}
            />
         )}
         {products && isProductFetchSuccess && products.length === 0 && (
            <AlertMessage
               status="error"
               title="No Products Found"
               description="Seems there are no products available."
            />
         )}
         {isProductFetchError && (
            <AlertMessage
               status="error"
               title="Some Error Occured"
               description={errorProductFetchMessage}
            />
         )}
         {isProductFetching && (
            <Stack>
               <Skeleton height="30px" />
               <Skeleton height="30px" />
               <Skeleton height="30px" />
            </Stack>
         )}
      </>
   )
}
