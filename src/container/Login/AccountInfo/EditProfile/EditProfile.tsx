import { FlexBoxDiv } from 'assets/styledComponents/global/globalStyle.style';
import TextButton from 'component/Button/TextButton';
import { FC, useState, ChangeEvent, useCallback, memo } from 'react';
import styled from 'styled-components';
import { API } from 'api/API';
import { useRecoilState, useSetRecoilState } from 'recoil';
import InputCheckout from 'component/Input/inputCheckout';
import Button from 'component/Button/Button';
import User from 'state/atom/User';
import { Modal } from 'state/atom/modal/Modal';
import Alert from 'component/Modal/Alert';
import ErrorMessage from 'utils/ErrorMessage';
import { useHistory } from 'react-router';

interface editProfileProps {}

interface editProfileFormObject {
    prevPassword?: string;
    password?: string;
    confirmPassword?: string;
    address?: string;
}

const EditProfile: FC<editProfileProps> = (props) => {
    const history = useHistory();
    const setUser = useSetRecoilState(User);
    const [userInfo, setUserInfo] = useRecoilState(User);
    const [editMode, setEditMode] = useState<string>('');
    const [inputValue, setInputValue] = useState({
        nextEmail: '',
        nextAddress: '',
        prevPassword: '',
        nextPassword: '',
        confirmNextPassword: '',
    });
    const editProfileFormInitObject: editProfileFormObject = {
        prevPassword: '',
        password: '',
        confirmPassword: '',
        address: '',
    };
    const [errorMessage, setErrorMessage] = useState<editProfileFormObject>(
        editProfileFormInitObject
    );
    const setModal = useSetRecoilState(Modal);
    const handleClick = useCallback(
        (e: ChangeEvent<HTMLElement>) => {
            setEditMode(e.target.id);
        },
        [editMode]
    );
    const handleChange = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            const newValue = e.target.value;
            setInputValue({ ...inputValue, [e.target.name]: newValue });
        },
        [inputValue]
    );
    const handleSubmit = useCallback(async () => {
        if (inputValue.nextPassword !== inputValue.confirmNextPassword) {
            const localErrorMsg = '재확인 비밀번호가 일치하지 않습니다.';
            setErrorMessage({
                ...errorMessage,
                confirmPassword: localErrorMsg,
            });
            return;
        }
        setErrorMessage(editProfileFormInitObject);
        switch (editMode) {
            case 'editPassword':
                await API.post('userInfo/updatePassword', {
                    userid: userInfo.userid,
                    prevPassword: inputValue.prevPassword,
                    password: inputValue.nextPassword,
                }).then((res: any) => {
                    if (res.data?.status === 200) {
                        const { data } = res;
                        API.get('logout').then((res: any) => {
                            console.dir(res, 'res');
                            setUser({});
                            sessionStorage.removeItem('user');
                            setModal({
                                isOpen: true,
                                ModalComponent: Alert,
                                ModalClose: () => {
                                    setModal({ isOpen: false });
                                    history.push('/login');
                                },
                                ModalContent: data.msg,
                            });
                        });
                    } else if (res.response.status === 400) {
                        ErrorMessage(
                            errorMessage,
                            res.response.data.msg,
                            setErrorMessage
                        );
                    } else if (res.response.status === 401) {
                        setErrorMessage({
                            ...errorMessage,
                            prevPassword: res.response.data.msg,
                        });
                    }
                });
                break;
            case 'editAddress':
                API.post('userInfo/updateAddress', {
                    userid: userInfo.userid,
                    address: inputValue.nextAddress,
                }).then((res: any) => {
                    if (res.data?.status === 200) {
                        const { data } = res;
                        console.log(data);
                        setUserInfo({
                            ...userInfo,
                            address: data.address,
                        });
                        API.get('logout').then((res: any) => {
                            console.dir(res, 'res');
                            setUser({});
                            sessionStorage.removeItem('user');
                            setModal({
                                isOpen: true,
                                ModalComponent: Alert,
                                ModalClose: () => {
                                    setModal({ isOpen: false });
                                    history.push('/login');
                                },
                                ModalContent: data.msg,
                            });
                        });
                    } else if (res.response.status === 400) {
                        ErrorMessage(
                            errorMessage,
                            res.response.data.msg,
                            setErrorMessage
                        );
                    }
                });
                break;
            default:
        }
    }, [inputValue, errorMessage]);
    function renderSwitch(editMode: string): JSX.Element {
        switch (editMode) {
            case 'editPassword':
                return (
                    <>
                        <InputCheckout
                            type="password"
                            id="input prev-password"
                            content="현재 비밀번호를 입력해주세요"
                            value={inputValue.prevPassword}
                            name="prevPassword"
                            onChange={handleChange}
                            errorMessage={errorMessage.prevPassword}
                        />
                        <InputCheckout
                            type="password"
                            id="input next-password"
                            content="변경할 비밀번호를 입력해주세요"
                            placeholder="변경할 비밀번호를 입력해주세요"
                            value={inputValue.nextPassword}
                            name="nextPassword"
                            onChange={handleChange}
                            errorMessage={errorMessage.password}
                        />
                        <InputCheckout
                            type="password"
                            id="input confirm-next-password"
                            content="변경할 비밀번호를 한번 더 입력해주세요"
                            value={inputValue.confirmNextPassword}
                            name="confirmNextPassword"
                            onChange={handleChange}
                            errorMessage={errorMessage.confirmPassword}
                        />
                        <Button
                            type="submit"
                            width="max-content"
                            onClick={handleSubmit}
                        >
                            제출
                        </Button>
                    </>
                );
            case 'editAddress':
                return (
                    <>
                        <InputCheckout
                            id="input next-address"
                            content="변경할 주소를 입력해주세요"
                            value={inputValue.nextAddress}
                            name="nextAddress"
                            onChange={handleChange}
                            errorMessage={errorMessage.address}
                        />
                        <Button
                            type="submit"
                            width="max-content"
                            onClick={handleSubmit}
                        >
                            제출
                        </Button>
                    </>
                );

            default:
                return <></>;
        }
    }
    return (
        <EditProfileStyle>
            <section className="editProfile-section">
                <FlexBoxDiv
                    flexDirection="column"
                    alignItems="center"
                    className="information-wrapper prev-information-wrapper"
                >
                    <FlexBoxDiv
                        flexDirection="row"
                        justifyContent="space-between"
                        className="prev-information__content prev-id-wrapper"
                    >
                        <h2>User id</h2>
                        <div>{userInfo.userid}</div>
                    </FlexBoxDiv>
                    <FlexBoxDiv
                        flexDirection="row"
                        justifyContent="space-between"
                        className="prev-information__content prev-name-wrapper"
                    >
                        <h2>Name</h2>
                        <div>{userInfo.name}</div>
                    </FlexBoxDiv>
                    <FlexBoxDiv
                        flexDirection="row"
                        justifyContent="space-between"
                        className="prev-information__content prev-email-wrapper"
                    >
                        <h2>Email</h2>
                        <div>{userInfo.email}</div>
                    </FlexBoxDiv>
                    <FlexBoxDiv
                        flexDirection="row"
                        justifyContent="space-between"
                        className="prev-information__content prev-address-wrapper"
                    >
                        <h2>Address</h2>
                        <div>{userInfo.address}</div>
                    </FlexBoxDiv>
                </FlexBoxDiv>
                <FlexBoxDiv
                    flexDirection="column"
                    className="information-wrapper next-information-wrapper"
                >
                    <div className="edit-button-wrapper">
                        <TextButton
                            id="editPassword"
                            width="max-content"
                            onClick={handleClick}
                        >
                            Edit Password
                        </TextButton>
                        <TextButton
                            id="editAddress"
                            width="max-content"
                            onClick={handleClick}
                        >
                            Edit Address
                        </TextButton>
                    </div>
                    <div className="edit-wrapper">{renderSwitch(editMode)}</div>
                </FlexBoxDiv>
            </section>
        </EditProfileStyle>
    );
};
const EditProfileStyle = styled.section`
    width: 100%;

    .editProfile-section {
        display: flex;
        flex-direction: column;
        align-content: center;
        margin: 0 ${(props) => props.theme.margins.m40};

        & > .information-wrapper {
            padding: ${(props) => props.theme.paddings.p40} 0;
            &.prev-information-wrapper {
                & > .prev-information__content {
                    width: 60%;
                    align-self: center;
                    margin-bottom: ${(props) => props.theme.margins.m20};
                    padding-bottom: ${(props) => props.theme.paddings.p10};
                    border-bottom: 1px solid
                        ${(props) => props.theme.colors.lightGray};
                }
            }
            &.next-information-wrapper {
                position: relative;
                display: flex;
                flex-direction: column;
                border: 1px solid ${(props) => props.theme.colors.lightGray};
                & > .edit-button-wrapper {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-around;
                }
                & > .edit-wrapper {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    align-self: center;

                    & > Button {
                        align-self: center;
                        margin-top: ${(props) => props.theme.margins.m40};
                    }
                }
            }
        }
    }
`;
export default memo(EditProfile);
