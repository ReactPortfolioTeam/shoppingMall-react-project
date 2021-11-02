import { MyTheme } from 'assets/css/global/theme.style';
import { ButtonHover } from 'component/Button/ButtonHover';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import Cart from 'state/atom/Cart';
import { ProductInformation } from 'state/atom/dummy/ProductInformation';
import { Products } from 'state/atom/dummy/Products';
import { Modal } from 'state/atom/modal/Modal';
import MiniCart from './MiniCart';

interface IAppProps {}
type CartPriceList = {
    price: number | undefined;
    quantity: number | undefined;
};

const CartTotals: React.FunctionComponent<IAppProps> = (props) => {
    const setModal = useSetRecoilState(Modal);
    const cart = useRecoilValue(Cart);
    const products = useRecoilValue(Products);
    const productInfo = useRecoilValue(ProductInformation);
    const cartPriceList: CartPriceList[] = cart.map((item) => {
        const resultInfo = productInfo.find(
            (index) => index.product_option_id === item.product_option_id
        );
        const resultProduct = products.find(
            (index) => index.product_id === resultInfo?.product_id
        );
        const result = {
            price: resultProduct?.price,
            quantity: item.quantity,
        };
        return result;
    });
    const totalPrice = React.useMemo(
        () =>
            cartPriceList.reduce(
                (acc, crr) => acc + crr.price! * crr.quantity!,
                0
            ),
        [cart]
    );

    return (
        <div className="cart-totals">
            <div className="subtotal-row flex-space-between">
                <h4>Subtotal</h4>
                <h5 className="js-cart-price">${totalPrice}</h5>
            </div>
            <div className="cart-row">
                <Link to="/checkout">
                    <button
                        id="checkout-button"
                        className="button-cta button-gold has-icon"
                        name="checkout"
                        type="submit"
                        onClick={() =>
                            setModal({
                                isOpen: false,
                                ModalComponent: MiniCart,
                            })
                        }
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
                </Link>
            </div>
        </div>
    );
};

export default CartTotals;
