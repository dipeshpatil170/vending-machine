import { api } from '.'
import {
   decrememtProductQuantityFailure,
   decrememtProductQuantityRequest,
   decrememtProductQuantitySuccess,
   fetchProductsFailure,
   fetchProductsSuccess
} from '../store/actions/productAction'
import { fetchProductsRequest } from './../store/actions/productAction'

export const fetchProducts = () => {
   return (dispatch: any) => {
      dispatch(fetchProductsRequest())
      setTimeout(async () => {
         await api
            .get('/products')
            .then((response) => dispatch(fetchProductsSuccess(response?.data)))
            .catch((error) => dispatch(fetchProductsFailure(error)))
      }, 1000)
   }
}
export const decrementProductQuantity = (product: IProduct) => {
   return  (dispatch: any) => {
      dispatch(decrememtProductQuantityRequest())
      setTimeout(async () => {
      await api
         .put(`/products/${product?.id}`, product)
         .then((response) => dispatch(decrememtProductQuantitySuccess(response?.data)))
            .catch((error) => dispatch(decrememtProductQuantityFailure(error)))
      }, 1000)
   }
}
