import { API } from 'api/API';
import { FlexBoxDiv } from 'assets/styledComponents/global/globalStyle.style';
import * as React from 'react';
import { useParams } from 'react-router';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import User from 'state/atom/User';
import UserInfo from 'state/atom/UserInfo';
import AccountDashboard from './AccountDashboard';
import AccountHeader from './AccountHeader';

export interface IAppProps {}

const AccountInfo = () => {
    const userInfo = useRecoilValue(User);
    console.log(userInfo);
    return (
        <FlexBoxDiv
            flexDirection="column"
            style={{
                paddingTop: '2.8571428571rem',
                position: 'relative',
                padding: '0 2.8571428571rem 0 2.8571428571rem',
            }}
        >
            <AccountHeader />
            <AccountDashboard />
        </FlexBoxDiv>
    );
};

export default AccountInfo;
