import { FlexBoxDiv } from 'assets/styledComponents/global/globalStyle.style';
import * as React from 'react';
import AccountDashboard from './AccountDashboard';
import AccountHeader from './AccountHeader';

export interface IAppProps {}

const AccountInfo = () => {
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
