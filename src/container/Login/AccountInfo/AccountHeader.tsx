import { API } from 'api/API';
import { FlexBoxDiv } from 'assets/styledComponents/global/globalStyle.style';
import TextButton from 'component/Button/TextButton';
import Alert from 'component/Modal/Alert';
import * as React from 'react';
import { useHistory } from 'react-router';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { Modal } from 'state/atom/modal/Modal';
import User from 'state/atom/User';
import UserInfo from 'state/atom/UserInfo';
import styled from 'styled-components';

interface AccoutHeaderProps {}

const AccountHeader: React.FC<AccoutHeaderProps> = () => {
    const setUser = useSetRecoilState(User);
    const userInfo = useRecoilValue(UserInfo);
    const setModal = useSetRecoilState(Modal);
    const history = useHistory();
    const handleClick = async () => {
        await API.get('logout').then((res: any) => {
            console.dir(res, 'res');
            setUser({});
            sessionStorage.removeItem('user');
            setModal({
                isOpen: true,
                ModalComponent: Alert,
                ModalClose: () => {
                    setModal({ isOpen: false });
                    history.push('');
                },
                ModalContent: res.data.message,
            });
        });
    };
    return (
        <AccountHeaderStyle>
            <FlexBoxDiv
                flexDirection="row"
                justifyContent="space-between"
                className="account-header"
                // style={{
                //     top: 0,
                //     paddingTop: '1.4285714286rem',
                //     paddingBottom: '1.4285714286rem',
                //     borderBottom: '.0714285714rem solid #dedede',
                //     position: 'sticky',
                //     zIndex: 9,
                //     background: '#fff',
                // }}
            >
                <div>
                    <h2>Account</h2>
                    <span>{userInfo.userid}</span>
                </div>
                <div>
                    <TextButton onClick={handleClick}>
                        <span>Sign out</span>
                    </TextButton>
                </div>
            </FlexBoxDiv>
        </AccountHeaderStyle>
    );
};

const AccountHeaderStyle = styled.div`
    top: 0;
    padding-top: 1.4285714286rem;
    padding-bottom: 1.4285714286rem;
    border-bottom: 0.0714285714rem solid #dedede;
    position: sticky;
    z-index: 1;
    background: #fff;
`;

export default AccountHeader;
