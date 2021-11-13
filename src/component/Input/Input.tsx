import React, { useRef } from 'react';
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
    name?: string;
    errorMessage?: string;
    onBlur?: any;
    disabled?: boolean;
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
        name,
        errorMessage,
        onBlur,
        disabled,
    } = props;
    const label = useRef<HTMLLabelElement>(null);

    const focusDiv = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value !== '' && label.current !== null) {
            label.current.style.top = '-20px';
            label.current.style.left = '0px';
        } else if (label.current !== null) {
            label.current.style.removeProperty('top');
            label.current.style.removeProperty('left');
        }
    };

    return (
        <InputContainer width={width} height={height} value={value}>
            <label ref={label} htmlFor={id}>
                {content}
            </label>
            <input
                id={id}
                type={type}
                placeholder={placeholder}
                value={value}
                name={name}
                disabled={disabled}
                onBlur={(e) => {
                    onBlur(e);
                }}
                onChange={(e) => {
                    onChange(e);
                    focusDiv(e);
                }}
            />
            {errorMessage && <span>{errorMessage}</span>}
        </InputContainer>
    );
};

Input.defaultProps = {
    content: 'Email',
    type: 'email',
    placeholder: 'you@example.com',
    width: '380px',
    height: '40px',
    name: '',
    errorMessage: '',
    onBlur: () => {},
    disabled: false,
};

export default Input;

const InputContainer = styled.div<StyleProps>`
    position: relative;
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    & > label {
        position: absolute;
        left: 10px;
        top: 13px;
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
    & > span {
        color: red;
        margin-top: 3px;
        font-size: ${(p) => p.theme.fonts.size.fs12};
    }
`;
