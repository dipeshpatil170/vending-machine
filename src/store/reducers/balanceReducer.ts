import {
   ADD_BALANCE_FAILURE,
   ADD_BALANCE_REQUEST,
   ADD_BALANCE_SUCCESS,
   FETCH_BALANCE_FAILURE,
   FETCH_BALANCE_REQUEST,
   FETCH_BALANCE_SUCCESS,
} from './../../types/Types'

const initialState: BalanceState = {
   balance: { amount: 0 },
   isBalanceFetching: false,
   isBalanceFetchSuccess: false,
   isBalanceFetchError: false,
   errorBalanceFetchMessage: '',
   isAddBalanceSuccess: false,
   isAddBalanceError: false,
   errorAddBalanceMessage: '',
}

export const balanceReducer = (
   state = initialState,
   action: BalanceAction
): BalanceState => {
   switch (action?.type) {
      case FETCH_BALANCE_REQUEST:
         return {
            ...state,
            isBalanceFetching: true,
         }

      case FETCH_BALANCE_SUCCESS:
         return {
            ...state,
            isBalanceFetching: false,
            isBalanceFetchSuccess: true,
            balance: action?.payload?.balance,
         }

      case FETCH_BALANCE_FAILURE:
         return {
            ...state,
            isBalanceFetching: false,
            isBalanceFetchError: true,
            errorBalanceFetchMessage: action?.payload?.errorBalanceFetchMessage,
         }
      case ADD_BALANCE_REQUEST:
         return {
            ...state,
            isBalanceFetching: true,
            isAddBalanceSuccess: false,
            isAddBalanceError: false,
         }
      case ADD_BALANCE_SUCCESS:
         return {
            ...state,
            isBalanceFetching: false,
            isAddBalanceSuccess: true,
            balance: action?.payload?.balance,
         }
      case ADD_BALANCE_FAILURE:
         return {
            ...state,
            isBalanceFetching: false,
            isAddBalanceError: true,
            errorAddBalanceMessage: action?.payload?.errorAddBalanceMessage,
         }

      default:
         return state
   }
}
