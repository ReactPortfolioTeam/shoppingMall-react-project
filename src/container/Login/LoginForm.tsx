import { API } from 'api/API';
import { MyTheme } from 'assets/css/global/theme.style';
import { ButtonHover } from 'component/Button/ButtonHover';
import Input from 'component/Input/Input';
import Alert from 'component/Modal/Alert';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { useSetRecoilState } from 'recoil';
import { Modal } from 'state/atom/modal/Modal';
import User from 'state/atom/User';
import styled from 'styled-components';
import ErrorMessage from 'utils/ErrorMessage';
import { StateToProps } from './Login';

interface LoginFormObject {
    userid: string;
    password: string;
}

const LoginForm: React.FC<StateToProps> = ({ isView, setIsView }) => {
    const LoginFormInitObject: LoginFormObject = {
        userid: '',
        password: '',
    };

    const [loginUser, setLoginUser] = useState<LoginFormObject>(
        LoginFormInitObject
    );
    const [errorMessage, setErrorMessage] = useState<LoginFormObject>(
        LoginFormInitObject
    );
    const setModal = useSetRecoilState(Modal);
    const setUser = useSetRecoilState(User);
    const history = useHistory();

    const changeUser = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginUser((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };
    const onSubmit = async (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();

        setErrorMessage(LoginFormInitObject);
        await API.post('login', JSON.stringify(loginUser))
            .then((res: any) => {
                const { data } = res;
                if (data.statusCode === 200) {
                    const { userInfo } = data;
                    setUser({
                        address: userInfo.address,
                        email: userInfo.email,
                        userid: userInfo.userid,
                    });
                    localStorage.setItem(
                        'token',
                        JSON.stringify({
                            refreshToken: userInfo.refreshToken,
                            token: userInfo.token,
                        })
                    );
                    history.push('');
                }
            })
            .catch((err) => {
                if (err?.response !== undefined) {
                    const { statusCode } = err.response.data;
                    if (statusCode === 400) {
                        ErrorMessage(
                            errorMessage,
                            err.response.data.msg,
                            setErrorMessage
                        );
                    } else if (statusCode === 404) {
                        setModal({
                            isOpen: true,
                            ModalComponent: Alert,
                            ModalClose: () => {
                                setModal({ isOpen: false });
                            },
                            ModalContent: err.response.data.msg,
                        });
                    }
                }
            });
    };

    return (
        <LoginFormContainer>
            {isView ? (
                <fieldset>
                    <legend>
                        <h2>Sign in to your account</h2>
                    </legend>
                    <Input
                        id="userid"
                        value={loginUser.userid}
                        onChange={changeUser}
                        width="100%"
                        errorMessage={errorMessage.userid}
                    />
                    <Input
                        id="password"
                        value={loginUser.password}
                        onChange={changeUser}
                        content="Password"
                        placeholder="Password"
                        type="password"
                        width="100%"
                        errorMessage={errorMessage.password}
                    />
                    <a className="forward__a" href="#">
                        Forgot?
                    </a>
                    <ButtonHover
                        color={MyTheme.colors.white}
                        width="100%"
                        height="50px"
                        type="submit"
                        backgroundColor={MyTheme.colors.dark}
                        onClick={onSubmit}
                    >
                        <>
                            Submit
                            <img
                                src="/images/icon/arrow-top.svg"
                                alt="arrow-right"
                                width="14px"
                                height="14px"
                                className="filter-gray rotate90"
                            />
                        </>
                    </ButtonHover>
                </fieldset>
            ) : (
                <button
                    type="button"
                    onClick={setIsView}
                    className="center-button"
                >
                    Sign in to your account
                </button>
            )}
        </LoginFormContainer>
    );
};

export default LoginForm;

const LoginFormContainer = styled.form`
    width: 390px;
    position: relative;
    fieldset {
        & > legend,
        & > div:first-of-type {
            margin-bottom: ${(props) => props.theme.paddings.p40};
        }
        .forward__a {
            display: block;
            margin: ${(props) => props.theme.margins.m10} 0;
            color: ${(props) => props.theme.colors.gray};
        }
        & > div:last-of-type {
            width: 100%;
        }
    }
`;
