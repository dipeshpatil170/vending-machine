import {
   FETCH_BALANCE_FAILURE,
   FETCH_BALANCE_REQUEST,
   FETCH_BALANCE_SUCCESS
} from '../../types/Types';
import { ADD_BALANCE_FAILURE, ADD_BALANCE_REQUEST, ADD_BALANCE_SUCCESS } from './../../types/Types';

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
         balanceFetchErrorMessage: e?.message || 'Internal Server Error',
      },
   }
}
export const addBalanceRequest = () => {
   return {
      type: ADD_BALANCE_REQUEST,
   }
}

export const addBalanceSuccess = (balance: Ibalance) => {
   return {
      type: ADD_BALANCE_SUCCESS,
      payload: { balance: balance },
   }
}

export const addBalanceFailure = (e: Error) => {
   return {
      type: ADD_BALANCE_FAILURE,
      payload: {
         balanceAddErrorMessage: e?.message || 'Internal Server Error',
      },
   }
}

