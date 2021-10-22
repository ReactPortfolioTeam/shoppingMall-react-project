import { DaeHwanStyle } from 'assets/css/global/DaeHwan.style';
import * as React from 'react';
import styled from 'styled-components';

interface IAppProps {}

const AccountOrders: React.FC<IAppProps> = (props) => {
    return (
        <AccountOrdersStyle>
            <DaeHwanStyle id="account-orders" className="account-section">
                <div className="account-section-row">
                    <div className="account-section-title">
                        <h3 className="h4 section-title">Orders</h3>
                        <span className="h5 text-light-grey">0 total</span>
                    </div>
                    <div id="past-orders" className="account-section-content">
                        <div className="account-empty-text">
                            <p>
                                Once you&apos;ve placed an order, you&apos;ll
                                find order details here.
                            </p>
                        </div>
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
