import { MyTheme } from 'assets/css/global/theme.style';
import { ButtonHover } from 'component/Button/ButtonHover';
import * as React from 'react';

interface IAppProps {}

const CartTotals: React.FunctionComponent<IAppProps> = (props) => {
    return (
        <div className="cart-totals">
            <div className="subtotal-row flex-space-between">
                <h4>Subtotal</h4>
                <h5 className="js-cart-price">$710.00</h5>
            </div>
            <div className="cart-row">
                <button
                    id="checkout-button"
                    className="button-cta button-gold has-icon"
                    name="checkout"
                    type="submit"
                >
                    <span className="text">
                        Check out
                        <span className="inline-icon">
                            <img
                                src="/images/icon/arrow-top.svg"
                                alt="arrow-right"
                                width="14px"
                                height="14px"
                                className="filter-gray rotate90"
                            />
                        </span>
                    </span>
                </button>
            </div>
        </div>
    );
};

export default CartTotals;
