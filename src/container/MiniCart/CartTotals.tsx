import { MyTheme } from 'assets/css/global/theme.style';
import { ButtonHover } from 'component/Button/ButtonHover';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { Modal } from 'state/atom/modal/Modal';
import MiniCart from './MiniCart';

interface IAppProps {}

const CartTotals: React.FunctionComponent<IAppProps> = (props) => {
    const setModal = useSetRecoilState(Modal);
    return (
        <div className="cart-totals">
            <div className="subtotal-row flex-space-between">
                <h4>Subtotal</h4>
                <h5 className="js-cart-price">$710.00</h5>
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
