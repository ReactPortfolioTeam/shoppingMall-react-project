import { FlexBoxDiv } from 'assets/styledComponents/global/globalStyle.style';
import TextButton from 'component/Button/TextButton';
import Input from 'component/Input/Input';
import { FC, useState, ChangeEvent } from 'react';
import styled from 'styled-components';

interface editProfileProps {}

interface userInfo {
    userid: string;
    name: string;
    email: string;
    password: string;
    address: string;
}

const EditProfile: FC<editProfileProps> = (props) => {
    const initialUserInfo: userInfo = {
        userid: 'dhchun1203',
        name: '전대환',
        email: 'dhchun1203@gmail.com',
        password: 'qlalf0628',
        address: '수지구 신수로 19',
    };
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
    function renderSwitch(editMode: string): JSX.Element {
        switch (editMode) {
            case 'editPassword':
                return (
                    <Input
                        id="input prev-password"
                        content="현재 비밀번호를 입력해주세요"
                        value={inputValue.prevPassword}
                        name="prevPassword"
                        onChange={handleChange}
                    />
                );
            case 'editEmail':
                return (
                    <Input
                        id="input next-email"
                        content="변경할 이메일 주소를 입력해주세요"
                        value={inputValue.nextEmail}
                        name="nextEmail"
                        onChange={handleChange}
                    />
                );
            case 'editAddress':
                return (
                    <Input
                        id="input next-address"
                        content="변경할 주소를 입력해주세요"
                        value={inputValue.nextAddress}
                        name="nextAddress"
                        onChange={handleChange}
                    />
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
                    // justifyContent="center"
                    alignItems="center"
                    className="information-wrapper prev-information-wrapper"
                >
                    <FlexBoxDiv
                        flexDirection="row"
                        justifyContent="space-between"
                        className="prev-information__content prev-id-wrapper"
                    >
                        <h2>User id</h2>
                        <div>{initialUserInfo.userid}</div>
                    </FlexBoxDiv>
                    <FlexBoxDiv
                        flexDirection="row"
                        justifyContent="space-between"
                        className="prev-information__content prev-name-wrapper"
                    >
                        <h2>Name</h2>
                        <div>{initialUserInfo.name}</div>
                    </FlexBoxDiv>
                    <FlexBoxDiv
                        flexDirection="row"
                        justifyContent="space-between"
                        className="prev-information__content prev-email-wrapper"
                    >
                        <h2>Email</h2>
                        <div>{initialUserInfo.email}</div>
                    </FlexBoxDiv>
                    <FlexBoxDiv
                        flexDirection="row"
                        justifyContent="space-between"
                        className="prev-information__content prev-address-wrapper"
                    >
                        <h2>Address</h2>
                        <div>{initialUserInfo.address}</div>
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
                            id="editEmail"
                            width="max-content"
                            onClick={handleClick}
                        >
                            Edit Email
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
                    line-height: 100px;
                    align-self: center;
                }
            }
        }
    }
`;
export default EditProfile;
