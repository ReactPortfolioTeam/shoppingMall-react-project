import TextButton from 'component/Button/TextButton';
import Button from 'component/Button/Button';

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface Props {
    count?: number;
}

const Header: React.FC<Props> = ({ count = 3 }) => {
    return (
        <>
            <HeaderContainer>
                <div className="wrapper">
                    <nav className="left-menu__nav">
                        <h2 className="screen-out__h2">메뉴</h2>
                        <ul>
                            <li>
                                <Link to="shop">
                                    <TextButton href="#">Shop</TextButton>
                                </Link>
                            </li>
                            <li>
                                <TextButton href="#">News</TextButton>
                            </li>
                            <li>
                                <Link to="search">
                                    <TextButton href="#">Search</TextButton>
                                </Link>
                            </li>
                            <li>
                                <TextButton changeColor href="#">
                                    Visit
                                </TextButton>
                            </li>
                            <li>
                                <Link to="about">
                                    <TextButton changeColor href="#">
                                        About
                                    </TextButton>
                                </Link>
                            </li>
                            <li>
                                <Link to="login">
                                    <TextButton changeColor href="#">
                                        Sign in
                                    </TextButton>
                                </Link>
                            </li>
                        </ul>
                        <Button>Appointments</Button>
                    </nav>
                    <div className="right-menu__div">
                        <h2 className="screen-out__h2">3sixteen</h2>
                        <Link to="/">
                            <img src="/images/Logo.png" alt="Logo" />
                        </Link>
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
