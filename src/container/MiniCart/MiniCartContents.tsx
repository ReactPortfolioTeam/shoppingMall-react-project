import * as React from 'react';
import CartForm from './CartForm';

interface IAppProps {}

const MiniCartContents: React.FC<IAppProps> = (props) => {
    return (
        <div className="contents-wrap">
            <div className="cart-contents js-cart-contents">
                <div
                    className="contents-inner js-contents-inner"
                    data-total-price="$0.00"
                >
                    <CartForm />
                </div>
            </div>
        </div>
    );
};

export default MiniCartContents;
