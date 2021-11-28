import { FlexBoxDiv } from 'assets/styledComponents/global/globalStyle.style';
import * as React from 'react';
import { useRecoilValue } from 'recoil';
import UserInfo from 'state/atom/UserInfo';

interface AccoutHeaderProps {}

const AccountHeader: React.FC<AccoutHeaderProps> = () => {
    const userInfo = useRecoilValue(UserInfo);
    return (
        <FlexBoxDiv
            flexDirection="row"
            justifyContent="space-between"
            className="account-header"
            style={{
                top: 0,
                paddingTop: '1.4285714286rem',
                paddingBottom: '1.4285714286rem',
                borderBottom: '.0714285714rem solid #dedede',
                position: 'sticky',
                zIndex: 9,
                background: '#fff',
            }}
        >
            <div>
                <h2>Account</h2>
                <span>{userInfo.userid}</span>
            </div>
            <div>
                <a
                    href="#"
                    style={{
                        textAlign: 'center',
                        lineHeight: '1.4285714286rem',
                    }}
                >
                    <span>Sign out</span>
                </a>
            </div>
        </FlexBoxDiv>
    );
};

export default AccountHeader;
