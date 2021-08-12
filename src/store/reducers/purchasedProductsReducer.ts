import {
   BUY_PRODUCT_FAILURE,
   BUY_PRODUCT_REQUEST,
   BUY_PRODUCT_SUCCESS,
   FETCH_PURCHASEDPRODUCTS_FAILURE,
   FETCH_PURCHASEDPRODUCTS_REQUEST,
   FETCH_PURCHASEDPRODUCTS_SUCCESS
} from './../../types/Types'

const initialState: PurchasedProductsState = {
   purchasedProducts: [],
   isPurchasedProductsFetching: false,
   isPurchasedProductsFetchSuccess: false,
   isPurchasedProductsFetchError: false,
   purchasedProductsFetchErrorMessage: '',
   isAddPurchasedProductLoading: false,
   isAddPurchasedProductSuccess: false,
   isAddPurchasedProductError: false,
   purchasedProductsAddErrorMessage: '',
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
      case BUY_PRODUCT_REQUEST: {
         return {
            ...state,
            isAddPurchasedProductLoading:false
         }
      }
      case BUY_PRODUCT_SUCCESS: {
         return {
            ...state,
            isAddPurchasedProductLoading: false,
            isAddPurchasedProductSuccess: true,
            purchasedProducts: state.purchasedProducts.concat(action?.payload?.purchasedProducts)
         }
      }
      case BUY_PRODUCT_FAILURE:
         return {
            ...state,
            isAddPurchasedProductLoading: false,
            isAddPurchasedProductError: true,
            purchasedProductsAddErrorMessage: action?.payload?.purchasedProductsAddErrorMessage,

         }

      default:
         return state
   }
}
