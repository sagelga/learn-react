export interface ShoppingCartItem {
    id: string
    name: string
    price: number
    amount?: number
    description?: string
}

export interface MenuItem {
    id: string
    name: string
    price: number
    description: string
}

export interface ICart {
    shoppingCart: ShoppingCartItem[]
}
