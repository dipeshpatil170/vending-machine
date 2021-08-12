import { Box, Container, Grid, GridItem, Skeleton, Stack, Text } from '@chakra-ui/react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from './api/productsApi'
import './App.css'
import { AlertMessage } from './components/AlertMessage'
import { BalancePannel } from './pages/balancePannel'
import { ProductsList } from './pages/products/productsList'
import { RootState } from './store/reducers'

interface Props {

}
function App(props: Props) {
   const dispatch = useDispatch()
   const { products, isProductFetching, isProductFetchSuccess, isProductFetchError, productFetchErrorMessage } = useSelector((state: RootState) => {
      return state.product
   })

   useEffect(() => {
      dispatch(fetchProducts())
   }, [dispatch])

   return (
      <Container maxW="container.xl" paddingTop={5}>
         <Grid
            h="100%"
            templateRows="repeat(3, 1fr)"
            templateColumns="repeat(5, 1fr)"
            gap={4}
         >
            <GridItem rowSpan={3} colSpan={3}>
               <Box bg="gray" w="100%" p={3} color="white">
                  <Stack spacing={3}>
                     <Text fontSize="3xl">Products</Text>
                  </Stack>
               </Box>
               {products && products.length > 0 && (
                  <ProductsList products={products} />
               )}
               {products && isProductFetchSuccess && products.length === 0 && (
                  <AlertMessage status="error" title="No Products Found" description="Seems there are no products available." />
               )}
               {isProductFetchError && (
                  <AlertMessage status="error" title="Some Error Occured" description={productFetchErrorMessage} />
               )}
               {isProductFetching && (
                  <Stack>
                     <Skeleton height="20px" />
                     <Skeleton height="20px" />
                     <Skeleton height="20px" />
                  </Stack>
               )}
            </GridItem>
            <GridItem colSpan={2} marginLeft={10}>
               <Box bg="gray" w="100%" p={3} color="white">
                  <Stack spacing={3}>
                     <Text fontSize="1xl">Wallet</Text>
                  </Stack>
               </Box>
               <BalancePannel />
            </GridItem>
            <GridItem colSpan={2} marginLeft={10}>
               <Box bg="gray" w="100%" p={3} color="white">
                  <Stack spacing={3}>
                     <Text fontSize="1xl">Add money option</Text>
                  </Stack>
               </Box>
            </GridItem>
            <GridItem colSpan={2} marginLeft={10} >
               <Box bg="gray" w="100%" p={3} color="white">
                  <Stack spacing={3}>
                     <Text fontSize="1xl">Purchased Products</Text>
                  </Stack>
               </Box>
            </GridItem>
         </Grid>
      </Container>
   )
}

export default App
