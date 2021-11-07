import * as React from 'react';
import styled from 'styled-components';

interface IAppProps {}

const CheckoutPayment: React.FunctionComponent<IAppProps> = (props) => {
    return <CheckoutPaymentStyle></CheckoutPaymentStyle>;
};

const CheckoutPaymentStyle = styled.main`
    display: flex;
    flex-direction: column;
    width: 100%;
`;
export default CheckoutPayment;
