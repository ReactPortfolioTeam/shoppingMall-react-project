import { FlexBoxDiv } from 'assets/styledComponents/global/globalStyle.style';
import * as React from 'react';
import AccountAddress from './AccountAddress';
import AccountOrders from './AccountOrders';
import AccountSize from './AccountSize';
import AccountWelcome from './AccountWelcome';
import AccountWish from './AccountWish';

interface AccountDashboardProps {}

const AccountDashboard: React.FC<AccountDashboardProps> = () => {
    return (
        <FlexBoxDiv
            className="account-dashboard-wrapper"
            flexDirection="column"
            style={{
                verticalAlign: 'baseline',
            }}
        >
            <AccountWelcome />
            <AccountSize />
            <AccountWish />
            <AccountOrders />
            <AccountAddress />
        </FlexBoxDiv>
    );
};

export default AccountDashboard;
