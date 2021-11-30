import { FlexBoxDiv } from 'assets/styledComponents/global/globalStyle.style';
import TextButton from 'component/Button/TextButton';
import Input from 'component/Input/Input';
import { FC, useState, ChangeEvent, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { API } from 'api/API';
import { useHistory, useParams } from 'react-router';
import UserInfo from 'state/atom/UserInfo';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import InputCheckout from 'component/Input/inputCheckout';
import Button from 'component/Button/Button';

interface editProfileProps {}

interface userIdObject {
    userid: string;
}

const EditProfile: FC<editProfileProps> = (props) => {
    const { userid }: userIdObject = useParams();
    const userInfo = useRecoilValue(UserInfo);
    const setUserInfo = useSetRecoilState(UserInfo);
    const getUserInfo = async () => {
        try {
            await API.get(`userInfo/list/${userid}`).then((res: any) => {
                const { data } = res;
                if (res.status === 200) {
                    setUserInfo({
                        userid: data.userid,
                        password: data.password,
                        email: data.email,
                        name: data.name,
                        address: data.address,
                        join_date: data.join_date,
                        level: data.level,
                    });
                }
            });
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        getUserInfo();
    }, []);
    const [editMode, setEditMode] = useState<string>('');
    const [inputValue, setInputValue] = useState({
        nextEmail: '',
        nextAddress: '',
        prevPassword: '',
        nextPassword: '',
        confirmNextPassword: '',
    });
    const handleClick = (e: ChangeEvent<HTMLElement>) => {
        setEditMode(e.target.id);
    };
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setInputValue({ ...inputValue, [e.target.name]: newValue });
    };
    const handleSubmit = () => {
        if (inputValue.nextPassword !== inputValue.confirmNextPassword) {
            const localErrorMsg = '재확인 비밀번호가 일치하지 않습니다.';
            alert(localErrorMsg);
            return;
        }
        try {
            switch (editMode) {
                case 'editPassword':
                    API.post('userInfo/updatePassword', {
                        userid: userInfo.userid,
                        prevPassword: inputValue.prevPassword,
                        password: inputValue.nextPassword,
                    });
                    alert('비밀번호가 변경되었습니다.');
                    window.location.replace(
                        `/accountInfo/editProfile/${userid}`
                    );
                    return;
                case 'editAddress':
                    API.post('userInfo/updateAddress', {
                        userid: userInfo.userid,
                        address: inputValue.nextAddress,
                    });
                    window.location.replace(
                        `/accountInfo/editProfile/${userid}`
                    );

                    return;
                default:
                    return;
            }
        } catch (error) {
            console.error(error);
        }
    };
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
                        />
                        <InputCheckout
                            type="password"
                            id="input next-password"
                            content="변경할 비밀번호를 입력해주세요"
                            placeholder="변경할 비밀번호를 입력해주세요"
                            value={inputValue.nextPassword}
                            name="nextPassword"
                            onChange={handleChange}
                        />
                        <InputCheckout
                            type="password"
                            id="input confirm-next-password"
                            content="변경할 비밀번호를 한번 더 입력해주세요"
                            value={inputValue.confirmNextPassword}
                            name="confirmNextPassword"
                            onChange={handleChange}
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
                    }
                }
            }
        }
    }
`;
export default EditProfile;
