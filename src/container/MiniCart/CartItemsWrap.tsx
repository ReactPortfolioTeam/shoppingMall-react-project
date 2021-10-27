import * as React from 'react';
import { useRecoilValue } from 'recoil';
import { Carts } from 'state/atom/dummy/Carts';
import { ProductInformation } from 'state/atom/dummy/ProductInformation';
import { Products } from 'state/atom/dummy/Products';
import CartItem from './CartItem';

interface IAppProps {}
// type CartList = {
//     product_id?: string;
//     product_option_id?: number;
//     product_name?: string;
//     sub_product_name?: string;
//     price?: number;
//     product_image?: string;
//     quantity?: number;
//     size?: string;
// };

const CartItemsWrap: React.FunctionComponent<IAppProps> = (props) => {
    const carts = useRecoilValue(Carts);
    const productInfo = useRecoilValue(ProductInformation);
    const products = useRecoilValue(Products);
    const initialCartList = [
        {
            product_id: products[0].product_id,
            product_option_id: productInfo.filter(
                (info) => info.product_id === products[0].product_id
            )[2].product_option_id,
            product_name:
                products[
                    products.findIndex(
                        (info) => info.product_id === products[0].product_id
                    )
                ].product_name,
            sub_product_name:
                products[
                    products.findIndex(
                        (info) => info.product_id === products[0].product_id
                    )
                ].sub_product_name,
            price:
                products[
                    products.findIndex(
                        (info) => info.product_id === products[0].product_id
                    )
                ].price,
            product_image:
                products[
                    products.findIndex(
                        (info) => info.product_id === products[0].product_id
                    )
                ].product_image[0],
            quantity: carts.findIndex(
                (info) =>
                    info.product_option_id ===
                    productInfo.filter(
                        (info) => info.product_id === products[0].product_id
                    )[2].product_option_id
            ),
            size: productInfo.filter(
                (info) => info.product_id === products[0].product_id
            )[2].size,
            id: 1,
        },
        {
            product_id: products[3].product_id,
            product_option_id: productInfo.filter(
                (info) => info.product_id === products[3].product_id
            )[1].product_option_id,
            product_name:
                products[
                    products.findIndex(
                        (info) => info.product_id === products[3].product_id
                    )
                ].product_name,
            sub_product_name:
                products[
                    products.findIndex(
                        (info) => info.product_id === products[3].product_id
                    )
                ].sub_product_name,
            price:
                products[
                    products.findIndex(
                        (info) => info.product_id === products[3].product_id
                    )
                ].price,
            product_image:
                products[
                    products.findIndex(
                        (info) => info.product_id === products[3].product_id
                    )
                ].product_image[0],
            quantity: carts.findIndex(
                (info) =>
                    info.product_option_id ===
                    productInfo.filter(
                        (info) => info.product_id === products[3].product_id
                    )[1].product_option_id
            ),
            size: productInfo.filter(
                (info) => info.product_id === products[3].product_id
            )[1].size,
            id: 2,
        },
        {
            product_id: products[8].product_id,
            product_option_id: productInfo.filter(
                (info) => info.product_id === products[8].product_id
            )[3].product_option_id,
            product_name:
                products[
                    products.findIndex(
                        (info) => info.product_id === products[8].product_id
                    )
                ].product_name,
            sub_product_name:
                products[
                    products.findIndex(
                        (info) => info.product_id === products[8].product_id
                    )
                ].sub_product_name,
            price:
                products[
                    products.findIndex(
                        (info) => info.product_id === products[8].product_id
                    )
                ].price,
            product_image:
                products[
                    products.findIndex(
                        (info) => info.product_id === products[8].product_id
                    )
                ].product_image[0],
            quantity: carts.findIndex(
                (info) =>
                    info.product_option_id ===
                    productInfo.filter(
                        (info) => info.product_id === products[8].product_id
                    )[3].product_option_id
            ),
            size: productInfo.filter(
                (info) => info.product_id === products[8].product_id
            )[3].size,
            id: 3,
        },
    ];
    const [cartList, setCartList] = React.useState(initialCartList);
    const onRemove = React.useCallback(
        (id: number) => setCartList(cartList.filter((item) => item.id !== id)),
        [initialCartList]
    );
    // const [selectedCartList, setSelectedCartList] = React.useState<CartList[]>(
    //     []
    // );
    // const InsertSelectedList = (
    //     poduct_option_id: number,
    //     product_id: string
    // ) => {
    //     const selectedProduct = products.find(
    //         (product) => product.product_id === product_id
    //     );
    //     const selectedProductInfo = productInfo.find(
    //         (product) => product.product_option_id === poduct_option_id
    //     );
    //     const selectedCart = carts.find(
    //         (cart) => cart.product_option_id === poduct_option_id
    //     );
    //     const selectedCartItem = {
    //         product_id: selectedProduct?.product_id,
    //         product_option_id: selectedProductInfo?.product_option_id,
    //         product_name: selectedProduct?.product_name,
    //         sub_product_name: selectedProduct?.sub_product_name,
    //         price: selectedProduct?.price,
    //         product_image: selectedProduct?.product_image[0],
    //         quantity: selectedCart?.quantity,
    //         size: selectedProductInfo?.size,
    //     };
    //     setSelectedCartList(selectedCartList.concat(selectedCartItem));
    // };
    // React.useEffect(() => console.log(selectedCartList), [selectedCartList]);

    // React.useEffect(() => InsertSelectedList(1, '0001'), []);
    // console.log(selectedCartList);
    return (
        <div className="cart-items-wrap">
            <div className="cart-items js-cart-items">
                {cartList.map((cartItem) => (
                    <CartItem
                        product_id={cartItem.product_id}
                        product_option_id={cartItem.product_option_id}
                        product_name={cartItem.product_name}
                        sub_product_name={cartItem.sub_product_name}
                        price={cartItem.price}
                        product_image={cartItem.product_image}
                        quantity={cartItem.quantity}
                        size={cartItem.size}
                        onRemove={onRemove}
                        id={cartItem.id}
                    />
                ))}
            </div>
        </div>
    );
};

export default CartItemsWrap;
