import { api } from '.'
import {
   addBalanceFailure,
   addBalanceRequest,
   addBalanceSuccess,
   fetchBalanceFailure,
   fetchBalanceRequest,
   fetchBalanceSuccess
} from './../store/actions/balanceAction'
export const fetchBalance = () => {
   return (dispatch: any) => {
      dispatch(fetchBalanceRequest())
      setTimeout(async () => {
         await api.get('/balance')
            .then((response) => dispatch(fetchBalanceSuccess(response?.data)))
            .catch((error) => dispatch(fetchBalanceFailure(error)))
      }, 1000);
      
   }
}
export const addBalance = (moneyTobeAdded: number) => {
   return (dispatch: any) => {
      dispatch(addBalanceRequest())
      setTimeout(async () => {
         await api.patch('/balance', { amount: moneyTobeAdded })
            .then((response) => dispatch(addBalanceSuccess(response?.data)))
            .catch((error) => dispatch(addBalanceFailure(error)))
      }, 1000);

   }
}
