import { useRecoilState, useRecoilValue } from 'recoil';
import Cart, { CartItem } from 'state/atom/Cart';
import {
    ProductInformation,
    ProductInformationItem,
} from 'state/atom/dummy/ProductInformation';
import { ProductsType } from 'state/atom/dummy/Products';

const AddCartItem = (
    item: ProductsType,
    selectItem: string,
    productInformation: ProductInformationItem[],
    cart: CartItem[],
    setCart: any
) => {
    const productInfoFilterArray = productInformation.filter(
        (filterItem) => filterItem.product_id === item.product_id
    );
    const ProductOptionId = productInfoFilterArray.find(
        (item) => item.size === selectItem
    )?.product_option_id;

    const equalItem = cart.find(
        (item) => item.product_option_id === ProductOptionId
    );

    if (!equalItem) {
        setCart([
            ...cart,
            {
                product_option_id: ProductOptionId,
                quantity: 1,
            },
        ]);
    } else {
        // 똑같은 값이 존재하는 경우
        const result = cart.map((item) => {
            const arrayResult =
                item.product_option_id === ProductOptionId
                    ? {
                          product_option_id: ProductOptionId,
                          quantity: item.quantity! + 1,
                      }
                    : item;

            return arrayResult;
        });
        setCart(result);
    }
};

export default AddCartItem;
