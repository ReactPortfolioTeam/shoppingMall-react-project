import { API } from 'api/API';
import { MyTheme } from 'assets/css/global/theme.style';
import axios from 'axios';
import { ButtonHover } from 'component/Button/ButtonHover';
import Input from 'component/Input/Input';
import React, { useState } from 'react';
import styled from 'styled-components';
import { StateToProps } from './Login';

interface userObject {
    name: string;
    email: string;
    password: string;
    confirmPw: string;
    address: string;
    userid: string;
}

const JoinForm: React.FC<StateToProps> = ({ isView, setIsView }) => {
    const [user, setUser] = useState<userObject>({
        userid: '',
        name: '',
        email: '',
        password: '',
        confirmPw: '',
        address: '',
    });

    const changeUser = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const onSubmit = async (e: React.MouseEvent) => {
        e.preventDefault();
        API.post('signup', JSON.stringify(user))
            .then((res) => console.log('res', res))
            .catch((err) => console.log('err', err.response.data.msg));
    };

    return (
        <JoinFormContainer>
            {isView ? (
                <fieldset>
                    <legend>
                        <h2>Create a new account</h2>
                    </legend>

                    <Input
                        id="userid"
                        value={user.userid}
                        onChange={changeUser}
                        width="100%"
                        content="User id"
                        placeholder="User id"
                        name="userid"
                        type="text"
                    />
                    <Input
                        id="name"
                        value={user.name}
                        onChange={changeUser}
                        width="100%"
                        content="User Name"
                        placeholder="User Name"
                        name="name"
                        type="text"
                    />

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
                        type="password"
                    />
                    <Input
                        width="100%"
                        id="confirmPw"
                        value={user.confirmPw}
                        onChange={changeUser}
                        content="confirmPw"
                        placeholder="6 or more characters"
                        name="confirmPw"
                        type="password"
                    />
                    <Input
                        width="100%"
                        id="address"
                        value={user.address}
                        onChange={changeUser}
                        content="address"
                        placeholder="address"
                        name="address"
                        type="text"
                    />
                    <ButtonHover
                        width="100%"
                        backgroundColor={MyTheme.colors.dark}
                        color={MyTheme.colors.white}
                        type="submit"
                        onClick={onSubmit}
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
    height: auto;
    min-height: 360px;
    position: relative;

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
