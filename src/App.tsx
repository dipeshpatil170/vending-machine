import { Container, Grid, GridItem } from '@chakra-ui/react'
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
      <Container maxW="container.xl" paddingTop={5}>
         <Grid
            h="100%"
            templateRows="repeat(3, 1fr)"
            templateColumns="repeat(5, 1fr)"
            gap={4}
         >
            <GridItem rowSpan={3} colSpan={3}>
               <Product />
            </GridItem>
            <GridItem colSpan={2} marginLeft={10}>
               <Wallet />
            </GridItem>
            <GridItem colSpan={2} marginLeft={10}>
               <AddMoneyPannel />
            </GridItem>
            <GridItem colSpan={2} marginLeft={10}>
               <PurchasedProducts />
            </GridItem>
         </Grid>
      </Container>
   )
}

export default App
