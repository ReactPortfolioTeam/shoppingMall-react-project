import React, { ReactElement } from 'react';
import styled from 'styled-components';

interface Props extends ButtonProps {
    children: ReactElement<any, any> | string;
    href?: string;
}
interface ButtonProps {
    width?: string;
    height?: string;
    color?: string;
    changeColor?: boolean;
    changeColorFrom?: string;
    changeColorTo?: string;
}

const TextButton: React.FC<Props> = (props: Props) => {
    const { children } = props;
    return <TextButtonStyle {...props}>{children}</TextButtonStyle>;
};

TextButton.defaultProps = {
    width: 'auto',
    height: 'auto',
    href: '#',
    color: '#333',
    changeColor: false,
    changeColorFrom: '#666',
    changeColorTo: '#000',
};

export default TextButton;

const TextButtonStyle = styled.a<ButtonProps>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    transition: all 0.5s;

    color: ${(props) =>
        props.changeColor ? props.changeColorFrom : props.color};
    text-decoration: none;

    :after {
        display: block;
        content: '';
        margin-top: 3px;
        border-bottom: 1px solid black;
        transition: all 0.5s;
        transform: scaleX(0);
        width: ${(props) => props.width};
    }
    :hover:after {
        transform: scaleX(1);
    }
    :hover {
        color: ${(props) => props.changeColor && props.changeColorTo};
    }
`;
