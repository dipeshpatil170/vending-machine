import { Box, Grid } from '@chakra-ui/react'
import { SingleProduct } from './singleProduct'

interface Props {
   products: IProduct[]
   balance: Ibalance
   handleBuyProduct: Function
}

export const ProductsList = ({
   products,
   balance,
   handleBuyProduct,
}: Props) => {
   return (
      <>
         <Box
            border="1px solid #eeeee4"
            padding="1rem"
            bg="white"
            w="100%"
            color="black"
            rounded={'md'}
         >
            <Grid templateColumns="repeat(3, 1fr)" gap={6}>
               {products &&
                  products.length > 0 &&
                  products.map((product) => {
                     return (
                        <SingleProduct
                           key={product?.id}
                           product={product}
                           balance={balance}
                           handleBuyProduct={handleBuyProduct}
                        />
                     )
                  })}
            </Grid>
         </Box>
      </>
   )
}
