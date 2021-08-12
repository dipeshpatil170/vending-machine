import { Container, Grid, GridItem } from '@chakra-ui/react'
import './App.css'
import { AddMoneyOption } from './pages/addMoneyOption'
import { Product } from './pages/product'
import { PurchasedProducts } from './pages/purchasedProducts'
import { Wallet } from './pages/wallet'

interface Props { }
function App(props: Props) {
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
               <AddMoneyOption />
            </GridItem>
            <GridItem colSpan={2} marginLeft={10}>
               <PurchasedProducts />
            </GridItem>
         </Grid>
      </Container>
   )
}

export default App
