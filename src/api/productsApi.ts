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
export const decrementProductQuantity = (id: number, quantity: number) => {
   return async (dispatch: any) => {
      dispatch(decrememtProductQuantityRequest())
      await api
         .patch(`/products/${id}`, { quantity: quantity })
         .then((response) =>
            dispatch(decrememtProductQuantitySuccess(response?.data))
         )
         .catch((error) => dispatch(decrememtProductQuantityFailure(error)))
   }
}
export const incrementProductQuantity = (id: number, quantity: number) => {
   return async (dispatch: any) => {
      dispatch(decrememtProductQuantityRequest())
      const { data } = await api.get(`/products/${id}`);
      const incrementedQuantity = (data.quantity + quantity);
      await api
         .patch(`/products/${id}`, { quantity: incrementedQuantity })
         .then((response) =>
            dispatch(decrememtProductQuantitySuccess(response?.data))
         )
         .catch((error) => dispatch(decrememtProductQuantityFailure(error)))
   }
}
