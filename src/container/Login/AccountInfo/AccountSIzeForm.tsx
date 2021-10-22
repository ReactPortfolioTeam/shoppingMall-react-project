import { FlexBoxDiv } from 'assets/styledComponents/global/globalStyle.style';
import { ButtonHover } from 'component/Button/ButtonHover';
import * as React from 'react';
import styled from 'styled-components';

interface IAppProps {}

const AccountSizeForm: React.FC<IAppProps> = (props) => {
    const sizeValue = ['S', 'M', 'L', 'XL', '2X', 'Clear'];
    const BottomSizeValue = [
        '28',
        '29',
        '30',
        '32',
        '33',
        '34',
        '36',
        '38',
        '40',
    ];
    const FootWearSizeValue = [
        '6',
        '6.5',
        '7',
        '7.5',
        '8',
        '8.5',
        '9',
        '9.5',
        '10',
        '10.5',
        '11',
        '11.5',
        '12',
    ];
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
                                                    tabIndex={0}
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
                                                    tabIndex={0}
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
                                    data-select-name="sizes[bottoms]"
                                >
                                    <div className="form-field">
                                        <div
                                            // role="combobox"
                                            id="sel-ns5q"
                                            aria-controls="sel-ns5q"
                                            aria-haspopup="listbox"
                                            aria-owns="sel-ns5q-listbox"
                                            aria-labelledby="sel-ns5q-labelledby"
                                            className="selectric-wrapper selectric-js-select selectric-js-pretty-select selectric-placeholder"
                                        >
                                            <div className="selectric-hide-select">
                                                <select
                                                    className="js-select js-pretty-select"
                                                    id="pdivretty-select_select-sizesbottoms"
                                                    name="sizes[bottoms]"
                                                    value=""
                                                    data-name="sizes[bottoms]"
                                                    data-default=""
                                                    tabIndex={-1}
                                                >
                                                    <option
                                                        selected
                                                        disabled={false}
                                                        data-extra="placeholder"
                                                    >
                                                        Select Size
                                                    </option>
                                                    {BottomSizeValue.map(
                                                        (size) => (
                                                            <option
                                                                value={size}
                                                                data-optiondata=""
                                                            >
                                                                {size}
                                                            </option>
                                                        )
                                                    )}
                                                </select>
                                            </div>
                                            {/* <div className="selectric">
                                                <span
                                                    className="label"
                                                    role="textbox"
                                                    aria-autocomplete="list"
                                                    id="sel-ns5q-textbox"
                                                >
                                                    Select Size
                                                </span>
                                                <b className="button">
                                                    <span className="inline-icon">
                                                        <svg viewBox="0 0 14 14">
                                                            <path d="M4.1 4.6l-.7.7 3.9 3.9 3.9-3.9-.7-.7-3.2 3.2z"></path>
                                                        </svg>
                                                    </span>
                                                </b>
                                            </div>
                                            <div
                                                className="selectric-items"
                                                tabIndex={-1}
                                            >
                                                <div className="selectric-scroll">
                                                    <ul
                                                        role="listbox"
                                                        id="sel-ns5q-listbox"
                                                        aria-controls="sel-ns5q-textbox"
                                                    >
                                                        <li
                                                            data-index="0"
                                                            className="disabled selected"
                                                            id="sel-ns5q-0"
                                                            role="option"
                                                            aria-selected="true"
                                                        >
                                                            Select Size
                                                        </li>
                                                        <li
                                                            data-index="1"
                                                            className=""
                                                            id="sel-ns5q-1"
                                                            role="option"
                                                            aria-selected="false"
                                                        >
                                                            28
                                                        </li>
                                                        <li
                                                            data-index="2"
                                                            className=""
                                                            id="sel-ns5q-2"
                                                            role="option"
                                                            aria-selected="false"
                                                        >
                                                            29
                                                        </li>
                                                        <li
                                                            data-index="3"
                                                            className=""
                                                            id="sel-ns5q-3"
                                                            role="option"
                                                            aria-selected="false"
                                                        >
                                                            30
                                                        </li>
                                                        <li
                                                            data-index="4"
                                                            className=""
                                                            id="sel-ns5q-4"
                                                            role="option"
                                                            aria-selected="false"
                                                        >
                                                            31
                                                        </li>
                                                        <li
                                                            data-index="5"
                                                            className=""
                                                            id="sel-ns5q-5"
                                                            role="option"
                                                            aria-selected="false"
                                                        >
                                                            32
                                                        </li>
                                                        <li
                                                            data-index="6"
                                                            className=""
                                                            id="sel-ns5q-6"
                                                            role="option"
                                                            aria-selected="false"
                                                        >
                                                            33
                                                        </li>
                                                        <li
                                                            data-index="7"
                                                            className=""
                                                            id="sel-ns5q-7"
                                                            role="option"
                                                            aria-selected="false"
                                                        >
                                                            34
                                                        </li>
                                                        <li
                                                            data-index="8"
                                                            className=""
                                                            id="sel-ns5q-8"
                                                            role="option"
                                                            aria-selected="false"
                                                        >
                                                            36
                                                        </li>
                                                        <li
                                                            data-index="9"
                                                            className=""
                                                            id="sel-ns5q-9"
                                                            role="option"
                                                            aria-selected="false"
                                                        >
                                                            38
                                                        </li>
                                                        <li
                                                            data-index="10"
                                                            className="last"
                                                            id="sel-ns5q-10"
                                                            role="option"
                                                            aria-selected="false"
                                                        >
                                                            40
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div> */}
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
                                    data-select-name="sizes[footwear]"
                                >
                                    <div className="form-field">
                                        <div
                                            // role="combobox"
                                            id="sel-6lm"
                                            aria-haspopup="listbox"
                                            aria-owns="sel-6lm-listbox"
                                            aria-labelledby="sel-6lm-labelledby"
                                            className="selectric-wrapper selectric-js-select selectric-js-pretty-select selectric-placeholder"
                                        >
                                            <div className="selectric-hide-select">
                                                <select
                                                    className="js-select js-pretty-select"
                                                    id="pretty-select_select-sizesfootwear"
                                                    name="sizes[footwear]"
                                                    value=""
                                                    data-name="sizes[footwear]"
                                                    data-default=""
                                                    tabIndex={-1}
                                                >
                                                    <option
                                                        selected
                                                        disabled={false}
                                                        data-extra="placeholder"
                                                    >
                                                        Select Size
                                                    </option>
                                                    {FootWearSizeValue.map(
                                                        (size) => (
                                                            <option
                                                                value={size}
                                                                data-optiondata=""
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
        /* .customer-sizes-row.select {
            .size-option-select {
                width: 60%;
                position: relative;
                .selectric-wrapper {
                    position: relative;
                    cursor: pointer;
                    .selectric-hide-select {
                        position: relative;
                        overflow: hidden;
                        width: 0;
                        height: 0;
                        select {
                            position: absolute;
                            left: -100%;
                            option {
                                font-weight: normal;
                                display: block;
                                white-space: nowrap;
                                min-height: 1.2em;
                                option:disabled {
                                    color: -internal-light-dark(
                                        graytext,
                                        rgb(170, 170, 170)
                                    );
                                }
                            }
                        }
                    }
                    .selectric {
                        background-color: #fff;
                        border: 0.0714285714rem solid #dedede;
                        border-radius: 0;
                        background: #f8f8f8;
                        position: relative;
                        overflow: hidden;
                        span {
                            display: block;
                            text-align: left;
                            font-weight: 400 !important;
                            color: #707070 !important;
                            font-size: 0.8571428571rem;
                            line-height: 2.8571428571rem;
                            height: 2.8571428571rem;
                            margin: 0;
                            padding: 0 1.0714285714rem;
                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;
                        }
                        .button {
                            font: inherit;
                            height: 100%;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            padding: 0 0.7142857143rem;
                            width: 2.1428571429rem;
                            background: 0 0;
                            position: absolute;
                            right: 0;
                            top: 0;
                            color: #bbb;
                            text-align: center;
                            .inline-icon {
                                display: inline-block;
                                width: 0.7142857143rem;
                                margin-top: 0.2857142857rem;
                                vertical-align: middle;
                                fill: inherit;
                                svg {
                                    display: inline-block;
                                    height: 1em;
                                    width: auto;
                                    path {
                                        fill: #666;
                                        stroke: inherit;
                                    }
                                }
                            }
                        }
                    }
                    .selectric-items {
                        width: 100%;
                        min-width: 17.2857142857rem;
                        left: auto;
                        right: 0;
                        background-color: #fff;
                        border: 0.0714285714rem solid #dedede;
                        box-shadow: none;
                        display: block;
                        position: absolute;
                        top: 100%;
                        background: #f8f8f8;
                        z-index: -1;
                        .selectric-scroll {
                            height: 100%;
                            overflow: auto;
                            ul {
                                display: flex;
                                flex-direction: row;
                                flex-wrap: wrap;
                                font-size: 0.8571428571rem;
                                line-height: 2.8571428571rem;
                                min-height: 2.8571428571rem;
                                list-style: none;
                                padding: 0;
                                margin: 0;
                                li {
                                    min-width: 2.8571428571rem;
                                    padding: 0;
                                    text-align: center;
                                    flex: 0 0 16.6666666667%;
                                    display: block;
                                    color: #666;
                                    cursor: pointer;
                                    list-style: none;
                                    padding: 0;
                                    margin: 0;
                                    font-size: 12px;
                                    line-height: 20px;
                                    min-height: 20px;
                                    padding: 0 1.0714285714rem;
                                    .disabled[data-index='0'] {
                                        display: none;
                                        font-weight: 400;
                                        opacity: 1;
                                        color: #707070;
                                    }
                                    .selected {
                                        background: #e0e0e0;
                                        color: #444;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        } */
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
