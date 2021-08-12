import { Box, Container, Grid, GridItem, Stack, Text } from '@chakra-ui/react'
import './App.css'
import { Product } from './pages/product'

interface Props {}
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
               <Box bg="gray" w="100%" p={3} color="white">
                  <Stack spacing={3}>
                     <Text fontSize="3xl">Products</Text>
                  </Stack>
               </Box>
               <Product />
            </GridItem>
            <GridItem colSpan={2} marginLeft={10}>
               <Box bg="gray" w="100%" p={3} color="white">
                  <Stack spacing={3}>
                     <Text fontSize="1xl">Wallet</Text>
                  </Stack>
               </Box>
            </GridItem>
            <GridItem colSpan={2} marginLeft={10}>
               <Box bg="gray" w="100%" p={3} color="white">
                  <Stack spacing={3}>
                     <Text fontSize="1xl">Add money option</Text>
                  </Stack>
               </Box>
            </GridItem>
            <GridItem colSpan={2} marginLeft={10}>
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
