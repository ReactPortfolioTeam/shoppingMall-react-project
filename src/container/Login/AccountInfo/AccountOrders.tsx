import { API } from 'api/API';
import { DaeHwanStyle } from 'assets/css/global/DaeHwan.style';
import * as React from 'react';
import { useRecoilValue } from 'recoil';
import OrderId from 'state/atom/orderInfo/OrderId';
import User from 'state/atom/User';
import styled from 'styled-components';
import AccountOrderContent from './AccountOrderContent';

interface IAppProps {}
interface orderInfoObject {
    order_date?: string;
    order_id?: number;
    order_price?: number;
    order_state?: string;
    phone_number?: string;
    shipment_address?: string;
    userid?: string;
}
interface orderProductObject {
    product_id?: number;
    order_id?: number;
    quantity?: number;
}
const AccountOrders: React.FC<IAppProps> = (props) => {
    const { orderId } = useRecoilValue(OrderId); // LocalStorage 작업 필요
    const { userid } = useRecoilValue(User);
    const orderInfoInitObject: orderInfoObject = {
        order_date: undefined,
        order_id: undefined,
        order_price: 0,
        order_state: '',
        phone_number: '',
        shipment_address: '',
        userid: '',
    };
    const [orderInfo, setOrderInfo] = React.useState<orderInfoObject>(
        orderInfoInitObject
    );
    const orderProductInitObject: orderProductObject = {
        product_id: undefined,
        order_id: undefined,
        quantity: 0,
    };

    const [orderProduct, setOrderProduct] = React.useState<
        orderProductObject[]
    >([orderProductInitObject]);

    const getOrderData = async () => {
        if (orderId) {
            await API.get(`order/${userid}/${orderId}`).then((res: any) => {
                const { data } = res;
                setOrderInfo({
                    ...orderInfo,
                    ...data.orderInfo,
                });
                setOrderProduct(data.orderProduct);
            });
        }
    };
    React.useEffect(() => {
        getOrderData();
    }, [OrderId]);
    // console.log(orderInfo);
    // console.log(orderProduct);
    return (
        <AccountOrdersStyle>
            <DaeHwanStyle id="account-orders" className="account-section">
                <div className="account-section-row">
                    <div className="account-section-title">
                        <h3 className="h4 section-title">Orders</h3>
                        <span className="h5 text-light-grey">0 total</span>
                    </div>
                    <div id="past-orders" className="account-section-content">
                        {orderId ? (
                            // <div className="account-order-text">
                            //     <h2>주문 정보</h2>
                            //     <p>
                            //         주문날짜:
                            //         {orderInfo.order_date}
                            //     </p>
                            //     <p>주문번호: {orderProduct[0].order_id}</p>
                            //     <p>결제금액: ${orderInfo.order_price}</p>
                            //     <p>배송지: {orderInfo.shipment_address}</p>
                            //     <p>주문상태: {orderInfo.order_state}</p>
                            // </div>
                            <AccountOrderContent
                                orderProduct={orderProduct}
                                orderInfo={orderInfo}
                            />
                        ) : (
                            <div className="account-empty-text">
                                <p>
                                    Once you&apos;ve placed an order,
                                    you&apos;ll find order details here.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </DaeHwanStyle>
        </AccountOrdersStyle>
    );
};

const AccountOrdersStyle = styled.div`
    .account-section-row {
        margin-left: -1.4285714286rem;
        margin-right: -1.4285714286rem;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        .account-section-title {
            padding-left: 1.4285714286rem;
            padding-right: 1.4285714286rem;
            width: 13.5714285714rem;
            flex: 0 0 13.5714285714rem;
            & > span {
                color: #666;
            }
        }
        .account-section-content {
            padding-left: 1.4285714286rem;
            padding-right: 1.4285714286rem;
            margin-top: 0;
            flex: 1 1 auto;
            .account-empty-text {
                text-align: center;
                padding-right: 6.7857142857rem;
                & > p {
                    max-width: 15.7142857143rem;
                    color: #666;
                    margin: 0 auto;
                }
            }
        }
    }
`;

export default AccountOrders;
