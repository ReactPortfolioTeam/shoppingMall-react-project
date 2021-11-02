import ButtonBlack from 'component/Button/ButtonBg_black';
import * as React from 'react';
import styled from 'styled-components';
import { StyledLink } from './Checkout';

interface SectionFooterProps {}

const SectionFooter: React.FC<SectionFooterProps> = (props) => {
    return (
        <SectionFooterStyle className="section section__footer">
            <ButtonBlack width="30%" height="3rem" type="submit">
                Continue to shipping
            </ButtonBlack>
            <StyledLink to="/" id="linkToCartBtn">
                Return to cart
            </StyledLink>
        </SectionFooterStyle>
    );
};
const SectionFooterStyle = styled.section`
    display: flex;
    flex-direction: row;
    #linkToCartBtn {
        text-align: center;
        margin: ${(props) => props.theme.margins.m10};
        line-height: 1.5rem;
    }
`;
export default SectionFooter;
