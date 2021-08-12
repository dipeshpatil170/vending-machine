import {
   ADD_BALANCE_FAILURE,
   ADD_BALANCE_REQUEST,
   ADD_BALANCE_SUCCESS,
   FETCH_BALANCE_FAILURE,
   FETCH_BALANCE_REQUEST,
   FETCH_BALANCE_SUCCESS
} from './../../types/Types'

const initialState: BalanceState = {
   balance: { amount: 0 },
   isBalanceFetching: false,
   isBalanceFetchSuccess: false,
   isBalanceFetchError: false,
   balanceFetchErrorMessage: '',
   isBalanceAddLoading: false,
   isBalanceAddSuccess: false,
   isBalanceAddError: false,
   balanceAddErrorMessage: ''
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
            balanceFetchErrorMessage: action?.payload?.balanceFetchErrorMessage,
         }
      case ADD_BALANCE_REQUEST:
         return {
            ...state,
            isBalanceAddLoading: true,
            isBalanceAddSuccess:false,
            isBalanceAddError: false
         }
      case ADD_BALANCE_SUCCESS:
         return {
            ...state,
            isBalanceAddLoading: false,
            isBalanceAddSuccess: true,
            balance: action?.payload?.balance,
         }
      case ADD_BALANCE_FAILURE:
         return {
            ...state,
            isBalanceAddLoading: false,
            isBalanceAddError: true,
            balanceAddErrorMessage: action?.payload?.balanceAddErrorMessage,
         }

      default:
         return state
   }
}
