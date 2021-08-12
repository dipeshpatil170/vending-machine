import { api } from '.'
import {
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
