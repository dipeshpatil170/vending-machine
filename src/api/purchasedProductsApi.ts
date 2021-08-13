import { api } from '.';
import {
   addProductFailure,
   addProductRequest,
   addProductSuccess,
   fetchPurchasedProductsFailure,
   fetchPurchasedProductsRequest,
   fetchPurchasedProductsSuccess,
   removeProductFailure,
   removeProductRequest,
   removeProductSuccess
} from './../store/actions/purchasedProducts';
import { creditBalance, debitBalance } from './balanceApi';
import { decrementProductQuantity, incrementProductQuantity } from './productsApi';

export const fetchPurchasedProducts = () => {
   return (dispatch: any) => {
      dispatch(fetchPurchasedProductsRequest())
      setTimeout(async () => {
         await api
            .get('/purchasedproducts')
            .then((response) =>
               dispatch(fetchPurchasedProductsSuccess(response?.data))
            )
            .catch((error) => dispatch(fetchPurchasedProductsFailure(error)))
      }, 1000)
   }
}
export const addProduct = (product: IProduct,balance:Ibalance) => {
   let productTobePurchase: IProductPurchase = {
      productId: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image,
   }
   return async (dispatch: any) => {
      dispatch(addProductRequest())
      await api
         .post('/purchasedproducts', productTobePurchase)
         .then((response) => dispatch(addProductSuccess(response?.data)))
         .catch((error) => dispatch(addProductFailure(error)))

      await dispatch(decrementProductQuantity(product.id, product.quantity - 1))
      await dispatch(debitBalance(balance.amount - product.price))
   }
}

export const removeProduct = (purchaseProduct: IProductPurchaseProduct) => {
   return async (dispatch: any) => {
      dispatch(removeProductRequest())
      await api.delete(`/purchasedproducts/${purchaseProduct.id}`)
         .then((response) => dispatch(removeProductSuccess(purchaseProduct)))
         .catch((error) => dispatch(removeProductFailure(error)))

      await dispatch(incrementProductQuantity(purchaseProduct.productId, purchaseProduct.quantity))
      await dispatch(creditBalance(purchaseProduct.price))
   }
}
