import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import { useLocation } from 'react-router';
import CheckoutMainContent from './CheckoutMainContent';
import CheckoutMainHeader from './CheckoutMainHeader';
import CheckoutPayment from './CheckoutPayment';

interface IAppProps {}

const CheckoutContents: React.FC<IAppProps> = () => {
    return (
        <CheckoutContentsStyle>
            <CheckoutMainHeader />
            <Switch>
                <Route exact path="/checkout">
                    <CheckoutMainContent />
                </Route>
                <Route path="/checkout/payment">
                    <CheckoutPayment />
                </Route>
            </Switch>
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
