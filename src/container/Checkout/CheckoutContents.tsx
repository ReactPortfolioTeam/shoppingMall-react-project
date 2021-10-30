import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CheckoutMainContent from './CheckoutMainContent';
import CheckoutMainHeader from './CheckoutMainHeader';

interface IAppProps {}

const CheckoutContents: React.FC<IAppProps> = (props) => {
    return (
        <CheckoutContentsStyle>
            <CheckoutMainHeader />
            <CheckoutMainContent />
        </CheckoutContentsStyle>
    );
};
const CheckoutContentsStyle = styled.main`
    min-width: 58%;
    display: flex;
    flex-direction: column;
    padding-right: ${(props) => props.theme.paddings.p20};
    border-right: 1px solid ${(props) => props.theme.colors.lightGray};
`;

export default CheckoutContents;
