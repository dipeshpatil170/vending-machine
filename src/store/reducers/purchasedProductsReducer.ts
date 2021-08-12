import {
   FETCH_PURCHASEDPRODUCTS_FAILURE,
   FETCH_PURCHASEDPRODUCTS_REQUEST,
   FETCH_PURCHASEDPRODUCTS_SUCCESS,
} from './../../types/Types'

const initialState: PurchasedProductsState = {
   purchasedProducts: [],
   isPurchasedProductsFetching: false,
   isPurchasedProductsFetchSuccess: false,
   isPurchasedProductsFetchError: false,
   purchasedProductsFetchErrorMessage: '',
}

export const purchasedProducts = (
   state = initialState,
   action: PurchasedProductsAction
): PurchasedProductsState => {
   switch (action?.type) {
      case FETCH_PURCHASEDPRODUCTS_REQUEST:
         return {
            ...state,
            isPurchasedProductsFetching: true,
         }

      case FETCH_PURCHASEDPRODUCTS_SUCCESS:
         return {
            ...state,
            isPurchasedProductsFetching: false,
            isPurchasedProductsFetchSuccess: true,
            purchasedProducts: action?.payload?.purchasedProducts,
         }

      case FETCH_PURCHASEDPRODUCTS_FAILURE:
         return {
            ...state,
            isPurchasedProductsFetching: false,
            isPurchasedProductsFetchError: true,
            purchasedProductsFetchErrorMessage:
               action?.payload?.purchasedProductsFetchErrorMessage,
         }

      default:
         return state
   }
}
