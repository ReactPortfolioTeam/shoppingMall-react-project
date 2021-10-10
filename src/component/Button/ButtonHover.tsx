/* eslint-disable react/default-props-match-prop-types */
import React from 'react';
import styled, { css } from 'styled-components';
import { ButtonProps } from './Button';

interface ButtonHoverProps extends ButtonProps {
    isOverrlay?: boolean;
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
    color: rgba(85, 85, 85, 0.7);
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    padding: 0 15px;
    border: 1px solid rgba(55, 55, 55, 0.5);
    background-color: #fff;
    cursor: pointer;
    transition: all 0.25s;

    :hover {
        color: rgba(85, 85, 85, 1);
        border: 1px solid #000;
        ${(props) =>
            props.isOverrlay &&
            css`
                background-color: rgba(0, 0, 0, 0.2);
            `}
    }
`;
