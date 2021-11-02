import { atom } from 'recoil';

export interface ProductInformationItem {
    product_option_id: number;
    product_id: number;
    size: string;
    stock: number;
}

export const ProductInformation = atom<ProductInformationItem[]>({
    key: 'ProductInformation',
    default: [
        {
            product_option_id: 1,
            product_id: 1,
            size: 'S',
            stock: 0,
        },
        {
            product_option_id: 2,
            product_id: 1,
            size: 'M',
            stock: 5,
        },
        {
            product_option_id: 3,
            product_id: 1,
            size: 'L',
            stock: 5,
        },
        {
            product_option_id: 4,
            product_id: 1,
            size: 'XL',
            stock: 5,
        },
        {
            product_option_id: 5,
            product_id: 1,
            size: '2X',
            stock: 5,
        },
        {
            product_option_id: 6,
            product_id: 2,
            size: 'S',
            stock: 5,
        },
        {
            product_option_id: 7,
            product_id: 2,
            size: 'M',
            stock: 5,
        },
        {
            product_option_id: 8,
            product_id: 2,
            size: 'L',
            stock: 5,
        },
        {
            product_option_id: 9,
            product_id: 2,
            size: 'XL',
            stock: 5,
        },
        {
            product_option_id: 10,
            product_id: 2,
            size: '2X',
            stock: 5,
        },
        {
            product_option_id: 11,
            product_id: 3,
            size: 'S',
            stock: 5,
        },
        {
            product_option_id: 12,
            product_id: 3,
            size: 'M',
            stock: 5,
        },
        {
            product_option_id: 13,
            product_id: 3,
            size: 'L',
            stock: 5,
        },
        {
            product_option_id: 14,
            product_id: 3,
            size: 'XL',
            stock: 5,
        },
        {
            product_option_id: 15,
            product_id: 3,
            size: '2X',
            stock: 5,
        },
        {
            product_option_id: 16,
            product_id: 4,
            size: 'S',
            stock: 5,
        },
        {
            product_option_id: 17,
            product_id: 4,
            size: 'M',
            stock: 5,
        },
        {
            product_option_id: 18,
            product_id: 4,
            size: 'L',
            stock: 5,
        },
        {
            product_option_id: 19,
            product_id: 4,
            size: 'XL',
            stock: 5,
        },
        {
            product_option_id: 20,
            product_id: 4,
            size: '2X',
            stock: 5,
        },
        {
            product_option_id: 21,
            product_id: 5,
            size: 'S',
            stock: 5,
        },
        {
            product_option_id: 22,
            product_id: 5,
            size: 'M',
            stock: 5,
        },
        {
            product_option_id: 23,
            product_id: 5,
            size: 'L',
            stock: 5,
        },
        {
            product_option_id: 24,
            product_id: 5,
            size: 'XL',
            stock: 5,
        },
        {
            product_option_id: 25,
            product_id: 5,
            size: '2X',
            stock: 5,
        },
        {
            product_option_id: 26,
            product_id: 6,
            size: 'S',
            stock: 5,
        },
        {
            product_option_id: 27,
            product_id: 6,
            size: 'M',
            stock: 5,
        },
        {
            product_option_id: 28,
            product_id: 6,
            size: 'L',
            stock: 5,
        },
        {
            product_option_id: 29,
            product_id: 6,
            size: 'XL',
            stock: 5,
        },
        {
            product_option_id: 30,
            product_id: 6,
            size: '2X',
            stock: 5,
        },
        {
            product_option_id: 31,
            product_id: 7,
            size: 'S',
            stock: 5,
        },
        {
            product_option_id: 32,
            product_id: 7,
            size: 'M',
            stock: 5,
        },
        {
            product_option_id: 33,
            product_id: 7,
            size: 'L',
            stock: 5,
        },
        {
            product_option_id: 34,
            product_id: 7,
            size: 'XL',
            stock: 5,
        },
        {
            product_option_id: 35,
            product_id: 7,
            size: '2X',
            stock: 5,
        },
        {
            product_option_id: 36,
            product_id: 8,
            size: 'S',
            stock: 5,
        },
        {
            product_option_id: 37,
            product_id: 8,
            size: 'M',
            stock: 5,
        },
        {
            product_option_id: 38,
            product_id: 8,
            size: 'L',
            stock: 5,
        },
        {
            product_option_id: 39,
            product_id: 8,
            size: 'XL',
            stock: 5,
        },
        {
            product_option_id: 40,
            product_id: 8,
            size: '2X',
            stock: 5,
        },
        {
            product_option_id: 41,
            product_id: 9,
            size: 'S',
            stock: 5,
        },
        {
            product_option_id: 42,
            product_id: 9,
            size: 'M',
            stock: 5,
        },
        {
            product_option_id: 43,
            product_id: 9,
            size: 'L',
            stock: 5,
        },
        {
            product_option_id: 44,
            product_id: 9,
            size: 'XL',
            stock: 5,
        },
        {
            product_option_id: 45,
            product_id: 9,
            size: '2X',
            stock: 5,
        },
        {
            product_option_id: 46,
            product_id: 10,
            size: 'S',
            stock: 5,
        },
        {
            product_option_id: 47,
            product_id: 10,
            size: 'M',
            stock: 5,
        },
        {
            product_option_id: 48,
            product_id: 10,
            size: 'L',
            stock: 5,
        },
        {
            product_option_id: 49,
            product_id: 10,
            size: 'XL',
            stock: 5,
        },
        {
            product_option_id: 50,
            product_id: 10,
            size: '2X',
            stock: 5,
        },
    ],
});
