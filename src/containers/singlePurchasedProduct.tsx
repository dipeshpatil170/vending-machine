import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'

interface Props {
    purchasedProduct: IProductPurchaseProduct
}

export const SinglePurchasedProduct = ({purchasedProduct}: Props) => {
    return (
        <Box  boxShadow="lg" bg="gray.50">
            <Image src={purchasedProduct?.image} alt={purchasedProduct?.name} w={'100%'} />
            <Text fontSize="1xl" marginTop="5%" pt={2}>
                Name : {purchasedProduct?.name}
            </Text>
            <Text fontSize="1xl" pt={2}>
                Price : {purchasedProduct?.price}
            </Text>
        </Box>
    )
}
