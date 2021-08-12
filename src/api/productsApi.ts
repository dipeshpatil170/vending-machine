import { api } from '.'
import {
   fetchProductsFailure,
   fetchProductsSuccess,
} from '../store/actions/productAction'
import { fetchPurchasedProductsRequest } from './../store/actions/purchasedProducts'

export const fetchProducts = () => {
   return async (dispatch: any) => {
      dispatch(fetchPurchasedProductsRequest())
      await api
         .get('/products')
         .then((response) => dispatch(fetchProductsSuccess(response?.data)))
         .catch((error) => dispatch(fetchProductsFailure(error)))
   }
}
