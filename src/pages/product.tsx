import { Skeleton, Stack } from '@chakra-ui/react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../api/productsApi'
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

   useEffect(() => {
      dispatch(fetchProducts())
   }, [dispatch])

   return (
      <>
         {products && products.length > 0 && (
            <ProductsList products={products} />
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
               <Skeleton height="20px" />
               <Skeleton height="20px" />
               <Skeleton height="20px" />
            </Stack>
         )}
      </>
   )
}
