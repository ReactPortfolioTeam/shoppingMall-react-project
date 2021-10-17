import TextButton from 'component/Button/TextButton';
import Button from 'component/Button/Button';

import React from 'react';
import styled from 'styled-components';

interface Props {
    count?: number;
    setMenu: any;
}

const Header: React.FC<Props> = ({ setMenu, count = 3 }) => {
    return (
        <>
            <HeaderContainer>
                <div className="wrapper">
                    <nav className="left-menu__nav">
                        <h2 className="screen-out__h2">메뉴</h2>
                        <ul>
                            <li>
                                <TextButton
                                    href="#"
                                    onClick={() => setMenu('shop')}
                                >
                                    Shop
                                </TextButton>
                            </li>
                            <li>
                                <TextButton
                                    href="#"
                                    onClick={() => setMenu('news')}
                                >
                                    News
                                </TextButton>
                            </li>
                            <li>
                                <TextButton
                                    href="#"
                                    onClick={() => setMenu('search')}
                                >
                                    Search
                                </TextButton>
                            </li>
                            <li>
                                <TextButton
                                    changeColor
                                    href="#"
                                    onClick={() => setMenu('visit')}
                                >
                                    Visit
                                </TextButton>
                            </li>
                            <li>
                                <TextButton
                                    changeColor
                                    href="#"
                                    onClick={() => setMenu('about')}
                                >
                                    About
                                </TextButton>
                            </li>
                            <li>
                                <TextButton
                                    changeColor
                                    href="#"
                                    onClick={() => setMenu('login')}
                                >
                                    Sign in
                                </TextButton>
                            </li>
                        </ul>
                        <Button>Appointments</Button>
                    </nav>
                    <div className="right-menu__div">
                        <h2 className="screen-out__h2">3sixteen</h2>
                        <a href="#">
                            <img src="/images/Logo.png" alt="Logo" />
                        </a>
                        {count && (
                            <button type="button" className="badge__button">
                                {count}
                            </button>
                        )}
                    </div>
                </div>
            </HeaderContainer>
            <hr className="line" />
        </>
    );
};

Header.defaultProps = {
    count: 3,
};

export default Header;

const HeaderContainer = styled.header`
    padding: 0 ${(props) => props.theme.paddings.p40};
    min-height: 86px;
    width: 100%;

    & > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        min-height: inherit;
    }
    .left-menu__nav {
        display: flex;
        align-items: center;

        & > ul {
            display: flex;
            align-items: center;
            height: 100%;

            & > li {
                padding: 0 ${(props) => props.theme.paddings.p10};
                & > a {
                    font-weight: ${(props) => props.theme.fonts.weight.bold};
                }
            }
        }
        & > :last-child {
            font-weight: ${(props) => props.theme.fonts.weight.bold};
        }
    }
    .screen-out__h2 {
        display: none;
    }
    .right-menu__div {
        display: flex;
        align-items: center;
        height: 100%;
        & img {
            width: 5rem;
            height: calc(30 / 14 * 1rem);
            object-fit: cover;
        }
    }
    .badge__button {
        width: calc(21.4 / 14 * 1rem);
        height: calc(21.4 / 14 * 1rem);
        background-color: #000000;
        color: #fff;
        text-align: center;
        padding: 0;
        border-radius: 50%;
        margin-right: ${(props) => props.theme.margins.m10};
        border: none;

        &:hover {
            cursor: pointer;
        }
    }
`;
