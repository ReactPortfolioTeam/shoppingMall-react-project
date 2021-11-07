import React, { useRef } from 'react';
import styled, { css } from 'styled-components';

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
}

interface StyleProps {
    width?: string;
    height?: string;
    value?: string;
}

const InputCheckout: React.FC<InputProps> = (props: InputProps) => {
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
    } = props;
    const label = useRef<HTMLLabelElement>(null);

    const focusDiv = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value !== '' && label.current !== null) {
            label.current.style.top = '2px';
            label.current.style.left = '2px';
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
                onChange={(e) => {
                    onChange(e);
                    focusDiv(e);
                }}
            />
        </InputContainer>
    );
};

InputCheckout.defaultProps = {
    content: 'Email',
    type: 'email',
    placeholder: 'you@example.com',
    width: '380px',
    height: '40px',
    name: '',
};

export default InputCheckout;

const InputContainer = styled.div<StyleProps>`
    position: relative;
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    margin: 0.4285714286em 0;
    cursor: pointer;
    & > label {
        position: absolute;
        margin-top: ${(props) => props.theme.margins.m2_5};
        left: 10px;
        top: 13px;
        transition: all 0.25s;
        cursor: pointer;
        color: ${(props) => props.theme.colors.gray};
        ${(props) =>
            props.value &&
            css`
                top: 2px;
                left: 2px;
            `}
    }
    & > input {
        padding-top: ${(props) => props.theme.paddings.p10};
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
            top: 2px;
            left: 2px;
            font-size: smaller;
        }
        & > input {
            ::placeholder {
                color: transparent;
            }
        }
    }
`;
