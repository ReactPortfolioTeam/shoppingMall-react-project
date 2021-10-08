import React, { ReactElement } from 'react';
import styled from 'styled-components';

interface Props extends ButtonProps {
    children: ReactElement<any, any>;
}
interface ButtonProps {
    width?: string;
    height?: string;
}

const TextButton: React.FC<Props> = (props) => {
    const { children, width = 'auto', height = 'auto' } = props;
    return (
        <TextButtonStyle width={width} height={height}>
            {children}
        </TextButtonStyle>
    );
};

export default TextButton;

const TextButtonStyle = styled.button<ButtonProps>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
`;
