import { Box, Skeleton, Stack, Text } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { buyProduct } from '../api/purchasedProductsApi'
import { AlertMessage } from '../components/AlertMessage'
import { ProductsList } from '../containers/products/productsList'
import { RootState } from '../store/reducers'

export const Product = () => {
   const dispatch = useDispatch()
   const {
      products,
      isProductFetching,
      isProductFetchSuccess,
      isProductFetchError,
      productFetchErrorMessage,
   } = useSelector((state: RootState) => {
      return state.product
   })
   const {
      balance,
   } = useSelector((state: RootState) => {
      return state.balance
   })
  
   const handleBuyProduct = (product: IProduct) => {
      let productTobePurchase: IProductPurchase = {
         name: product.name,
         price: product.price,
         quantity: product.quantity,
         image: product.image
      };
      dispatch(buyProduct(productTobePurchase));
      // const decrementedProductQuantity: IProduct = { ...product, quantity: product.quantity - 1 }
      // dispatch(decrementProductQuantity(decrementedProductQuantity));
   }

   return (
      <>
         <Box bg="gray" w="100%" p={3} color="white">
            <Stack spacing={3}>
               <Text fontSize="3xl">Products</Text>
            </Stack>
         </Box>
         {products && !isProductFetching && products.length > 0 && (
            <ProductsList products={products} balance={balance} handleBuyProduct={handleBuyProduct} />
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
               description={productFetchErrorMessage}
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
