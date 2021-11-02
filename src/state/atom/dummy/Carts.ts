import { atom } from 'recoil';

export const Carts = atom({
    key: 'Carts',
    default: [
        {
            product_option_id: 1,
            quantity: 1,
        },
        {
            product_option_id: 2,
            quantity: 2,
        },
        {
            product_option_id: 3,
            quantity: 1,
        },
        {
            product_option_id: 4,
            quantity: 3,
        },
        {
            product_option_id: 5,
            quantity: 2,
        },
        {
            product_option_id: 6,
            quantity: 1,
        },
    ],
});
