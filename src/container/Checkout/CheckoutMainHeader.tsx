import MiniCart from 'container/MiniCart/MiniCart';
import { FunctionComponent } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { Modal } from 'state/atom/modal/Modal';
import styled from 'styled-components';
import { StyledButton } from './Checkout';

interface IAppProps {}

const CheckoutMainHeader: FunctionComponent<IAppProps> = () => {
    const setModal = useSetRecoilState(Modal);
    const location = useLocation();
    const history = useHistory();
    const isInfo = location.pathname === '/checkout';
    const isPayment = location.pathname === '/checkout/payment';
    // useEffect(() => console.log(location, isInfo, isPayment), [location]);
    return (
        <CheckoutMainHeaderStyle>
            <Link to="./" className="logo">
                <img src="./images/Logo.png" alt="" className="logoImg" />
            </Link>
            <ol className="checkoutProgressBar">
                <StyledButton
                    onClick={() =>
                        setModal({
                            isOpen: true,
                            ModalComponent: MiniCart,
                        })
                    }
                >
                    <li className="progressBar__item visited">Cart</li>
                </StyledButton>
                <li className="progressBar__item">
                    <img
                        src="./images/icon/arrow-right.svg"
                        alt="arrow-right"
                    />
                </li>
                {isInfo ? (
                    <li
                        className={`progressBar__item ${
                            isInfo ? 'current' : 'visited'
                        }`}
                    >
                        Information
                    </li>
                ) : (
                    isPayment && (
                        <StyledButton onClick={() => history.goBack()}>
                            <li
                                className={`progressBar__item ${
                                    isInfo ? 'current' : 'visited'
                                }`}
                            >
                                Information
                            </li>
                        </StyledButton>
                    )
                )}
                <li className="progressBar__item">
                    <img
                        src="./images/icon/arrow-right.svg"
                        alt="arrow-right"
                    />
                </li>
                <li
                    className={`progressBar__item ${
                        isPayment ? 'current' : ''
                    }`}
                >
                    Payment
                </li>
            </ol>
        </CheckoutMainHeaderStyle>
    );
};
const CheckoutMainHeaderStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    & :last-child {
        padding-bottom: ${(props) => props.theme.margins.m10};
    }
    border-bottom: 1px solid ${(props) => props.theme.colors.lightGray};
    .logoImg {
        max-height: 8rem;
        border: 0;
        display: inline-block;
        max-width: 100%;
    }
    .checkoutProgressBar {
        display: flex;
        flex-direction: row;
        justify-content: center;
        .progressBar__item {
            margin: 0 ${(props) => props.theme.margins.m5};
            &.current {
                font-weight: ${(props) => props.theme.fonts.weight.semiBold};
            }
        }
    }
`;

export default CheckoutMainHeader;
