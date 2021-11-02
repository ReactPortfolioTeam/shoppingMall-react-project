import * as React from 'react';
import CartItemHeader from './CartItemHeader';
import CartItemsWrap from './CartItemsWrap';
import CartTotals from './CartTotals';

interface IAppProps {}

const CartForm: React.FunctionComponent<IAppProps> = (props) => {
    return (
        <form className="cart-form">
            <CartItemHeader />
            <CartItemsWrap />
            <CartTotals />
        </form>
    );
};

export default CartForm;
