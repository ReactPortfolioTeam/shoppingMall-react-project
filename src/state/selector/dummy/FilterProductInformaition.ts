import { atom, selector } from 'recoil';
import { ProductInformation } from 'state/atom/dummy/ProductInformation';

const ProductId = atom<any>({
    key: 'ProductId',
    default: 0,
});

const FilterProductInformaition = selector({
    key: 'FilterProductInformaition',
    get: ({ get }) => {
        const productId = get(ProductId);
        const productInformation = get(ProductInformation);

        return productInformation.filter(
            (item) => item.product_id === productId
        );
    },
    set: ({ set }, productId) => {
        set(ProductId, productId);
    },
});

export default FilterProductInformaition;
