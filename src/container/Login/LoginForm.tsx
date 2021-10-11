import { MyTheme } from 'assets/css/global/theme.style';
import { ButtonHover } from 'component/Button/ButtonHover';
import Input from 'component/Input/Input';
import React, { useState } from 'react';
import styled from 'styled-components';
import { StateToProps } from './Login';

const LoginForm: React.FC<StateToProps> = ({ isView, setIsView }) => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const changeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const changePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    return (
        <LoginFormContainer>
            {isView ? (
                <fieldset>
                    <legend>
                        <h2>Sign in to your account</h2>
                    </legend>
                    <Input
                        id="email"
                        value={email}
                        onChange={changeEmail}
                        width="100%"
                    />
                    <Input
                        id="password"
                        value={password}
                        onChange={changePassword}
                        content="Password"
                        placeholder="Password"
                        type="password"
                        width="100%"
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
