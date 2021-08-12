import {
   FETCH_BALANCE_FAILURE,
   FETCH_BALANCE_REQUEST,
   FETCH_BALANCE_SUCCESS,
} from '../../types/Types'

export const fetchBalanceRequest = () => {
   return {
      type: FETCH_BALANCE_REQUEST,
   }
}

export const fetchBalanceSuccess = (balance: Ibalance) => {
   return {
      type: FETCH_BALANCE_SUCCESS,
      payload: { balance: balance },
   }
}

export const fetchBalanceFailure = (e: Error) => {
   return {
      type: FETCH_BALANCE_FAILURE,
      payload: {
         productFetchErrorMessage: e?.message || 'Internal Server Error',
      },
   }
}
