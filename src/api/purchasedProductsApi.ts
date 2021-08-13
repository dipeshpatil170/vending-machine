import { api } from '.'
import {
   buyProductFailure,
   buyProductRequest,
   buyProductSuccess,
   fetchPurchasedProductsFailure,
   fetchPurchasedProductsRequest,
   fetchPurchasedProductsSuccess
} from './../store/actions/purchasedProducts'

export const fetchPurchasedProducts = () => {
   return (dispatch: any) => {
      dispatch(fetchPurchasedProductsRequest())
      setTimeout(async () => {
         await api
            .get('/purchasedproducts')
            .then((response) =>
               dispatch(fetchPurchasedProductsSuccess(response?.data))
            )
            .catch((error) => dispatch(fetchPurchasedProductsFailure(error)))
      }, 1000)
   }
}
export const buyProduct = (productPurchase: IProductPurchase) => {
   return (dispatch: any) => {
      dispatch(buyProductRequest())
      setTimeout(async () => {
         await api
            .post('/purchasedproducts', productPurchase)
            .then((response) => dispatch(buyProductSuccess(response?.data)))
            .catch((error) => dispatch(buyProductFailure(error)))
      }, 1000)
   }
}

export const removeProduct = (purchaseProduct: IProductPurchaseProduct) => {
   console.log('purchaseProduct ', purchaseProduct);
   
   return async (dispatch: any) => {
      await api.delete(`/purchasedproducts/${purchaseProduct.id}`)
         .then((response) => {
            console.log('response ', response);
         })
         .catch((error) => {
            console.log('error ', error);
         })
   }
}
