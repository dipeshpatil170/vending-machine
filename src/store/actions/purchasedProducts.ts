import {
   FETCH_PURCHASEDPRODUCTS_FAILURE,
   FETCH_PURCHASEDPRODUCTS_REQUEST,
   FETCH_PURCHASEDPRODUCTS_SUCCESS,
} from '../../types/Types'

export const fetchPurchasedProductsRequest = () => {
   return {
      type: FETCH_PURCHASEDPRODUCTS_REQUEST,
   }
}

export const fetchPurchasedProductsSuccess = (
   purchasedProducts: IpurchasedProducts[]
) => {
   return {
      type: FETCH_PURCHASEDPRODUCTS_SUCCESS,
      payload: { purchasedProducts: purchasedProducts },
   }
}

export const fetchPurchasedProductsFailure = (e: Error) => {
   return {
      type: FETCH_PURCHASEDPRODUCTS_FAILURE,
      payload: {
         purchasedProductsFetchErrorMessage:
            e?.message || 'Internal Server Error',
      },
   }
}
