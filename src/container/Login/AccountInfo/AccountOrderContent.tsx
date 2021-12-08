import * as React from 'react';
import { useHistory } from 'react-router';
import { useRecoilValue } from 'recoil';
import { Products } from 'state/atom/dummy/Products';
import styled from 'styled-components';

interface AccountOrderContentProps {
    orderProduct: {
        product_id?: number;
        order_id?: number;
        quantity?: number;
    }[];
    orderInfo: {
        order_date?: string;
        order_id?: number;
        order_price?: number;
        order_state?: string;
        phone_number?: string;
        shipment_address?: string;
        userid?: string;
    };
}

type ResultList = {
    product_id?: number;
    product_name?: string;
    product_sub_name?: string;
    price?: number;
    product_image?: string;
    quantity?: number;
};

const AccountOrderContent: React.FunctionComponent<AccountOrderContentProps> = ({
    orderProduct,
    orderInfo,
}) => {
    console.log(orderInfo);
    console.log(orderProduct);
    const products = useRecoilValue(Products);
    const productInfoList: ResultList[] = orderProduct.map((product) => {
        const resultProduct = products.find(
            (index) => index.product_id === product.product_id
        );
        const result: ResultList = {
            product_id: resultProduct?.product_id,
            product_name: resultProduct?.product_name,
            product_sub_name: resultProduct?.sub_product_name,
            price: resultProduct?.price,
            product_image: resultProduct?.product_image[0],
            quantity: product.quantity,
        };
        return result;
    });
    console.log(productInfoList);
    const history = useHistory();
    const handleClick = (product_id: number) => {
        history.push(`/shop/product/${product_id}`);
    };
    return (
        <AccountOrderContentStyle>
            <table className="tg">
                <tbody>
                    <tr>
                        <th className="tg-0lax">주문번호</th>
                        <td className="tg-0lax">{orderInfo.order_id}</td>
                    </tr>
                    <tr>
                        <th className="tg-0lax">주문날짜</th>
                        <td className="tg-0lax">{orderInfo.order_date}</td>
                    </tr>
                    <tr>
                        <th className="tg-0lax">배송지</th>
                        <td className="tg-0lax">
                            {orderInfo.shipment_address}
                        </td>
                    </tr>
                    <tr>
                        <th className="tg-0lax">결제금액</th>
                        <td className="tg-0lax">${orderInfo.order_price}</td>
                    </tr>
                    <tr>
                        <th className="tg-0lax">주문상태</th>
                        <td className="tg-0lax">{orderInfo.order_state}</td>
                    </tr>
                </tbody>
            </table>
            {orderInfo.order_state === 'pending' && (
                <div className="pay-alert">
                    <strong>결제 대기중 상태입니다.</strong>
                    <p>
                        무통장입금으로 결제가 진행되며 아래 입금계좌로 결제금액
                        송금시 확인 후 주문 완료 처리가 됩니다.
                    </p>
                    <p>국민은행 xxx-xxxxx-xxxx</p>
                </div>
            )}
            {productInfoList.map((item) => (
                <div className="product-data">
                    <div className="inner landscape-image-wrap">
                        <button
                            type="button"
                            className="lazy js-lazy image-landscape"
                            onClick={() => handleClick(item.product_id!)}
                        >
                            <img
                                className="lazy-img lazyload lazy-preload lazyautosizes lazy-loaded"
                                src={item.product_image}
                                width="100"
                                height="66"
                                alt={item.product_name}
                                sizes="86px"
                            />
                            <span
                                className="product-thumbnail__purchase_quantity"
                                aria-hidden="true"
                            >
                                {item.quantity}
                            </span>
                        </button>
                    </div>
                    <div className="inner title-and-options">
                        <span className="h4 product-title">
                            <span className="title">{item.product_name}</span>
                            <span className="title-sub">
                                {item.product_sub_name}
                            </span>
                        </span>
                        <span className="h5 item-options" />
                    </div>
                    <div className="inner price">
                        <span className="h6 item-price">${item.price}</span>
                    </div>
                </div>
            ))}
        </AccountOrderContentStyle>
    );
};
const AccountOrderContentStyle = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .tg {
        border-collapse: collapse;
        border-spacing: 0;
        min-width: 40vw;
        width: 50%;
        .tg-0lax {
            text-align: left;
            vertical-align: top;
        }
        td {
            border-bottom: 1px solid ${(props) => props.theme.colors.lightGray};
            font-size: 16px;

            overflow: hidden;
            padding: ${(props) => props.theme.paddings.p20}
                ${(props) => props.theme.paddings.p10};
            word-break: normal;
        }
        th {
            border-bottom: 1px solid ${(props) => props.theme.colors.lightGray};
            font-size: 16px;
            font-weight: bolder;
            overflow: hidden;
            padding: ${(props) => props.theme.paddings.p20}
                ${(props) => props.theme.paddings.p10};
            word-break: normal;
        }
    }
    .pay-alert {
        text-align: center;
        margin: ${(props) => props.theme.margins.m40}
            ${(props) => props.theme.margins.m10};
        font-size: ${(props) => props.theme.fonts.size.fs16};
        > strong {
            font-size: ${(props) => props.theme.fonts.size.fs18};
            font-weight: bolder;
            color: ${(props) => props.theme.colors.darkRed};
        }
        > p {
            margin: ${(props) => props.theme.margins.m10};
        }
    }

    .product-data {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        background-color: #f2e6d9;
        border-radius: 4px;
        min-width: 40vw;
        width: 70%;
        margin-bottom: ${(props) => props.theme.margins.m10};
        padding: ${(props) => props.theme.paddings.p20}
            ${(props) => props.theme.paddings.p10};

        &:nth-child(odd) {
            background-color: ${(props) => props.theme.colors.gold};
        }
        .inner {
            &.landscape-image-wrap {
                position: relative;
                .lazy {
                    &.image-landscape {
                        background: none;
                        color: inherit;
                        border: none;
                        padding: 0;
                        font: inherit;
                        cursor: pointer;
                        outline: inherit;
                    }
                }
                .product-thumbnail__purchase_quantity {
                    font-size: 0.8571428571em;
                    font-weight: 400;
                    line-height: 1.75em;
                    white-space: nowrap;
                    text-align: center;
                    border-radius: 1.75em;
                    background-color: #585656;
                    color: #fff;
                    box-sizing: border-box;
                    min-width: 1.75em;
                    height: 1.75em;
                    padding: 0 0.5833333333em;
                    position: absolute;
                    left: 0.15rem;
                    top: 0.15rem;
                    z-index: 3;
                }
            }
            &.title-and-options {
                .product-title {
                    display: flex;
                    flex-direction: column;
                    align-content: center;
                    line-height: 20px;
                    font-size: ${(props) => props.theme.fonts.size.fs18};
                    .title-sub {
                        font-size: ${(props) => props.theme.fonts.size.fs16};
                    }
                    & > span {
                        padding: ${(props) => props.theme.paddings.p1};
                    }
                }
            }
            &.price {
                font-size: ${(props) => props.theme.fonts.size.fs16};
                padding-right: ${(props) => props.theme.paddings.p10};
            }
        }
    }
`;

export default AccountOrderContent;
