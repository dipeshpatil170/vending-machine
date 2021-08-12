import { combineReducers } from 'redux'
import { balanceReducer } from './balanceReducer'
import { productReducer } from './productReducer'

const rootReducer = combineReducers({
  product: productReducer,
  balance: balanceReducer,
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer
