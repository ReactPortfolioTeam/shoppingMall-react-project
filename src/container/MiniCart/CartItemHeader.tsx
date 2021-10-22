import * as React from 'react';

interface IAppProps {}

const CartItemHeader: React.FunctionComponent<IAppProps> = (props) => {
    return (
        <div className="cart-items-header">
            <div className="items-header-wrap">
                <div className="items-title">
                    <span className="h4">Item</span>
                </div>
                <div className="items-size">
                    <span className="h4">Size</span>
                </div>
                <div className="items-price">
                    <span className="h4">Price</span>
                </div>
            </div>
        </div>
    );
};

export default CartItemHeader;
