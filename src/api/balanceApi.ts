import { api } from '.'
import {
  fetchBalanceFailure,
  fetchBalanceRequest,
  fetchBalanceSuccess,
} from './../store/actions/balanceAction'
export const fetchBalance = () => {
  return (dispatch: any) => {
    dispatch(fetchBalanceRequest())
    api
      .get('/balance')
      .then((response) => dispatch(fetchBalanceSuccess(response?.data)))
      .catch((error) => dispatch(fetchBalanceFailure(error)))
  }
}
