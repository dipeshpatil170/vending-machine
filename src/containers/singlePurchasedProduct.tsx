import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'

interface Props {
    purchasedProduct: IProductPurchaseProduct
}

export const SinglePurchasedProduct = ({purchasedProduct}: Props) => {
    return (
        <Box boxShadow="lg" bg="gray.50" w={"100%"}  m={"auto"} rounded={"md"}>
            <Image src={purchasedProduct?.image} rounded={"md"} alt={purchasedProduct?.name} w={'30%'} h={'30%'} />
            <Text fontSize="1xl" marginTop="5%" pt={2}>
                Name : {purchasedProduct?.name}
            </Text>
            <Text fontSize="1xl" pt={2}>
                Price : {purchasedProduct?.price}
            </Text>
            </Box>
    )
}
