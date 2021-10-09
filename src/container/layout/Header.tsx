import TextButton from 'component/Header/TextButton';
import Button from 'component/Header/Button';

import React from 'react';
import styled from 'styled-components';

interface Props {
    item: string;
    count?: number;
}

const Header: React.FC<Props> = ({ item = 'item', count = 3 }) => {
    return (
        <>
            <HeaderContainer>
                <div className="wrapper">
                    <nav className="left-menu__nav">
                        <h2 className="screen-out__h2">메뉴{item}</h2>
                        <ul>
                            <li>
                                <TextButton href="#">Shop</TextButton>
                            </li>
                            <li>
                                <TextButton href="#">News</TextButton>
                            </li>
                            <li>
                                <TextButton href="#">Search</TextButton>
                            </li>
                            <li>
                                <TextButton changeColor href="#">
                                    Visit
                                </TextButton>
                            </li>
                            <li>
                                <TextButton changeColor href="#">
                                    About
                                </TextButton>
                            </li>
                            <li>
                                <TextButton changeColor href="#">
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
        </>
    );
};

Header.defaultProps = {
    count: 3,
};

export default Header;

const HeaderContainer = styled.header`
    padding: 0 2rem;
    min-height: 86px;
    width: 100%;
    border-bottom: 1px solid #dedede;
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
                padding: 0 calc(10.8 / 16 * 1rem);
            }
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
            height: calc(30 / 16 * 1rem);
            object-fit: cover;
        }
    }
    .badge__button {
        width: calc(21.4 / 16 * 1rem);
        height: calc(21.4 / 16 * 1rem);
        background-color: #000000;
        color: #fff;
        border-radius: 40%;
        margin-right: 10px;
        &:hover {
            cursor: pointer;
        }
    }
`;
