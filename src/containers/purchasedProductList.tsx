import { Box, Grid } from "@chakra-ui/react";
import { SinglePurchasedProduct } from "./singlePurchasedProduct";

interface Props {
    purchasedProducts: IProductPurchaseProduct[]
}

export const PurchasedProductList = ({ purchasedProducts }: Props) => {
    console.log('purchasedProducts ', purchasedProducts);
    
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
                    {purchasedProducts &&
                        purchasedProducts.length > 0 &&
                        purchasedProducts.map((purchasedProduct) => {
                            return (
                                <SinglePurchasedProduct key={purchasedProduct?.id} purchasedProduct={purchasedProduct}/>
                            )
                        })}
                </Grid>
            </Box>
        </>
    )
}
