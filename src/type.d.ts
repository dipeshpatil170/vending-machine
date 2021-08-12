interface IProduct {
   name: string
   price: number
   quantity: number
   image: any
   id: number
}
type ProductState = {
   products: IProduct[]
   product: IProduct
   isProductFetching: boolean
   isProductFetchSuccess: boolean
   isProductFetchError: boolean
   errorProductFetchMessage: string
   isDecrementProductQuantitySuccess: boolean
   isDecrementProductQuantityError: boolean
   errorDecrementProductQuantityMessage: string
}
type ProductAction = {
   type: string
   payload: ProductState
}
interface Ibalance {
   amount: number
}

type BalanceState = {
   balance: Ibalance
   isBalanceFetching: boolean
   isBalanceFetchSuccess: boolean
   isBalanceFetchError: boolean
   errorBalanceFetchMessage: string
   isAddBalanceSuccess: boolean
   isAddBalanceError: boolean
   errorAddBalanceMessage: string
}

type BalanceAction = {
   type: string
   payload: BalanceState
}

interface IpurchasedProducts {
   purchasedProducts: IProduct
}

type PurchasedProductsState = {
   purchasedProducts: IProductPurchaseProduct[]
   isPurchasedProductsFetching: boolean
   isPurchasedProductsFetchSuccess: boolean
   isPurchasedProductsFetchError: boolean
   errorPurchasedProductsFetchMessage: string
   isAddPurchasedProductSuccess: boolean
   isAddPurchasedProductError: boolean
   errorAddPurchasedProductsMessage: string
}

type PurchasedProductsAction = {
   type: string
   payload: PurchasedProductsState
}
interface IProductPurchase {
   name: string
   price: number
   quantity: number
   image: any
}
interface IProductPurchaseProduct {
   id:number
   name: string
   price: number
   quantity: number
   image: any
}
