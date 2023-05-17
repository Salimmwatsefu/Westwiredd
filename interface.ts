export interface Product {
    id: number;
    title: string;
    image: string;
    price: number;
}

export interface CartItem {
    product: Product;
    qty: number;
}