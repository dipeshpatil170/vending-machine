import {
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
} from '../../types/Types'

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
      productFetchErrorMessage: e?.message || 'Internal Server Error',
    },
  }
}
