import { FlexBoxDiv } from 'assets/styledComponents/global/globalStyle.style';
import { ButtonHover } from 'component/Button/ButtonHover';
import * as React from 'react';
import { useAlertModal } from 'state/actions/useModal';
import styled from 'styled-components';

interface IAppProps {}

const AccountSizeForm: React.FC<IAppProps> = (props) => {
    const sizeValue = ['S', 'M', 'L', 'XL', '2X', 'Clear'];
    const BottomSizeValue = ['28', '29', '30', '31', '32'];
    const FootWearSizeValue = ['240', '250', '260', '270', '280'];
    const modalAction = useAlertModal();
    const onClickNotWorkingPage = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        modalAction('구현되지 않은 페이지 입니다.');
    };
    return (
        <AccountSizeFormStyle>
            <form
                className="js-preset-sizes"
                // action="javascript:void(0);"
            >
                <div className="size-rows bottom-margin">
                    <SizeRrowsDiv>
                        <div
                            id="sizes-tops"
                            className="customer-sizes-row radios"
                        >
                            <fieldset>
                                <FlexBoxDiv
                                    flexDirection="row"
                                    justifyContent="space-between"
                                    alignItems="center"
                                    className="fieldset-inner"
                                >
                                    <legend className="h4">Tops</legend>
                                    <FlexBoxDiv
                                        flexDirection="row"
                                        className="size-option-radios"
                                    >
                                        {sizeValue.map((size) => (
                                            <div
                                                id={`radio-field-size-tops-size-${size.toLowerCase()}`}
                                                className="radio-field js-size-preset-radio"
                                            >
                                                <input
                                                    id={`radio-size-tops-size-${size.toLowerCase()}`}
                                                    name="sizes[tops]"
                                                    type="radio"
                                                    value={size}
                                                />
                                                <label
                                                    className="radio-label"
                                                    htmlFor={`radio-size-tops-size-${size.toLowerCase()}`}
                                                >
                                                    {size}
                                                </label>
                                            </div>
                                        ))}
                                    </FlexBoxDiv>
                                </FlexBoxDiv>
                            </fieldset>
                        </div>

                        <div
                            id="sizes-outerwear"
                            className="customer-sizes-row radios"
                        >
                            <fieldset>
                                <FlexBoxDiv
                                    flexDirection="row"
                                    justifyContent="space-between"
                                    alignItems="center"
                                    className="fieldset-inner"
                                >
                                    <legend className="h4">Outerwear</legend>
                                    <FlexBoxDiv
                                        flexDirection="row"
                                        className="size-option-radios"
                                        style={{
                                            flexWrap: 'wrap',
                                            maxWidth: '100%',
                                        }}
                                    >
                                        {sizeValue.map((size) => (
                                            <div
                                                id={`radio-field-size-outerwear-size-${size.toLowerCase()}`}
                                                className="radio-field js-size-preset-radio"
                                            >
                                                <input
                                                    id={`radio-size-outerwear-size-${size.toLowerCase()}`}
                                                    name="sizes[outerwear]"
                                                    type="radio"
                                                    value={size}
                                                />

                                                <label
                                                    className="radio-label"
                                                    htmlFor={`radio-size-outerwear-size-${size.toLowerCase()}`}
                                                >
                                                    {size}
                                                </label>
                                            </div>
                                        ))}
                                    </FlexBoxDiv>
                                </FlexBoxDiv>
                            </fieldset>
                        </div>

                        <FlexBoxDiv
                            id="sizes-bottoms"
                            className="customer-sizes-row select"
                            flexDirection="row"
                            justifyContent="space-between"
                            alignItems="center"
                        >
                            <label
                                className="h4"
                                htmlFor="pretty-select_select-sizesbottoms"
                                id="sel-ns5q-labelledby"
                            >
                                Bottoms
                            </label>
                            <div className="size-option-select">
                                <div
                                    className="pretty-select selectric-placeholder"
                                    id="pretty-select-sizesbottoms"
                                >
                                    <div className="form-field">
                                        <div
                                            id="sel-ns5q"
                                            className="selectric-wrapper selectric-js-select selectric-js-pretty-select selectric-placeholder"
                                        >
                                            <div className="selectric-hide-select">
                                                <select
                                                    className="js-select js-pretty-select"
                                                    id="pdivretty-select_select-sizesbottoms"
                                                    name="sizes[bottoms]"
                                                >
                                                    <option selected>
                                                        Select Size
                                                    </option>
                                                    {BottomSizeValue.map(
                                                        (size) => (
                                                            <option
                                                                value={size}
                                                            >
                                                                {size}
                                                            </option>
                                                        )
                                                    )}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </FlexBoxDiv>

                        <FlexBoxDiv
                            id="sizes-footwear"
                            className="customer-sizes-row select"
                            flexDirection="row"
                            justifyContent="space-between"
                            alignItems="center"
                        >
                            <label
                                className="h4"
                                htmlFor="pretty-select_select-sizesfootwear"
                                id="sel-6lm-labelledby"
                            >
                                Footwear
                            </label>
                            <div className="size-option-select">
                                <div
                                    className="pretty-select selectric-placeholder"
                                    id="pretty-select-sizesfootwear"
                                >
                                    <div className="form-field">
                                        <div
                                            id="sel-6lm"
                                            className="selectric-wrapper selectric-js-select selectric-js-pretty-select selectric-placeholder"
                                        >
                                            <div className="selectric-hide-select">
                                                <select
                                                    className="js-select js-pretty-select"
                                                    id="pretty-select_select-sizesfootwear"
                                                    name="sizes[footwear]"
                                                >
                                                    <option selected>
                                                        Select Size
                                                    </option>
                                                    {FootWearSizeValue.map(
                                                        (size) => (
                                                            <option
                                                                value={size}
                                                            >
                                                                {size}
                                                            </option>
                                                        )
                                                    )}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </FlexBoxDiv>
                    </SizeRrowsDiv>
                </div>
                <div className="save-sizes-button">
                    <div className="save-sizes-button">
                        <button
                            id="save-sizes"
                            className="button-cta has-icon"
                            type="submit"
                            onClick={onClickNotWorkingPage}
                        >
                            Save
                            <span className="inline-icon">
                                <svg viewBox="0 0 14 14">
                                    <path
                                        d="M11.815 6.527L9.182 3.894l.707-.707 3.89 3.89-3.89 3.888-.707-.707 2.731-2.73H0v-1h11.815z"
                                        fill="#000"
                                        fillRule="nonzero"
                                    ></path>
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>
            </form>
        </AccountSizeFormStyle>
    );
};

const AccountSizeFormStyle = styled.div`
    .size-rows.bottom-margin {
        margin-bottom: 1.4285714286rem;
        .h4 {
            font-size: 1rem;
            line-height: 1.4285714286rem;
            font-weight: 500;
        }
        .fieldset-inner {
            height: 4.2857142857rem;
            .size-option-radios {
                flex-wrap: wrap;
                max-width: 100%;
                input[type='radio']:checked + label {
                    background-color: transparent;
                    border-color: #1f1f1f;
                    font-weight: 500;
                }
                .radio-label {
                    height: 2.8571428571rem;
                    min-width: 2.8571428571rem;
                    line-height: 2.8571428571rem;
                }
                .radio-field {
                    position: relative;
                    input[type='radio']:checked + label {
                        color: #000;
                        cursor: pointer;
                    }
                    input {
                        border: 0;
                        clip: rect(0, 0, 0, 0);
                        width: 1px;
                        height: 1px;
                        font-size: 0;
                        line-height: 0;
                        opacity: 0;
                        overflow: hidden;
                        padding: 0;
                        position: absolute;
                        top: 0;
                        left: 0;
                        z-index: -1;
                        background-color: initial;
                        cursor: pointer;
                        appearance: auto;
                    }
                    .radio-label {
                        display: block;
                        text-align: center;
                        font-size: 0.8571428571rem;
                        border: 0.0714285714rem solid transparent;
                        color: #666;
                        position: relative;
                        &:hover {
                            background-color: #fafafa;
                        }
                    }
                }
            }
        }
    }
    .save-sizes-button {
        display: block;
        #save-sizes {
            width: 100%;
        }
    }
`;

const SizeRrowsDiv = styled.div`
    .customer-sizes-row.radios {
        height: 4.2857142857rem;
        border-top: 0.0714285714rem solid #dedede;
    }
    .customer-sizes-row.select {
        height: 4.2857142857rem;
        border-top: 0.0714285714rem solid #dedede;
    }
`;
export default AccountSizeForm;
