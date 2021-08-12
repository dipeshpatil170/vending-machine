interface IProduct {
  name: string
  price: number
  quantity: number
  image: any
  id: number
}
type ProductState = {
  isLoading: boolean
  products: IProduct[]
}
type ProductAction = {
  type: string
  payload: ProductState
}
