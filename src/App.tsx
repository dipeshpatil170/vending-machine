import { Box, Container, Flex } from '@chakra-ui/react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchBalance } from './api/balanceApi'
import { fetchProducts } from './api/productsApi'
import './App.css'
import { AddBankMoneyPannel } from './pages/addBankMoneyPannel'
import { BalancePannel } from './pages/balancePannel'
import { ProductsList } from './pages/productsList'
import { PurchasedProducts } from './pages/purchasedProducts'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchProducts())
    dispatch(fetchBalance())
  }, [dispatch])
  return (
    <Container maxW="container.lg">
      <Flex className="pt-5">
        <Box flex="2">
          <ProductsList />
        </Box>
        <Box flex="1">
          <BalancePannel />
        </Box>
      </Flex>
      <Flex className="pt-5">
        <Box flex="2"></Box>
        <Box flex="1">
          <AddBankMoneyPannel />
        </Box>
      </Flex>
      <Flex className="pt-5">
        <Box flex="2"></Box>
        <Box flex="1">
          <PurchasedProducts />
        </Box>
      </Flex>
    </Container>
  )
}

export default App
