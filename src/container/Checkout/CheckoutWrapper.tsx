import * as React from 'react';
import styled from 'styled-components';
import CheckoutContents from './CheckoutContents';
import CheckoutSidebar from './CheckoutSidebar';

interface IAppProps {}

const CheckoutWrapper: React.FC<IAppProps> = (props) => {
    return (
        <WrapperStyle>
            <CheckoutContents />
            <CheckoutSidebar />
        </WrapperStyle>
    );
};

const WrapperStyle = styled.div`
    margin: ${(props) => props.theme.margins.m10};
    display: flex;
    flex-direction: row;
`;
export default CheckoutWrapper;
