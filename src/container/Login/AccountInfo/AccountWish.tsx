import { FlexBoxDiv } from 'assets/styledComponents/global/globalStyle.style';
import * as React from 'react';
import styled from 'styled-components';
import { DaeHwanStyle } from '../../../assets/css/global/DaeHwan.style';

interface IAppProps {}

const AccountWish: React.FC<IAppProps> = (props) => {
    return (
        <AccountWishStyle>
            <DaeHwanStyle id="account-wishlist" className="account-section">
                <FlexBoxDiv className="account-section-row" flexDirection="row">
                    <div className="account-section-title">
                        <h3 className="h4 section-title">Wish list</h3>
                        <span className="h5 text-light-grey">0 items</span>
                    </div>
                    <div
                        id="wishlist-products"
                        className="account-section-content"
                    >
                        <div className="wishlist-products-inner">
                            <div className="account-empty-text">
                                <p>
                                    Your wishlist is empty.
                                    <br />
                                    <br />
                                    Click the &quot;+ Wishlist&quot; button on
                                    any product to add it to your list.
                                </p>
                            </div>

                            <div className="wishlist-products-row js-main-wishlist-products">
                                <div className="product-card-blank">
                                    <div className="product-images-wrap">
                                        <div className="product-image"></div>
                                    </div>
                                    <div className="product-meta">
                                        <div className="meta-line-1"></div>
                                        <div className="meta-line-2"></div>
                                    </div>
                                </div>

                                <div className="product-card-blank">
                                    <div className="product-images-wrap">
                                        <div className="product-image"></div>
                                    </div>
                                    <div className="product-meta">
                                        <div className="meta-line-1"></div>
                                        <div className="meta-line-2"></div>
                                    </div>
                                </div>

                                <div className="product-card-blank">
                                    <div className="product-images-wrap">
                                        <div className="product-image"></div>
                                    </div>
                                    <div className="product-meta">
                                        <div className="meta-line-1"></div>
                                        <div className="meta-line-2"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="expanded-wishlist-products js-expanded-wishlist-products">
                            <div className="wishlist-products-inner">
                                <div className="wishlist-products-row"></div>
                            </div>
                        </div>
                    </div>
                </FlexBoxDiv>
            </DaeHwanStyle>
        </AccountWishStyle>
    );
};

const AccountWishStyle = styled.div`
    .account-section-row {
        flex-wrap: nowrap;
        margin-left: -1.4285714286rem;
        margin-right: -1.4285714286rem;
    }
    .account-section-title {
        padding-left: 1.4285714286rem;
        padding-right: 1.4285714286rem;
        width: 13.5714285714rem;
        flex: 0 0 13.5714285714rem;
        & > span {
            color: #666;
        }
    }
    #wishlist-products {
        padding-left: 1.4285714286rem;
        padding-right: 1.4285714286rem;
        margin-top: 0;
        flex: 1 1 auto;
        .wishlist-products-inner {
            padding-right: 6.7857142857rem;
            position: relative;
            .account-empty-text {
                text-align: center;
                padding-right: 6.7857142857rem;
                position: absolute;
                top: calc(50% - 1.4285714286rem);
                left: 0;
                transform: translateY(-50%);
                width: 100%;
            }
            .wishlist-products-row.js-main-wishlist-products {
                margin-left: -1.4285714286rem;
                margin-right: -1.4285714286rem;
                margin-top: -1.4285714286rem;
                display: flex;
                flex-direction: row;
                .product-card-blank {
                    padding-left: 1.4285714286rem;
                    padding-right: 1.4285714286rem;
                    display: block;
                    flex: 0 0 33.3333333333%;
                    max-width: 33.3333333333%;
                    .product-image {
                        padding-bottom: 133.333333333%;
                        border: 0.0714285714rem dotted #707070;
                    }
                    .product-meta {
                        margin-top: 1.4285714286rem;
                        .meta-line-1 {
                            width: 45%;
                            margin-top: 0.7142857143rem;
                            border-top: 0.0714285714rem dotted #707070;
                        }
                        .meta-line-2 {
                            width: 55%;
                            margin-top: 0.7142857143rem;
                            border-top: 0.0714285714rem dotted #707070;
                        }
                    }
                }
            }
        }
    }
`;

export default AccountWish;
