import React, { Children, ReactElement } from 'react';
import styled from 'styled-components';

interface Props {
    children: string | ReactElement<any, any>;
    width?: string;
    height?: string;
    type?: 'button' | 'reset' | 'submit';
}

interface ButtonHoverProps extends Props {
    isRightImg?: boolean;
    imgSrc?: string;
    imgWidth?: string;
    imgHeight?: string;
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
    type: 'button',
};
export default Button;

export const ButtonHover: React.FC<ButtonHoverProps> = (
    props: ButtonHoverProps
) => {
    const { isRightImg, imgSrc, imgHeight, imgWidth, children } = props;

    return (
        <ButtonHoverContainer>
            <ButtonHoverStyle {...props}>{children}</ButtonHoverStyle>
            {isRightImg && (
                <img
                    src={imgSrc}
                    width={imgWidth}
                    height={imgHeight}
                    alt="icon"
                />
            )}
        </ButtonHoverContainer>
    );
};

ButtonHover.defaultProps = {
    width: 'auto',
    height: '54px',
    isRightImg: false,
    imgSrc: '/images/icon/arrow-right.svg',
    imgWidth: '16px',
    imgHeight: '16px',
    type: 'button',
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
    }
`;
