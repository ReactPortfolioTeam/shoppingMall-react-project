import * as React from 'react';
import styled from 'styled-components';
import MiniCartContents from './MiniCartContents';
import MiniCartHeader from './MiniCartHeader';

interface IAppProps {
    show: boolean;
    handleModalShow: any;
}

const MiniCart: React.FC<IAppProps> = ({ show, handleModalShow }) => {
    return (
        <MiniCartStyle show={show}>
            <div id="mini-cart">
                <div className="mini-cart-inner wrapper">
                    <MiniCartHeader handleModalShow={handleModalShow} />
                    <MiniCartContents />
                </div>
            </div>
            <div id="no-click" />
        </MiniCartStyle>
    );
};
interface MiniCartStyleProps {
    show: boolean;
}
const MiniCartStyle = styled.div<MiniCartStyleProps>`
    .inline-icon {
        vertical-align: middle;
        fill: inherit;
        svg {
            display: inline-block;
            height: 1em;
            width: auto;
            path {
                stroke: inherit;
            }
        }
    }
    .visually-hidden {
        border: 0;
        clip: rect(0, 0, 0, 0);
        width: 1px;
        height: 1px;
        font-size: 0;
        line-height: 0;
        opacity: 0;
        overflow: hidden;
        padding: 0;
        position: absolute;
        top: 0;
        left: 0;
        pointer-events: none;
        z-index: -1;
    }
    .button-cta {
        appearance: none;
        cursor: pointer;
        background: 0 0;
        border: none;
        border-radius: 0;
        margin: 0;
        display: inline-block;
        font-weight: 500;
        font-size: 1rem;
        line-height: 3.5714285714rem;
        padding: 0 1.0714285714rem;
        background-color: #1f1f1f;
        color: #fff;
        position: relative;
        transition: all 0.25s cubic-bezier(0.86, 0, 0.07, 1);
        &.has-icon {
            .inline-icon {
                position: absolute;
                right: 1.0714285714rem;
                top: 50%;
                font-size: 1.125em;
                line-height: 1;
                transform: translateY(-50%);
            }
        }
    }
    .button-text {
        appearance: none;
        cursor: pointer;
        background: 0 0;
        border: none;
        border-radius: 0;
        width: auto;
        margin: 0;
        padding: 0;
        display: inline-block;
        font-size: 1rem;
        line-height: 1.4285714286rem;
        color: #666;
    }
    .text-light-grey {
        color: #666;
    }
    a {
        text-decoration: none;
    }
    .h4 {
        font-size: 1rem;
        line-height: 1.4285714286rem;
        font-weight: 500;
    }
    .h5 {
        font-size: 1rem;
        line-height: 1.4285714286rem;
        font-weight: 400;
    }
    .h6 {
        font-size: 0.8571428571rem;
        line-height: 1.4285714286rem;
    }
    .styled-dot {
        display: inline-block;
        width: 0.2857142857rem;
        height: 0.2857142857rem;
        background: #000;
        border-radius: 100%;
        vertical-align: middle;
    }
    .lazy {
        background: #f3f3f3;
        overflow: hidden;
        position: relative;
    }
    .portrait-product-image {
        width: 100%;
        overflow: hidden;
        .landscape-image-wrap {
            position: relative;
            padding-bottom: 133.333333333%;
            overflow: hidden;
            background: #f3f3f3;
            img {
                width: 100%;
                height: 100%;
                object-fit: contain;
                font-family: object-fit\:contain;
            }
            .lazy {
                position: absolute;
                top: 20%;
                left: -10%;
                width: 120%;
                height: 60%;
                max-width: none;
                img {
                    display: block;
                }
            }
        }
    }
    #no-click {
        display: ${(props) => (props.show ? 'block' : 'none')};
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 11;
        background: rgba(242, 242, 242, 0.5);
    }

    #mini-cart {
        display: ${(props) => (props.show ? 'block' : 'none')};
        width: calc(50% - 0.7142857143rem);
        position: absolute;
        top: 0;
        right: 0;
        z-index: 12;
        background: #1f1f1f;
        color: #fff;
        height: auto;

        .styled-dot {
            margin-right: 0.3571428571rem;
        }
        .mini-cart-inner.wrapper {
            padding-left: 2.8571428571rem;
            padding-right: 2.8571428571rem;
            .mini-cart-header {
                height: 5.7142857143rem;
                display: flex;
                flex-wrap: nowrap;
                align-items: center;
                justify-content: space-between;
                position: relative;
                border-bottom: 0.0714285714rem solid #555;
                .styled-dot {
                    background: #fff;
                }
                .header-logo {
                    width: 5.4285714286rem;
                    height: 2.0357142857rem;
                    display: inline-block;
                    vertical-align: middle;

                    svg {
                        display: block;
                        max-width: 100%;
                        height: auto;
                        path {
                            fill: #9a9a9a;
                        }
                    }
                }
                #close-mini-cart {
                    font-size: 1.4285714286rem;
                    position: relative;
                    top: 0.4285714286rem;
                    margin-left: 17px;
                    margin-left: 1.2142857143rem;
                    path {
                        fill: #9a9a9a;
                    }
                }
            }
            .cart-contents {
                .cart-items-header {
                    display: block;
                    padding-top: 0.3571428571rem;
                    padding-right: 5.8571428571rem;
                    padding-bottom: 0.3571428571rem;
                    border-bottom: 0.0714285714rem solid #555;
                    color: #9a9a9a;
                    .items-header-wrap {
                        display: flex;
                        flex-direction: row;
                        flex-wrap: nowrap;
                        margin-left: -0.3571428571rem;
                        margin-right: -0.3571428571rem;
                        .items-title {
                            padding-left: 0.3571428571rem;
                            padding-right: 0.3571428571rem;
                            width: 100%;
                        }
                        .items-size {
                            flex: 0 0 2.9285714286rem;
                            max-width: 2.9285714286rem;
                            width: 2.9285714286rem;
                            padding-left: 0.3571428571rem;
                            padding-right: 0.3571428571rem;
                        }
                        .items-price {
                            width: 5.8571428571rem;
                            flex: 0 0 5.8571428571rem;
                            text-align: right;
                            padding-left: 0.3571428571rem;
                            padding-right: 0.3571428571rem;
                        }
                    }
                }
                .cart-items-wrap {
                    margin-right: -2.8571428571rem;
                    margin-bottom: -0.0714285714rem;
                    .cart-items {
                        padding-right: 2.8571428571rem;
                        overflow-y: auto;
                        max-height: calc(100vh - 18.6428571429rem);
                        .line-item {
                            border-bottom: 0.0714285714rem solid #555;
                            padding: 1.4285714286rem 0;
                            .remove-line-item {
                                margin-top: auto;
                                color: #9a9a9a;
                                path {
                                    fill: #9a9a9a;
                                }
                                .remove-text {
                                    border: 0;
                                    clip: rect(0, 0, 0, 0);
                                    width: 1px;
                                    height: 1px;
                                    font-size: 0;
                                    line-height: 0;
                                    opacity: 0;
                                    overflow: hidden;
                                    padding: 0;
                                    position: absolute;
                                    top: 0;
                                    left: 0;
                                    pointer-events: none;
                                    z-index: -1;
                                }
                            }
                            .line-item-inner {
                                display: flex;
                                flex-direction: row;
                                flex-wrap: nowrap;
                                margin-left: -0.3571428571rem;
                                margin-right: -0.3571428571rem;
                                .line-image {
                                    flex: 0 0 5.8571428571rem;
                                    max-width: 5.8571428571rem;
                                    min-width: 0.0714285714rem;
                                    width: 5.8571428571rem;
                                    padding-left: 0.3571428571rem;
                                    padding-right: 0.3571428571rem;
                                }
                                .line-info-wrap {
                                    padding-left: 0.3571428571rem;
                                    padding-right: 0.3571428571rem;
                                    width: 100%;
                                    .line-info {
                                        margin-left: -0.3571428571rem;
                                        margin-right: -0.3571428571rem;
                                        display: flex;
                                        flex-direction: row;
                                        flex-wrap: nowrap;
                                        .title-and-options {
                                            padding-left: 0.3571428571rem;
                                            padding-right: 0.3571428571rem;
                                            width: 100%;
                                            .title {
                                                display: block;
                                            }
                                            .title-sub {
                                                display: block;
                                                color: #9a9a9a;
                                            }
                                            .item-options {
                                                color: #9a9a9a;
                                                font-weight: 400;
                                                font-size: 1rem;
                                                line-height: 1.4285714286rem;
                                            }
                                        }
                                        .size {
                                            flex: 0 0 2.9285714286rem;
                                            max-width: 2.9285714286rem;
                                            width: 2.9285714286rem;
                                            min-width: 0.0714285714rem;
                                            padding-left: 0.3571428571rem;
                                            padding-right: 0.3571428571rem;

                                            .no-medium-up {
                                                display: none;
                                            }
                                        }
                                        .price {
                                            text-align: right;
                                            flex: 0 0 5.8571428571rem;
                                            max-width: 5.8571428571rem;
                                            min-width: 0.0714285714rem;
                                            width: 5.8571428571rem;
                                            padding-left: 0.3571428571rem;
                                            padding-right: 0.3571428571rem;
                                        }
                                    }
                                }
                                .line-price-and-remove-small {
                                    display: none;
                                    flex: 0 0 5.8571428571rem;
                                    max-width: 5.8571428571rem;
                                    min-width: 0.0714285714rem;
                                    width: 5.8571428571rem;
                                    padding-left: 0.3571428571rem;
                                    padding-right: 0.3571428571rem;
                                    flex-direction: column;
                                    align-items: flex-end;
                                }
                                .line-remove {
                                    text-align: right;
                                    flex: 0 0 5.8571428571rem;
                                    max-width: 5.8571428571rem;
                                    min-width: 0.0714285714rem;
                                    width: 5.8571428571rem;
                                    padding-left: 0.3571428571rem;
                                    padding-right: 0.3571428571rem;
                                    &.no-small {
                                        display: block;
                                    }
                                }
                            }
                        }
                    }
                }
                .cart-totals {
                    padding-bottom: 2.8571428571rem;
                    border-top: 0.0714285714rem solid #555;
                    .subtotal-row {
                        height: 4.2857142857rem;
                        &.flex-space-between {
                            display: flex;
                            flex-direction: row;
                            justify-content: space-between;
                            flex-wrap: nowrap;
                            align-items: center;
                        }
                    }
                    #checkout-button {
                        width: 100%;
                        background-color: #877551;
                        padding-right: 3.5714285714rem;
                        position: relative;
                        text-align: left;
                        transition: all 0.3s cubic-bezier(0.86, 0, 0.07, 1);
                        &:hover {
                            background-color: #53411f;
                        }
                        path {
                            fill: #fff;
                        }
                    }
                }
            }
        }
    }
`;

export default MiniCart;
