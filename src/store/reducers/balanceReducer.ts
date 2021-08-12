import {
  FETCH_BALANCE_FAILURE,
  FETCH_BALANCE_REQUEST,
  FETCH_BALANCE_SUCCESS,
} from './../../types/Types'

const initialState: BalanceState = {
  balance: { amount: 0 },
  isBalanceFetching: false,
  isBalanceFetchSuccess: false,
  isBalanceFetchError: false,
  balanceFetchErrorMessage: '',
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

    default:
      return state
  }
}
