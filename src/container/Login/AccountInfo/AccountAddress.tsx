import { DaeHwanStyle } from 'assets/css/global/DaeHwan.style';
import * as React from 'react';
import styled from 'styled-components';

interface IAppProps {}

const AccountAddress: React.FunctionComponent<IAppProps> = (props) => {
    return (
        <AccountAddressStyle>
            <DaeHwanStyle id="account-addresses" className="account-section">
                <div className="account-section-row">
                    <div className="account-section-title">
                        <h3 className="h4 section-title">Address book</h3>
                        <span className="h5 text-light-grey">0 addresses</span>
                    </div>
                    <div className="addresses-wrap account-section-content with-right-padding">
                        <div className="account-empty-text">
                            <p>
                                translation missing:
                                en.customers.account.addresses.empty
                                <br />
                                <br />
                                <a
                                    className="text-link-demi no-ajax"
                                    href="/account/addresses"
                                >
                                    translation missing:
                                    en.customers.account.addresses.add
                                    <span className="inline-icon">
                                        <svg viewBox="0 0 14 14">
                                            <path
                                                d="M11.815 6.527L9.182 3.894l.707-.707 3.89 3.89-3.89 3.888-.707-.707 2.731-2.73H0v-1h11.815z"
                                                fill="#000"
                                                fillRule="nonzero"
                                            ></path>
                                        </svg>
                                    </span>
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </DaeHwanStyle>
        </AccountAddressStyle>
    );
};

const AccountAddressStyle = styled.div`
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
        .addresses-wrap.account-section-content.with-right-padding {
            padding-left: 1.4285714286rem;
            padding-right: 1.4285714286rem;
            margin-top: 0;
            flex: 1 1 auto;
            margin-right: 6.7857142857rem;
            .account-empty-text {
                text-align: center;
                padding-right: 0;
                & > p {
                    max-width: 15.7142857143rem;
                    color: #666;
                    margin: 0 auto;
                    & > a {
                        position: relative;
                        text-decoration: none;
                        color: #666;
                        font-weight: 500;
                        line-height: 1.4285714286rem;
                        .inline-icon {
                            vertical-align: middle;
                            fill: inherit;
                            & > svg {
                                display: inline-block;
                                height: 1em;
                                width: auto;
                                max-width: 100%;
                            }
                        }
                    }
                }
            }
        }
    }
`;

export default AccountAddress;
