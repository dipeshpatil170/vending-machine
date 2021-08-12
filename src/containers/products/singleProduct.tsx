import { Box, Image, Text } from '@chakra-ui/react'

interface Props {
   product: IProduct
}

export const SingleProduct = ({ product }: Props) => {
   return (
      <Box padding="6" boxShadow="lg" bg="gray.50">
         <Image src={product?.image} alt={product?.name} w={'100%'} />
         <Text fontSize="1xl" marginTop="5%">
            Name : {product?.name}{' '}
         </Text>
         <Text fontSize="1xl">Price : {product?.price} </Text>
         <Text fontSize="1xl">Quantity : {product?.quantity} </Text>
      </Box>
   )
}
