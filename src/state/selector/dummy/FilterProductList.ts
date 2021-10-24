/* eslint-disable no-else-return */
import { selector } from 'recoil';
import { Category } from 'state/atom/dummy/Category';
import { Products } from 'state/atom/dummy/Products';
import { ProductFilter } from '../../atom/dummy/ProductFilter';

export const FilterProductList = selector({
    key: 'FilterProductList',
    get: ({ get }) => {
        const filter: any = get(ProductFilter);
        const category = get(Category);
        const list = get(Products);

        const category_id = category.find(filter)?.category_id;

        if (filter !== 'All') {
            return list.filter((item) => item.category_id === category_id);
        } else {
            return list;
        }
    },
});
