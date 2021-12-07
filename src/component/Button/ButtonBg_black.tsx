import { ReactElement } from 'react';
import styled from 'styled-components';

export interface ButtonProps {
    id?: string;
    children: string | ReactElement<any, any>;
    width?: string;
    height?: string;
    type?: 'button' | 'reset' | 'submit';
    onClick?: any;
}

const ButtonBlack = styled.button<ButtonProps>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    padding: 0 ${(props) => props.theme.paddings.p20};
    border: 1px solid black;
    color: ${(props) => props.theme.colors.white};
    font-size: ${(props) => props.theme.fonts.size.fs12};
    background-color: ${(props) => props.theme.colors.dark};
    border-radius: 3px;
    cursor: pointer;
    white-space: nowrap;
`;

ButtonBlack.defaultProps = {
    id: '',
    width: 'auto',
    height: '2rem',
    type: 'button',
    onClick: () => {},
};
export default ButtonBlack;
