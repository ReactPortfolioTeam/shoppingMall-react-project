import { FlexBoxDiv } from 'assets/styledComponents/global/globalStyle.style';
import TextButton from 'component/Button/TextButton';
import Input from 'component/Input/Input';
import { FC, useState, ChangeEvent, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { API } from 'api/API';
import { useParams } from 'react-router';
import UserInfo from 'state/atom/UserInfo';
import { useRecoilValue } from 'recoil';
import InputCheckout from 'component/Input/inputCheckout';
import Button from 'component/Button/Button';

interface editProfileProps {}

const EditProfile: FC<editProfileProps> = (props) => {
    const userInfo = useRecoilValue(UserInfo);
    console.log(userInfo);
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
    let localErrorMsg: string;
    const handleSubmit = () => {
        if (inputValue.nextPassword !== inputValue.confirmNextPassword) {
            localErrorMsg = '입력하신 비밀번호가 일치하지 않습니다.';
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
                    return;
                case 'editAddress':
                    API.post('userInfo/updateAddress', {
                        userid: userInfo.userid,
                        address: inputValue.nextAddress,
                    });
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
                            id="input prev-password"
                            content="현재 비밀번호를 입력해주세요"
                            value={inputValue.prevPassword}
                            name="prevPassword"
                            onChange={handleChange}
                        />
                        <InputCheckout
                            id="input next-password"
                            content="변경할 비밀번호를 입력해주세요"
                            placeholder="변경할 비밀번호를 입력해주세요"
                            value={inputValue.nextPassword}
                            name="nextPassword"
                            onChange={handleChange}
                        />
                        <InputCheckout
                            id="input confirm-next-password"
                            content="변경할 비밀번호를 한번 더 입력해주세요"
                            value={inputValue.confirmNextPassword}
                            name="confirmNextPassword"
                            onChange={handleChange}
                        />
                        <Button type="submit" onClick={handleSubmit}>
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
                        <Button type="submit" onClick={handleSubmit}>
                            제출
                        </Button>
                    </>
                );

            default:
                return <span>변경하고 싶은 항목을 클릭하세요.</span>;
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
                    align-self: center;
                }
            }
        }
    }
`;
export default EditProfile;
