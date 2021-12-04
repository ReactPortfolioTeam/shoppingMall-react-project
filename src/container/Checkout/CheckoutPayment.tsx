import { FlexBoxDiv } from 'assets/styledComponents/global/globalStyle.style';
import * as React from 'react';
import { useRecoilValue } from 'recoil';
import OrderInfo from 'state/atom/orderInfo/OrderInfo';
import styled from 'styled-components';

interface IAppProps {}

const CheckoutPayment: React.FunctionComponent<IAppProps> = (props) => {
    const { email, name, address, detailedAddress, phone } = useRecoilValue(
        OrderInfo
    );
    return (
        <CheckoutPaymentStyle>
            <FlexBoxDiv flexDirection="column">
                <h1>주문자 정보</h1>
                <table className="tg">
                    <tbody>
                        <tr>
                            <th className="tg-0lax">Email</th>
                            <td className="tg-0lax">{email}</td>
                        </tr>
                        <tr>
                            <th className="tg-0lax">Name</th>
                            <td className="tg-0lax">{name}</td>
                        </tr>
                        <tr>
                            <th className="tg-0lax">Address</th>
                            <td className="tg-0lax">{address}</td>
                        </tr>
                        <tr>
                            <th className="tg-0lax">Detailed Address</th>
                            <td className="tg-0lax">{detailedAddress}</td>
                        </tr>
                        <tr>
                            <th className="tg-0lax">Tel</th>
                            <td className="tg-0lax">{phone}</td>
                        </tr>
                    </tbody>
                </table>
            </FlexBoxDiv>
        </CheckoutPaymentStyle>
    );
};

const CheckoutPaymentStyle = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    h1 {
        align-self: center;
        margin: ${(props) => props.theme.margins.m40};
    }
    .tg {
        border-collapse: collapse;
        border-spacing: 0;
        min-width: 40vw;
    }
    .tg td {
        border-bottom: 1px solid ${(props) => props.theme.colors.lightGray};
        font-size: 16px;

        overflow: hidden;
        padding: ${(props) => props.theme.paddings.p20}
            ${(props) => props.theme.paddings.p10};
        word-break: normal;
    }
    .tg th {
        border-bottom: 1px solid ${(props) => props.theme.colors.lightGray};
        font-size: 16px;
        font-weight: bolder;
        overflow: hidden;
        padding: ${(props) => props.theme.paddings.p20}
            ${(props) => props.theme.paddings.p10};
        word-break: normal;
    }
    .tg .tg-0lax {
        text-align: left;
        vertical-align: top;
    }
`;
export default CheckoutPayment;
