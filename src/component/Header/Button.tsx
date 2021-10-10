import { ReactElement } from 'react';
import styled from 'styled-components';

export interface ButtonProps {
    children: string | ReactElement<any, any>;
    width?: string;
    height?: string;
    type?: 'button' | 'reset' | 'submit';
}

const Button = styled.button<ButtonProps>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    padding: 0 10.8px;
    border: 1px solid black;
    background-color: #fff;
    border-radius: 3px;
    transition: all 0.5s;
    &:hover {
        background-color: #000;
        color: #fff;
    }
`;

Button.defaultProps = {
    width: 'auto',
    height: '2rem',
    type: 'button',
};
export default Button;
