interface IProduct {
   name: string
   price: number
   quantity: number
   image: any
   id: number
}
type ProductState = {
   products: IProduct[]
   isProductFetching: boolean
   isProductFetchSuccess: boolean
   isProductFetchError: boolean
   productFetchErrorMessage: string
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
   balanceFetchErrorMessage: string
   isBalanceAddLoading: boolean
   isBalanceAddSuccess: boolean
   isBalanceAddError: boolean
   balanceAddErrorMessage: string
}

type BalanceAction = {
   type: string
   payload: BalanceState
}

interface IpurchasedProducts {
   purchasedProducts: IProduct
}

type PurchasedProductsState = {
   purchasedProducts: IpurchasedProducts[]
   isPurchasedProductsFetching: boolean
   isPurchasedProductsFetchSuccess: boolean
   isPurchasedProductsFetchError: boolean
   purchasedProductsFetchErrorMessage: string
   isAddPurchasedProductLoading: boolean
   isAddPurchasedProductSuccess: boolean
   isAddPurchasedProductError: boolean
   purchasedProductsAddErrorMessage: string
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