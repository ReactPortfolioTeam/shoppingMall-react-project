import { atom } from 'recoil';

export const Carts = atom({
    key: 'Carts',
    default: [
        {
            optionid: 1,
            quantity: 1,
        },
        {
            optionid: 2,
            quantity: 2,
        },
        {
            optionid: 3,
            quantity: 1,
        },
        {
            optionid: 4,
            quantity: 3,
        },
        {
            optionid: 5,
            quantity: 2,
        },
        {
            optionid: 6,
            quantity: 1,
        },
    ],
});
