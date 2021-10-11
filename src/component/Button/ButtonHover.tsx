/* eslint-disable react/default-props-match-prop-types */
import { MyTheme } from 'assets/css/global/theme.style';
import React from 'react';
import styled, { css } from 'styled-components';
import { ButtonProps } from './Button';

interface ButtonHoverProps extends ButtonProps {
    isOverrlay?: boolean;
    backgroundColor?: string;
    color?: string;
}

export const ButtonHover: React.FC<ButtonHoverProps> = (
    props: ButtonHoverProps
) => {
    const { children } = props;

    return (
        <ButtonHoverContainer>
            <ButtonHoverStyle {...props}>{children}</ButtonHoverStyle>
        </ButtonHoverContainer>
    );
};

ButtonHover.defaultProps = {
    width: 'auto',
    height: '54px',
    type: 'button',
    isOverrlay: false,
    backgroundColor: '#fff',
    color: '#666',
};

const ButtonHoverContainer = styled.div`
    position: relative;
    display: inline-block;
    width: fit-content;
`;

const ButtonHoverStyle = styled.button<ButtonHoverProps>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${(props) => props.color};
    opacity: 0.9;
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    padding: 0 15px;
    border: 1px solid rgba(55, 55, 55, 0.5);
    background-color: ${(props) => props.backgroundColor};
    cursor: pointer;
    transition: all 0.25s;

    :hover {
        opacity: 1;
        border: 1px solid #000;
        ${(props) =>
            props.isOverrlay &&
            css`
                background-color: rgba(0, 0, 0, 0.2);
            `}
    }
`;
