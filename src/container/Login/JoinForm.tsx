/* eslint-disable no-unused-expressions */
/* eslint-disable no-restricted-syntax */
import { API } from 'api/API';
import { MyTheme } from 'assets/css/global/theme.style';
import { ButtonHover } from 'component/Button/ButtonHover';
import Input from 'component/Input/Input';
import Alert from 'component/Modal/Alert';
import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { Modal } from 'state/atom/modal/Modal';
import styled from 'styled-components';
import ErrorMessage from 'utils/ErrorMessage';
import { StateToProps } from './Login';

interface userObject {
    [index: string]: string;
    name: string;
    email: string;
    password: string;
    confirmPw: string;
    address: string;
    userid: string;
}
let timer: any;
const JoinForm: React.FC<StateToProps> = ({ isView, setIsView }) => {
    const userObjectInitState: userObject = {
        userid: '',
        name: '',
        email: '',
        password: '',
        confirmPw: '',
        address: '',
    };

    const [user, setUser] = useState<userObject>(userObjectInitState);
    const [errorMessage, setErrorMessage] = useState<userObject>(
        userObjectInitState
    );
    const [duplicateCheck, setDuplicateCheck] = useState<boolean>(false);
    const setModal = useSetRecoilState(Modal);

    const changeUser = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser((prev) => ({ ...prev, [e.target.id]: e.target.value }));
        // if (e.target.id === 'userid') {
        //     clearTimeout(timer);
        //     timer = setTimeout(() => {
        //         checkDuplicateId();
        //     }, 1000);
        // }
    };
    const checkDuplicateId = async () => {
        if (!duplicateCheck) {
            setErrorMessage(userObjectInitState);
            await API.get('signup/check', {
                params: {
                    userid: user.userid,
                },
            })
                .then((res: any) =>
                    setModal({
                        isOpen: true,
                        ModalClose: () => {
                            setModal({ isOpen: false });
                            setDuplicateCheck(true);
                        },
                        ModalComponent: Alert,
                        ModalContent: '해당 아이디로 사용하시겠습니까?',
                    })
                )
                .catch((err) => {
                    if (
                        err?.response !== undefined &&
                        err.response.status === 400
                    )
                        setModal({
                            isOpen: true,
                            ModalClose: () => {
                                setModal({ isOpen: false });
                            },
                            ModalComponent: Alert,
                            ModalContent: err.response.data.msg[0].msg,
                        });
                });
        }
    };
    const onSubmit = async (e: React.MouseEvent) => {
        e.preventDefault();
        setErrorMessage(userObjectInitState);
        API.post('signup', JSON.stringify(user))
            .then((res: any) =>
                setModal({
                    isOpen: true,
                    ModalComponent: Alert,
                    ModalClose: () => {
                        setIsView(!isView);
                        setModal({ isOpen: false });
                    },
                    ModalContent: res.data.msg,
                })
            )
            .catch((err) => {
                if (err?.response !== undefined && err.response.status === 400)
                    ErrorMessage(
                        errorMessage,
                        err.response.data.msg,
                        setErrorMessage
                    );
            });
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
                        disabled={duplicateCheck}
                        onBlur={checkDuplicateId}
                        errorMessage={errorMessage.userid}
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
                        errorMessage={errorMessage.name}
                    />

                    <Input
                        id="email"
                        value={user.email}
                        onChange={changeUser}
                        width="100%"
                        type="email"
                        content="Email Address"
                        errorMessage={errorMessage.email}
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
                        errorMessage={errorMessage.password}
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
                        errorMessage={errorMessage.confirmPw}
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
                        errorMessage={errorMessage.address}
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
