import styled, { css } from 'styled-components';

export const DaeHwanStyle = styled('div')`
    padding: 4.2857142857rem 0;
    border-top: 0.0714285714rem solid #dedede;
    .button-cta {
        appearance: none;
        cursor: pointer;
        background: 0 0;
        border: none;
        border-radius: 0;
        width: auto;
        padding-right: 3.5714285714rem;
        position: relative;
        text-align: left;
        font-weight: 500;
        font-size: 1rem;
        line-height: 3.5714285714rem;
        padding: 0 1.0714285714rem;
        background-color: #1f1f1f;
        color: #fff;
        transition: all 0.25s cubic-bezier(0.86, 0, 0.07, 1);
    }
    .button-cta.has-icon {
        padding-right: 3.5714285714rem;
        position: relative;
        text-align: left;
        &:hover {
            background-color: #000;
        }
    }
    .inline-icon {
        position: absolute;
        right: 1.0714285714rem;
        top: 50%;
        font-size: 1.125em;
        line-height: 1;
        transform: translateY(-50%);
        vertical-align: middle;
        fill: inherit;
        & > svg {
            display: inline-block;
            height: 1em;
            width: auto;
            max-width: 100%;
            & > path {
                fill: #666;
                stroke: inherit;
            }
        }
    }
`;
