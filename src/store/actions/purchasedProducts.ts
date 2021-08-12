import {
   FETCH_PURCHASEDPRODUCTS_FAILURE,
   FETCH_PURCHASEDPRODUCTS_REQUEST,
   FETCH_PURCHASEDPRODUCTS_SUCCESS,
} from '../../types/Types'
import {
   BUY_PRODUCT_FAILURE,
   BUY_PRODUCT_REQUEST,
   BUY_PRODUCT_SUCCESS,
} from './../../types/Types'

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
         errorPurchasedProductsFetchMessage:
            e?.message || 'Internal Server Error',
      },
   }
}

export const buyProductRequest = () => {
   return {
      type: BUY_PRODUCT_REQUEST,
   }
}

export const buyProductSuccess = (purchasedProduct: IpurchasedProducts) => {
   return {
      type: BUY_PRODUCT_SUCCESS,
      payload: {
         purchasedProducts: purchasedProduct,
      },
   }
}
export const buyProductFailure = (e: Error) => {
   return {
      type: BUY_PRODUCT_FAILURE,
      payload: {
         errorPurchasedProductsFetchMessage:
            e?.message || 'Internal Server Error',
      },
   }
}
