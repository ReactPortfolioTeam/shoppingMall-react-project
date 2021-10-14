import { MyTheme } from 'assets/css/global/theme.style';
import { ButtonHover } from 'component/Button/ButtonHover';
import Input from 'component/Input/Input';
import React, { useState } from 'react';
import styled from 'styled-components';
import { StateToProps } from './Login';

interface userObject {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

const JoinForm: React.FC<StateToProps> = ({ isView, setIsView }) => {
    const [user, setUser] = useState<userObject>({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });

    const changeUser = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };

    return (
        <JoinFormContainer
            action="http://localhost:8080/api/v1/signup"
            method="post"
        >
            {isView ? (
                <fieldset>
                    <legend>
                        <h2>Create a new account</h2>
                    </legend>
                    <div className="name-box__div">
                        <Input
                            id="firstName"
                            value={user.firstName}
                            onChange={changeUser}
                            width="50%"
                            content="First Name"
                            placeholder="First"
                            name="name"
                        />
                        <Input
                            id="lastName"
                            value={user.lastName}
                            onChange={changeUser}
                            width="50%"
                            content="Last Name"
                            placeholder="Last"
                            name="name"
                        />
                    </div>
                    <Input
                        id="email"
                        value={user.email}
                        onChange={changeUser}
                        width="100%"
                        content="Email Address"
                    />
                    <Input
                        width="100%"
                        id="password"
                        value={user.password}
                        onChange={changeUser}
                        content="Password"
                        placeholder="6 or more characters"
                        name="password"
                    />
                    <ButtonHover
                        width="100%"
                        backgroundColor={MyTheme.colors.dark}
                        color={MyTheme.colors.white}
                        type="submit"
                    >
                        <>
                            Create account
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
                    Create a new account
                </button>
            )}
        </JoinFormContainer>
    );
};

export default JoinForm;

const JoinFormContainer = styled.form`
    width: 390px;
    height: 360px;
    position: relative;

    .name-box__div {
        display: flex;
        & > div {
            width: 45%;
        }
        & > div:first-child {
            margin-right: 10%;
        }
    }
    & > fieldset {
        & > div:not(:last-of-type) {
            margin-top: ${(props) => props.theme.margins.m40};
        }
        & > div:last-of-type {
            width: 100%;
            margin-top: ${(props) => props.theme.margins.m20};
        }
    }
`;
