import ButtonBlack from 'component/Button/ButtonBg_black';
import MiniCart from 'container/MiniCart/MiniCart';
import * as React from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { Modal } from 'state/atom/modal/Modal';
import styled from 'styled-components';
import { StyledButton } from './Checkout';

interface SectionFooterProps {}

const SectionFooter: React.FC<SectionFooterProps> = (props) => {
    const setModal = useSetRecoilState(Modal);
    const history = useHistory();
    return (
        <SectionFooterStyle className="section section__footer">
            <ButtonBlack
                width="160px"
                height="3rem"
                type="submit"
                onClick={() => history.push('/checkout/payment')}
            >
                Continue to shipping
            </ButtonBlack>
            <StyledButton
                onClick={() =>
                    setModal({
                        isOpen: true,
                        ModalComponent: MiniCart,
                    })
                }
                id="linkToCartBtn"
            >
                Return to cart
            </StyledButton>
        </SectionFooterStyle>
    );
};
const SectionFooterStyle = styled.section`
    display: flex;
    flex-direction: row;
    #linkToCartBtn {
        text-align: center;
        margin: ${(props) => props.theme.margins.m10};
        font-size: ${(props) => props.theme.fonts.size.fs18};
        line-height: 1.5rem;
    }
`;
export default SectionFooter;
