import { api } from '.'
import {
  fetchProductsFailure,
  fetchProductsSuccess,
} from '../store/actions/productAction'

export const fetchProducts = () => {
  return async (dispatch: any) => {
    await api
      .get('/products')
      .then((response) => dispatch(fetchProductsSuccess(response?.data)))
      .catch((error) => dispatch(fetchProductsFailure(error)))
  }
}
