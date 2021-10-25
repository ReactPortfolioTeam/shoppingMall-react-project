import { atom } from 'recoil';

export const Carts = atom({
    key: 'Carts',
    default: [
        {
            product_option_id: '0001',
            quantity: 1,
        },
        {
            product_option_id: '0002',
            quantity: 2,
        },
        {
            product_option_id: '0003',
            quantity: 1,
        },
        {
            product_option_id: '0004',
            quantity: 3,
        },
        {
            product_option_id: '0005',
            quantity: 2,
        },
        {
            product_option_id: '0006',
            quantity: 1,
        },
    ],
});
