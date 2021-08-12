import { api } from '.';
import {
   fetchProductsFailure,
   fetchProductsSuccess
} from '../store/actions/productAction';
import { fetchProductsRequest } from './../store/actions/productAction';

export const fetchProducts = () => {
   return  (dispatch: any) => {
      dispatch(fetchProductsRequest())
      setTimeout(async () => {
         await api
            .get('/products')
            .then((response) => dispatch(fetchProductsSuccess(response?.data)))
            .catch((error) => dispatch(fetchProductsFailure(error)))
      }, 1000);
      
   }
}
