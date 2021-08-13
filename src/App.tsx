import { Container, Flex, SimpleGrid, Stack } from '@chakra-ui/react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchBalance } from './api/balanceApi'
import { fetchProducts } from './api/productsApi'
import { fetchPurchasedProducts } from './api/purchasedProductsApi'
import './App.css'
import { AddMoneyPannel } from './pages/addMoneyPannel'
import { Product } from './pages/product'
import { PurchasedProducts } from './pages/purchasedProducts'
import { Wallet } from './pages/wallet'

function App() {
   const dispatch = useDispatch()
 
   useEffect(() => {
      dispatch(fetchProducts())
      dispatch(fetchBalance())
      dispatch(fetchPurchasedProducts())
   }, [dispatch])
   return (
      <Container maxW={'5xl'} py={12}>
         <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
            <Stack spacing={4}>
               <Product />
            </Stack>
            <Flex>
               <Stack spacing={4}>
                  <Wallet />
                  <AddMoneyPannel />
                  <PurchasedProducts />
               </Stack>
            </Flex>
         </SimpleGrid>
      </Container>
   )
}


export default App
