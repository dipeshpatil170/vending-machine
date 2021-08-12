import { Box, Stack, Text } from '@chakra-ui/react'
import React from 'react'

interface Props {

}

export const Wallet = (props: Props) => {
    return (
        <>
            <Box bg="gray" w="100%" p={3} color="white" >
                <Stack spacing={3}>
                    <Text fontSize="1xl">Wallet</Text>
                </Stack>
            </Box>
            <Box w="100%" p={4} boxShadow="lg" bg="gray.50">
                <Text fontSize="lg">Available Balance : 500 INR </Text>
            </Box>
        </>
    )
}
