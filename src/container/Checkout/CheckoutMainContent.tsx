import * as React from 'react';
import { useRecoilState } from 'recoil';
import OrderInfo from 'state/atom/orderInfo/OrderInfo';
import styled from 'styled-components';
import SectionContactInfo from './SectionContactInfo';
import SectionFooter from './SectionFooter';
import SectionShippingAddress from './SectionShippingAddress';

interface IAppProps {}

const CheckoutMainContent: React.FC<IAppProps> = (props) => {
    const [orderInfo, setOrderInfo] = useRecoilState(OrderInfo);
    const handleChange = React.useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const { value, name } = e.target;
            setOrderInfo({
                ...orderInfo,
                [name]: value,
            });
            // console.log(orderInfo);
        },
        [orderInfo]
    );
    return (
        <form
            className="edit_checkout"
            action=""
            method="post"
            acceptCharset="UTF-8"
        >
            <CheckoutMainContentStyle>
                <SectionContactInfo
                    handleChange={handleChange}
                    inputValue={orderInfo}
                />
                <SectionShippingAddress
                    handleChange={handleChange}
                    inputValue={orderInfo}
                />
                <SectionFooter />
            </CheckoutMainContentStyle>
        </form>
    );
};
const CheckoutMainContentStyle = styled.div`
    display: flex;
    flex-direction: column;
    .section {
        margin: ${(props) => props.theme.margins.m20};
        .section__header {
            display: flex;
            justify-content: space-between;
        }
        .section__content {
            display: flex;
            flex-direction: column;
            .checkbox-wrapper {
                display: flex;
            }
            &.doubleInput-row {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
            }
        }
    }
`;

export default CheckoutMainContent;
