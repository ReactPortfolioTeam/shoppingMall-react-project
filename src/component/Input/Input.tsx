import React from 'react';
import styled from 'styled-components';

interface InputProps {
    id: string;
    content?: string;
    type?: string;
    placeholder?: string;
    value: string;
    onChange: React.ChangeEventHandler;
    width?: string;
    height?: string;
}

interface StyleProps {
    width?: string;
    height?: string;
    value?: string;
}

const Input: React.FC<InputProps> = (props: InputProps) => {
    const {
        id,
        content,
        type,
        placeholder,
        value,
        onChange,
        width,
        height,
    } = props;
    return (
        <InputContainer width={width} height={height} value={value}>
            <label htmlFor={id}>{content}</label>
            <input
                id={id}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </InputContainer>
    );
};

Input.defaultProps = {
    content: 'Email',
    type: 'email',
    placeholder: 'you@example.com',
    width: '380px',
    height: '40px',
};

export default Input;

const InputContainer = styled.div<StyleProps>`
    position: relative;
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    cursor: pointer;
    & > label {
        position: absolute;
        left: ${(props) => (props.value !== '' ? '0' : '10px')};
        top: ${(props) => (props.value !== '' ? '-20px' : '13px')};
        transition: all 0.25s;
        cursor: pointer;
        color: ${(props) => props.theme.colors.gray};
    }
    & > input {
        padding: ${(props) => props.theme.paddings.p10};
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        cursor: pointer;
        border: 1px solid ${(props) => props.theme.colors.gray};
        color: ${(props) => props.theme.colors.dark};
        font-weight: ${(props) => props.theme.fonts.weight.bold};
        ::placeholder {
            font-weight: ${(props) => props.theme.fonts.weight.normal};
            color: white;
        }
    }
    :focus-within {
        cursor: pointer;
        & > label {
            transition: all 0.25s;
            top: -20px;
            left: 0;
        }
        & > input {
            ::placeholder {
                color: ${(props) => props.theme.colors.gray};
            }
        }
    }
`;
