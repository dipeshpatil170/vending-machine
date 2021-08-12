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
   return async (dispatch: any) => {
      dispatch(fetchPurchasedProductsRequest())
      setTimeout(async () => {
         await api
            .get('/purchasedproducts')
            .then((response) =>
               dispatch(fetchPurchasedProductsSuccess(response?.data))
            )
            .catch((error) => dispatch(fetchPurchasedProductsFailure(error)))
      }, 1000);
     
   }
}
export const buyProduct = (productPurchase: IProductPurchase) => {
   return async (dispatch: any) => {
      dispatch(buyProductRequest())
      await api.post('/purchasedproducts', productPurchase)
         .then((response) => {
            dispatch(buyProductSuccess(response?.data))
         })
         .catch((error) => {
            dispatch(buyProductFailure(error))
         })
      
   }
}
