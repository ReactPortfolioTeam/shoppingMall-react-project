import React, { ReactElement } from 'react';
import styled from 'styled-components';

interface Props extends ButtonProps {
    children: ReactElement<any, any>;
}
interface ButtonProps {
    width?: string;
    height?: string;
}

const TextButton: React.FC<Props> = (props: Props) => {
    const { children } = props;
    return <TextButtonStyle {...props}>{children}</TextButtonStyle>;
};

TextButton.defaultProps = {
    width: 'auto',
    height: 'auto',
};

export default TextButton;

const TextButtonStyle = styled.button<ButtonProps>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
`;
