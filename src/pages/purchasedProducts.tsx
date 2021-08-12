import { Box, Skeleton, Stack, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPurchasedProducts } from '../api/purchasedProductsApi'
import { AlertMessage } from '../components/AlertMessage'
import { RootState } from '../store/reducers'


export const PurchasedProducts = () => {

    const dispatch = useDispatch();
    
    useEffect(() => {

        dispatch(fetchPurchasedProducts())

    }, [dispatch])
    
    const { purchasedProducts,
        isPurchasedProductsFetching,
        isPurchasedProductsFetchError,
        purchasedProductsFetchErrorMessage } = useSelector((state: RootState) => { return state.purchasedProducts })
    
    return (
        <>
            {purchasedProducts && purchasedProducts.length > 0 && (
                <>
                    <Box bg="gray" w="100%" p={3} color="white" >
                        <Stack spacing={3}>
                            <Text fontSize="1xl">Purchased Products</Text>
                        </Stack>
                    </Box>
                    <Box w="100%" p={4} boxShadow="lg" bg="gray.50">
                        <Text fontSize="lg">Purchased Products</Text>
                    </Box>
                </>
            )}
            
            {isPurchasedProductsFetchError && (
                <AlertMessage
                    status="error"
                    title="Some Error Occured"
                    description={purchasedProductsFetchErrorMessage}
                />
            )}
            {isPurchasedProductsFetching && (
                <Stack>
                    <Skeleton height="20px" />
                    <Skeleton height="20px" />
                    <Skeleton height="20px" />
                </Stack>
            )}
        </>

    )
}
