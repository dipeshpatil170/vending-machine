import { AddIcon } from '@chakra-ui/icons';
import { Box, Button, Image, Text } from '@chakra-ui/react';

interface Props {
   product: IProduct
   balance:Ibalance
   handleBuyProduct:Function
}

export const SingleProduct = ({ product, balance, handleBuyProduct }: Props) => {
   return (
      <Box padding="6" boxShadow="lg" bg="gray.50">
         <Image src={product?.image} alt={product?.name} w={'100%'} />
         <Text fontSize="1xl" marginTop="5%" pt={2}>
            Name : {product?.name}{' '}
         </Text>
         <Text fontSize="1xl" pt={2}>Price : {product?.price} </Text>
         <Text fontSize="1xl" pt={2}>Quantity : {product?.quantity} </Text>
         <Button onClick={() => handleBuyProduct(product)} w={"100%"} mt={3} colorScheme="teal" size="md" disabled={!(Number(balance?.amount) >= Number(product?.price))}>
            Buy  <AddIcon marginLeft={2} w={3} h={3} />
         </Button>
      </Box>
   )
}
