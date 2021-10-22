import { FlexBoxDiv } from 'assets/styledComponents/global/globalStyle.style';
import * as React from 'react';

interface IAppProps {}

const AccountHeader: React.FC<IAppProps> = (props) => {
    return (
        <FlexBoxDiv
            flexDirection="row"
            justifyContent="space-between"
            className="account-header"
            style={{
                marginTop: '-1.4285714286rem',
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
                <span>CHUN Dae Hwan</span>
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
