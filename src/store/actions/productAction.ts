import {
   DECREMENT_PRODUCT_QUANTITY_FAILURE,
   FETCH_PRODUCTS_FAILURE,
   FETCH_PRODUCTS_REQUEST,
   FETCH_PRODUCTS_SUCCESS
} from '../../types/Types';
import { DECREMENT_PRODUCT_QUANTITY_REQUEST, DECREMENT_PRODUCT_QUANTITY_SUCCESS } from './../../types/Types';

export const fetchProductsRequest = () => {
   return {
      type: FETCH_PRODUCTS_REQUEST,
   }
}

export const fetchProductsSuccess = (products: IProduct[]) => {
   return {
      type: FETCH_PRODUCTS_SUCCESS,
      payload: { products: products },
   }
}

export const fetchProductsFailure = (e: Error) => {
   return {
      type: FETCH_PRODUCTS_FAILURE,
      payload: {
         errorProductFetchMessage: e?.message || 'Internal Server Error',
      },
   }
}

export const decrememtProductQuantityRequest = () => {
   return {
      type: DECREMENT_PRODUCT_QUANTITY_REQUEST,
   }
}

export const decrememtProductQuantitySuccess = (product: IProduct) => {
   return {
      type: DECREMENT_PRODUCT_QUANTITY_SUCCESS,
      payload: { product: product },
   }
}

export const decrememtProductQuantityFailure = (e: Error) => {
   return {
      type: DECREMENT_PRODUCT_QUANTITY_FAILURE,
      payload: {
         errorDecrementProductQuantityMessage: e?.message || 'Internal Server Error',
      },
   }
}
