import { atom } from 'recoil';

export interface CartItem {
    product_option_id?: number;
    quantity?: number;
}

const Cart = atom<CartItem[]>({
    key: 'Cart',
    default: [],
});

export default Cart;
