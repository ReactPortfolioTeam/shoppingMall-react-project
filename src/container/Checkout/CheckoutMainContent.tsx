import Input from 'component/Input/Input';
import InputCheckout from 'component/Input/inputCheckout';
import * as React from 'react';
import styled from 'styled-components';
import { StyledLink } from './Checkout';
import SectionContactInfo from './SectionContactInfo';
import SectionFooter from './SectionFooter';
import SectionShippingAddress from './SectionShippingAddress';

interface IAppProps {}

const CheckoutMainContent: React.FC<IAppProps> = (props) => {
    const [inputValue, setInputValue] = React.useState({
        email: '',
        firstName: '',
        lastName: '',
        address: '',
        detailedAddress: '',
        phone: '',
    });
    const handleChange = React.useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const { value, name } = e.target;
            setInputValue({
                ...inputValue,
                [name]: value,
            });
        },
        [inputValue]
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
                    inputValue={inputValue}
                />
                <SectionShippingAddress
                    handleChange={handleChange}
                    inputValue={inputValue}
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
        }
    }
`;

export default CheckoutMainContent;
