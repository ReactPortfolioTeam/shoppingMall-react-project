import Input from 'component/Input/Input';
import * as React from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import Cart from 'state/atom/Cart';
import { ProductInformation } from 'state/atom/dummy/ProductInformation';
import { Products } from 'state/atom/dummy/Products';
import styled from 'styled-components';

interface CheckoutSidebarProps {}

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

const CheckoutSidebar: React.FC<CheckoutSidebarProps> = (
    props: CheckoutSidebarProps
) => {
    const cart = useRecoilValue(Cart);
    const productInfo = useRecoilValue(ProductInformation);
    const products = useRecoilValue(Products);
    const selectedList: CartList[] = cart.map((item) => {
        const resultInfo = productInfo.find(
            (index) => index.product_option_id === item.product_option_id
        );
        const resultProduct = products.find(
            (index) => index.product_id === resultInfo?.product_id
        );
        const result: CartList = {
            product_id: resultProduct?.product_id,
            product_option_id: resultInfo?.product_option_id,
            product_name: resultProduct?.product_name,
            sub_product_name: resultProduct?.sub_product_name,
            price: resultProduct?.price,
            product_image: resultProduct?.product_image[0],
            quantity: item.quantity,
            size: resultInfo?.size,
            id: resultInfo?.product_option_id,
        };
        return result;
    });
    const [cartList, setCartList] = React.useState<CartList[]>(selectedList);
    const TotoalPrice = React.useMemo(
        () =>
            cartList.reduce(
                (acc, curr) => acc + curr.price! * curr.quantity!,
                0
            ),
        [cart]
    );
    const location = useLocation();
    const isPayment = location.pathname === '/checkout/payment';
    const shippingPrice = () => {
        if (isPayment) {
            return 25;
        }
        return 0;
    };
    const PaymentTotalPrice = TotoalPrice + shippingPrice();

    return (
        <CheckoutSidebarStyle className="sidebar" role="complementary">
            <div className="order-summary__section order-summary__section--product-list">
                {cartList.map((item) => (
                    <div className="product-list--item">
                        <div className="product-inner--wrapper product-image--wrapper">
                            <Link to={`/shop/product/${item.product_id}`}>
                                <img
                                    src={item.product_image}
                                    alt={item.product_name}
                                    className="product-image"
                                />
                            </Link>
                            <span
                                className="product-thumbnail__purchase_quantity"
                                aria-hidden="true"
                            >
                                {item.quantity}
                            </span>
                        </div>
                        <div className="product-inner--wrapper product-description--wrapper">
                            <p>
                                {item.product_name} &nbsp; ~ &nbsp;
                                {item.sub_product_name}
                                <br />
                                {item.size}
                            </p>
                        </div>
                        <div className="product-inner--wrapper product-price--wrapper">
                            <span>${item.price}</span>
                        </div>
                    </div>
                ))}
            </div>
            <div className="order-summary__section order-summary__section--sub-total-lines">
                <div
                    className="total--wrapper sub-total-price"
                    id="sub-total-price"
                >
                    <span>Subtotal</span>
                    <span>${TotoalPrice}</span>
                </div>
                <div className="total--wrapper sub-shipping-price">
                    <span>Shipping</span>
                    {location.pathname === '/checkout/payment' ? (
                        <span>${shippingPrice()}</span>
                    ) : (
                        <span>Calculated at next step</span>
                    )}
                </div>
            </div>
            <div className="order-summary__section order-summary__section--total-lines">
                <div className="total--wrapper total-price">
                    <span>Total</span>
                    <span>${PaymentTotalPrice}</span>
                </div>
            </div>
        </CheckoutSidebarStyle>
    );
};
const CheckoutSidebarStyle = styled.aside`
    padding: ${(props) => props.theme.paddings.p20};
    display: flex;
    position: relative;
    width: 100%;
    height: calc(100vh - 8em);
    flex-direction: column;
    align-items: center;
    .order-summary__section {
        border-bottom: 1px solid ${(props) => props.theme.colors.lightGray};
        padding: ${(props) => props.theme.paddings.p40} 0;
        display: flex;
        position: relative;
        flex-direction: column;
        &:last-child {
            border-bottom: none;
        }

        &.order-summary__section--product-list {
            width: 100%;
            max-height: calc(100vh - 30em);
            overflow-y: auto;
            & > .product-list--item {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                height: 4.375rem;
                .product-inner--wrapper {
                    margin-right: ${(props) => props.theme.margins.m20};
                    &.product-description--wrapper {
                        font-size: ${(props) => props.theme.fonts.size.fs12};
                        line-height: 1.875rem;
                        width: 50%;
                        & > p {
                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;
                        }
                    }
                    &.product-price--wrapper {
                        line-height: 3.75rem;
                    }
                    &:last-child {
                        margin-right: 0;
                        margin-left: ${(props) => props.theme.margins.m40};
                    }
                }
                .product-image--wrapper {
                    position: relative;
                    width: auto;
                    & > .product-thumbnail__purchase_quantity {
                        font-size: 0.8571428571em;
                        font-weight: 500;
                        line-height: 1.75em;
                        white-space: nowrap;
                        text-align: center;
                        border-radius: 1.75em;
                        background-color: rgba(114, 114, 114, 0.75);
                        color: #fff;
                        box-sizing: border-box;
                        min-width: 1.75em;
                        height: 1.75em;
                        padding: 0 0.5833333333em;
                        position: absolute;
                        right: -0.75em;
                        top: -0.75em;
                        z-index: 3;
                    }
                    .product-image {
                        border: 0.5px solid
                            ${(props) => props.theme.colors.lightGray};
                        border-radius: 4px;
                        width: 4.375rem;
                        height: 3.75rem;
                        object-fit: cover;
                    }
                }
            }
        }
        & > .total--wrapper {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
        &.order-summary__section--sub-total-lines {
            height: 18%;
            justify-content: space-between;
            width: 100%;
        }
        &.order-summary__section--total-lines {
            height: 14%;
            justify-content: space-between;
            width: 100%;
        }
    }
`;
export default CheckoutSidebar;
