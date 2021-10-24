import { atom } from 'recoil';

export const Carts = atom({
    key: 'Carts',
    default: [
        {
            optionid: '0001',
            quantity: 1,
        },
        {
            optionid: '0002',
            quantity: 2,
        },
        {
            optionid: '0003',
            quantity: 1,
        },
        {
            optionid: '0004',
            quantity: 3,
        },
        {
            optionid: '0005',
            quantity: 2,
        },
        {
            optionid: '0006',
            quantity: 1,
        },
    ],
});
