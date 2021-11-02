import Button from 'component/Button/Button';
import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Input from 'component/Input/Input';
import CheckoutWrapper from './CheckoutWrapper';

interface IAppProps {}

const Checkout: React.FC<IAppProps> = (props) => {
    return (
        <CheckoutStyle>
            <CheckoutWrapper />
        </CheckoutStyle>
    );
};
export const StyledLink = styled(Link)`
    text-decoration: none;
    color: #877551;
`;
export const StyledButton = styled.span`
    text-decoration: none;
    cursor: pointer;
    color: #877551;
`;

const CheckoutStyle = styled.body`
    width: 100%;
    min-width: ${(props) => props.theme.size.desktop};
    height: 100%;
`;

export default Checkout;
