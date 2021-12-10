import TextButton from 'component/Button/TextButton';
import Button from 'component/Button/Button';

import React, { useEffect, useMemo } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { Modal } from 'state/atom/modal/Modal';
import MiniCart from 'container/MiniCart/MiniCart';
import getSessionUser from 'utils/getSessionUser';
import User from 'state/atom/User';
import Cart from 'state/atom/Cart';
import Alert from 'component/Modal/Alert';
import { useAlertModal } from 'state/actions/useModal';
import { API } from 'api/API';
import Loading from 'component/Modal/Loading';

interface Props {}

const Header: React.FC<Props> = () => {
    const [user, setUser] = useRecoilState(User);
    const isUser = getSessionUser();
    const [modal, setModal] = useRecoilState(Modal);
    const modalAction = useAlertModal();
    const cart = useRecoilValue(Cart);
    const count = useMemo(() => cart.length, [cart]);

    useEffect(() => {
        const sessionUser: any = sessionStorage.getItem('user');
        const parseUser: any = JSON.parse(sessionUser);
        setUser(parseUser);

        API.interceptors.request.use(async (config) => {
            // 요청을 보내기 전에 수행 할 일
            setModal({ isOpen: true, ModalComponent: Loading });

            return config;
        });

        API.interceptors.response.use(
            (response) => {
                console.dir(response);
                setModal({ isOpen: false });
                return response;
            },
            (error) => {
                // 오류 응답 처리
                console.dir(error);
                setModal({ isOpen: false });

                return error;
            }
        );
    }, []);

    const onClickNotWorkingPage = () => {
        modalAction('구현되지 않은 페이지 입니다.');
    };
    return (
        <>
            <HeaderContainer>
                <div className="wrapper">
                    <nav className="left-menu__nav">
                        <h2 className="screen-out__h2">메뉴</h2>
                        <ul>
                            <li>
                                <Link to="./shop">
                                    <TextButton href="#">Shop</TextButton>
                                </Link>
                            </li>
                            <li>
                                <TextButton
                                    onClick={onClickNotWorkingPage}
                                    href="#"
                                >
                                    News
                                </TextButton>
                            </li>
                            <li>
                                <Link to="./search">
                                    <TextButton href="#">Search</TextButton>
                                </Link>
                            </li>
                            <li>
                                <TextButton
                                    onClick={onClickNotWorkingPage}
                                    changeColor
                                    href="#"
                                >
                                    Visit
                                </TextButton>
                            </li>
                            <li>
                                <Link to="./about">
                                    <TextButton changeColor href="#">
                                        About
                                    </TextButton>
                                </Link>
                            </li>
                            {isUser ? (
                                <li>
                                    <Link to="./accountInfo">
                                        <TextButton changeColor href="#">
                                            Account
                                        </TextButton>
                                    </Link>
                                    <span> - {user.userid}</span>
                                </li>
                            ) : (
                                <li>
                                    <Link to="./login">
                                        <TextButton changeColor href="#">
                                            Sign in
                                        </TextButton>
                                    </Link>
                                </li>
                            )}
                        </ul>
                    </nav>
                    <div className="right-menu__div">
                        <h2 className="screen-out__h2">3sixteen</h2>
                        <Link to="https://reactportfolioteam.github.io/shoppingMall-react-project/">
                            <img
                                src="https://reactportfolioteam.github.io/shoppingMall-react-project/images/Logo.png"
                                alt="Logo"
                            />
                        </Link>
                        {count > 0 ? (
                            <button
                                type="button"
                                className="badge__button"
                                onClick={() =>
                                    setModal({
                                        isOpen: true,
                                        ModalComponent: MiniCart,
                                    })
                                }
                            >
                                {count}
                            </button>
                        ) : (
                            <div />
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
                position: relative;
                & > a {
                    font-weight: ${(props) => props.theme.fonts.weight.bold};
                }
                & > span {
                    opacity: 0;
                    position: absolute;
                    width: max-content;
                    color: ${(props) => props.theme.colors.lightGray};
                    top: 0%;
                    left: 100%;
                }
            }
            & > li:hover {
                & > span {
                    display: inline-block;
                    transition: 0.5s;
                    opacity: 1;
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
