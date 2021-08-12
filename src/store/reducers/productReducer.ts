import { FETCH_PRODUCTS_REQUEST } from '../../types/productType'
import {
    FETCH_PRODUCTS_FAILURE,
    FETCH_PRODUCTS_SUCCESS
} from './../../types/productType'

const initialState: ProductState = {
  isLoading: false,
  products: [],
}
export const productReducer = (
  state = initialState,
  action: ProductAction
): ProductState => {
    
  switch (action?.type) {
    case FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        products: action?.payload?.products,
      }
    case FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        isLoading: true,
      }
    default:
      return state
  }
}
