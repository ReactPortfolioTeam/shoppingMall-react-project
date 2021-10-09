import React from 'react';
import styled from 'styled-components';

interface Props {
    children: string;
    width?: string;
    height?: string;
}

const Button = styled.button<Props>`
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
};
export default Button;
