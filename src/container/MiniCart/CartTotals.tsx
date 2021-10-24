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
                            <svg viewBox="0 0 14 14">
                                <path
                                    d="M11.815 6.527L9.182 3.894l.707-.707 3.89 3.89-3.89 3.888-.707-.707 2.731-2.73H0v-1h11.815z"
                                    fill="#000"
                                    fillRule="nonzero"
                                ></path>
                            </svg>
                        </span>
                    </span>
                </button>
            </div>
        </div>
    );
};

export default CartTotals;
