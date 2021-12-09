import * as React from 'react';
import styled from 'styled-components';
import { DaeHwanStyle } from 'assets/css/global/DaeHwan.style';
import { useRecoilValue } from 'recoil';
import { Link } from 'react-router-dom';
import User from 'state/atom/User';

interface IAppProps {}

const AccountWelcome: React.FC<IAppProps> = () => {
    const userInfo = useRecoilValue(User);
    return (
        <AccountWelcomeStyle>
            <DaeHwanStyle>
                <div id="account-welcome" className="account-section">
                    <div className="welcome-inner">
                        <h3>Hey {userInfo.name}.</h3>
                        <p className="p-lg">
                            <br />
                            <br />
                            Welcome to your new 3sixteen account. Here,
                            you&apos;ll be able to create a wish list of items
                            that are definitely on your radar, but may need to
                            think on for a bit before it&apos;s time to cop.
                            <br />
                            <br />
                            You&apos;ll also be able to access your full order
                            history, set preferred sizes, and edit your address
                            book to make your overall experience easier.
                        </p>
                        <Link
                            className="welcome-button button-cta has-icon"
                            to="./accountInfo/editProfile"
                        >
                            회원정보 변경
                            <span className="inline-icon">
                                <svg viewBox="0 0 14 14">
                                    <path
                                        d="M11.815 6.527L9.182 3.894l.707-.707 3.89 3.89-3.89 3.888-.707-.707 2.731-2.73H0v-1h11.815z"
                                        fill="#000"
                                        fillRule="nonzero"
                                    ></path>
                                </svg>
                            </span>
                        </Link>
                    </div>
                </div>
            </DaeHwanStyle>
        </AccountWelcomeStyle>
    );
};

const AccountWelcomeStyle = styled.div`
    .welcome-inner {
        width: 100%;
        padding: 0 6.7857142857rem 0 13.5714285714rem;
        margin: 0 auto;
        & > h3 {
            font-weight: 500;
            font-size: 1.4285714286rem;
            line-height: 1.7857142857rem;
        }
        & > p {
            color: #555;
            font-weight: 400;
            font-size: 1.4285714286rem;
            line-height: 1.7857142857rem;
        }
        .welcome-button {
            text-decoration: none;
            vertical-align: baseline;
            display: table;
            margin: 5.7142857143rem auto 0;
        }
    }
`;

export default AccountWelcome;
