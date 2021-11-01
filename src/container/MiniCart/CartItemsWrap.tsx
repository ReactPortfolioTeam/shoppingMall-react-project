import * as React from 'react';
import { useRecoilValue } from 'recoil';
import Cart from 'state/atom/Cart';
import { Carts } from 'state/atom/dummy/Carts';
import { ProductInformation } from 'state/atom/dummy/ProductInformation';
import { Products } from 'state/atom/dummy/Products';
import CartItem from './CartItem';

interface IAppProps {}
type CartList = {
    product_id?: number;
    product_option_id?: number;
    product_name?: string;
    sub_product_name?: string;
    price?: number;
    product_image?: string;
    quantity?: number;
    size?: string;
    id?: number;
};

const CartItemsWrap: React.FunctionComponent<IAppProps> = (props) => {
    const cart = useRecoilValue(Cart);
    const productInfo = useRecoilValue(ProductInformation);
    const products = useRecoilValue(Products);

    const selectedList: CartList[] = cart.map((item) => ({
        product_id:
            productInfo[
                productInfo.findIndex(
                    (index) =>
                        index.product_option_id === item.product_option_id
                )
            ].product_id,
        product_option_id: item.product_option_id,
        product_name: products.find(
            (index) =>
                index.product_id ===
                productInfo[
                    productInfo.findIndex(
                        (index) =>
                            index.product_option_id === item.product_option_id
                    )
                ].product_id
        )?.product_name,
        sub_product_name: products.find(
            (index) =>
                index.product_id ===
                productInfo[
                    productInfo.findIndex(
                        (index) =>
                            index.product_option_id === item.product_option_id
                    )
                ].product_id
        )?.sub_product_name,
        price: products.find(
            (index) =>
                index.product_id ===
                productInfo[
                    productInfo.findIndex(
                        (index) =>
                            index.product_option_id === item.product_option_id
                    )
                ].product_id
        )?.price,
        product_image: products.find(
            (index) =>
                index.product_id ===
                productInfo[
                    productInfo.findIndex(
                        (index) =>
                            index.product_option_id === item.product_option_id
                    )
                ].product_id
        )?.product_image[0],
        quantity: item.quantity,
        size:
            productInfo[
                productInfo.findIndex(
                    (index) =>
                        index.product_option_id === item.product_option_id
                )
            ].size,
        id: item.product_option_id,
    }));
    const [cartList, setCartList] = React.useState<CartList[]>(selectedList);
    const onRemove = React.useCallback(
        (id: number) => setCartList(cartList?.filter((item) => item.id !== id)),
        [cartList]
    );
    // React.useEffect(() => console.log(cartList), [cartList]);

    return (
        <div className="cart-items-wrap">
            <div className="cart-items js-cart-items">
                {cartList?.map((cartItem) => (
                    <CartItem
                        product_id={cartItem.product_id!}
                        product_option_id={cartItem.product_option_id!}
                        product_name={cartItem.product_name!}
                        sub_product_name={cartItem.sub_product_name!}
                        price={cartItem.price!}
                        product_image={cartItem.product_image!}
                        quantity={cartItem.quantity!}
                        size={cartItem.size!}
                        onRemove={onRemove}
                        id={cartItem.id!}
                    />
                ))}
            </div>
        </div>
    );
};

export default CartItemsWrap;
