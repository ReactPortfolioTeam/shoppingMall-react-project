import * as React from 'react';
import { useRecoilValue } from 'recoil';
import { ProductInformation } from 'state/atom/dummy/ProductInformation';
import { Products } from 'state/atom/dummy/Products';
import styled from 'styled-components';

interface CheckoutSidebarProps {}

const CheckoutSidebar: React.FC<CheckoutSidebarProps> = (
    props: CheckoutSidebarProps
) => {
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

            size: productInfo.filter(
                (info) => info.product_id === products[0].product_id
            )[2].size,
            purchase_quantity: 1,
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

            size: productInfo.filter(
                (info) => info.product_id === products[3].product_id
            )[1].size,
            purchase_quantity: 2,
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

            size: productInfo.filter(
                (info) => info.product_id === products[8].product_id
            )[3].size,
            purchase_quantity: 4,
            id: 3,
        },
    ];
    const TotoalPrice = initialCartList.reduce(
        (acc, curr) => acc + curr.price,
        0
    );
    // React.useEffect(() => console.log(TotoalPrice), []);
    return (
        <CheckoutSidebarStyle className="sidebar" role="complementary">
            <div className="order-summary__section order-summary__section--product-list">
                {initialCartList.map((item) => (
                    <div className="product-list--item">
                        <div className="product-inner--wrapper product-image--wrapper">
                            <img
                                src={item.product_image}
                                alt={item.product_name}
                                className="product-image"
                            />
                            <span
                                className="product-thumbnail__purchase_quantity"
                                aria-hidden="true"
                            >
                                {item.purchase_quantity}
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
                    <span>Calculated at next step</span>
                </div>
            </div>
            <div className="order-summary__section order-summary__section--total-lines">
                <div className="total--wrapper total-price">
                    <span>Total</span>
                    <span>${TotoalPrice}</span>
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
                    & > img {
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
        &.order-summary__section--sub-total-lines {
            height: 18%;
            justify-content: space-between;
            width: 100%;
            .total--wrapper {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
            }
        }
        &.order-summary__section--total-lines {
            height: 14%;
            justify-content: space-between;
            width: 100%;
        }
    }
`;
export default CheckoutSidebar;
