import { atom } from 'recoil';

export const Category = atom({
    key: 'Category',
    default: [
        {
            category_id: 1,
            category: 'Bottoms',
        },
        {
            category_id: 2,
            category: 'Shirts',
        },
        {
            category_id: 3,
            category: 'Outerwear',
        },
        {
            category_id: 4,
            category: 'Footwear',
        },
        {
            category_id: 5,
            category: 'Accessories',
        },
    ],
});
