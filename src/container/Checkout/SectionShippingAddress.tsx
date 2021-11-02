import InputCheckout from 'component/Input/inputCheckout';
import * as React from 'react';
import styled from 'styled-components';

interface SectionShippingProps {
    inputValue: {
        firstName: string;
        lastName: string;
        address: string;
        detailedAddress: string;
        phone: string;
    };
    handleChange: any;
}

const SectionShippingAddress: React.FC<SectionShippingProps> = (
    props: SectionShippingProps
) => {
    const { inputValue, handleChange } = props;
    return (
        <SectionShippingAddressStyle className="section section--shipping-address">
            <div className="section__header">
                <h2 className="section__title">Shipping address</h2>
            </div>
            <div className="section__content">
                <div className="section__content doubleInput-row">
                    <InputCheckout
                        id="firstName"
                        name="firstName"
                        value={inputValue.firstName}
                        onChange={handleChange}
                        placeholder="First name"
                        content="First name"
                        type="text"
                        width="48%"
                    />
                    <InputCheckout
                        id="lastName"
                        name="lastName"
                        value={inputValue.lastName}
                        onChange={handleChange}
                        placeholder="Last name"
                        content="Last name"
                        type="text"
                        width="48%"
                    />
                </div>
                <InputCheckout
                    id="address"
                    name="address"
                    value={inputValue.address}
                    onChange={handleChange}
                    placeholder="Address"
                    content="Address"
                    type="text"
                    width="100%"
                />
                <InputCheckout
                    id="detailedAddress"
                    name="detailedAddress"
                    value={inputValue.detailedAddress}
                    onChange={handleChange}
                    placeholder="Detailed Address(동, 호수)"
                    content="Detailed Address(동, 호수)"
                    type="text"
                    width="100%"
                />
                <div className="section__content with-icon">
                    <InputCheckout
                        id="phone"
                        name="phone"
                        value={inputValue.phone}
                        onChange={handleChange}
                        placeholder="Phone('-'없이 숫자만 입력해주세요)"
                        content="Phone('-'없이 숫자만 입력해주세요)"
                        type="tel"
                        width="100%"
                    />
                    <div className="tooltipBox">
                        <img
                            src="images/icon/question.svg"
                            alt="question"
                            className="question-icon"
                        />
                        <span
                            className="tooltip"
                            role="tooltip"
                            id="tooltip-for-phone"
                        >
                            In case we need to contact you about your order
                        </span>
                    </div>
                </div>
            </div>
        </SectionShippingAddressStyle>
    );
};
const SectionShippingAddressStyle = styled.section`
    .doubleInput-row {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .with-icon {
        position: relative;
        .tooltipBox {
            position: absolute;
            width: max-content;
            right: 2%;
            height: 100%;
            .tooltip {
                box-sizing: border-box;
                position: absolute;
                bottom: 80%;
                right: -0.3333333333em;
                width: 180px;
                margin: 0 0 5px 0;
                padding: 0.75em 1em;
                border-radius: 4px;
                white-space: normal;
                font-size: 0.8571428571em;
                font-style: normal;
                text-align: center;
                color: #fff;
                display: block;
                z-index: 200;
                transition: all 0.3s cubic-bezier(0.3, 0, 0, 1);
                transform: rotateX(20deg) scale(0.8);
                transform-origin: 90% 120%;
                background-color: rgba(51, 51, 51, 0.9);
                visibility: hidden;
                opacity: 0;
            }
            & > .question-icon {
                position: absolute;
                right: 2%;
                width: 16px;
                height: 100%;
                vertical-align: middle;
            }
            &:hover {
                .tooltip {
                    transform: rotateX(0deg) scale(1);
                    pointer-events: auto;
                    visibility: visible;
                    opacity: 1;
                    transform-origin: center 120%;
                    right: 50%;
                    margin-right: -90px;
                }
            }
        }
    }
`;

export default SectionShippingAddress;
