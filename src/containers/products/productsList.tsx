import { Box, Grid } from '@chakra-ui/react'
import React from 'react'
import { SingleProduct } from './singleProduct'

interface Props {
   products: IProduct[]
}

export const ProductsList = ({ products }: Props) => {
   return (
      <>
         <Box
            border="1px solid gray"
            padding="1rem"
            bg="white"
            w="100%"
            color="black"
         >
            <Grid templateColumns="repeat(3, 1fr)" gap={6}>
               {products &&
                  products.length > 0 &&
                  products.map((product) => {
                     return (
                        <SingleProduct key={product?.id} product={product} />
                     )
                  })}
            </Grid>
         </Box>
      </>
   )
}
