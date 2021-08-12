import {
   FETCH_PRODUCTS_FAILURE,
   FETCH_PRODUCTS_REQUEST,
   FETCH_PRODUCTS_SUCCESS
} from '../../types/Types'

const initialState: ProductState = {
   products: [],
   isProductFetching: false,
   isProductFetchSuccess: false,
   isProductFetchError: false,
   productFetchErrorMessage: '',
}
export const productReducer = (
   state = initialState,
   action: ProductAction
): ProductState => {
   switch (action?.type) {
      case FETCH_PRODUCTS_REQUEST:
         return {
            ...state,
            isProductFetching: true,
         }

      case FETCH_PRODUCTS_SUCCESS:
         return {
            ...state,
            isProductFetching: false,
            isProductFetchSuccess: true,
            products: action?.payload?.products,
         }

      case FETCH_PRODUCTS_FAILURE:
         return {
            ...state,
            isProductFetching: false,
            isProductFetchError: true,
            productFetchErrorMessage: action?.payload?.productFetchErrorMessage,
         }

      default:
         return state
   }
}
