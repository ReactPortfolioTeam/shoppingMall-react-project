import React, { useState } from 'react';
import styled from 'styled-components';
import JoinForm from './JoinForm';
import LoginForm from './LoginForm';

export interface StateToProps {
    isView: boolean;
    setIsView: any;
}

const Login = () => {
    const [loginMenu, setLoginMenu] = useState<boolean>(true);
    return (
        <LoginContainer>
            <div className="wrapper__div">
                <div className="login-row__div">
                    <LoginForm
                        isView={loginMenu}
                        setIsView={() => setLoginMenu(!loginMenu)}
                    />
                </div>
                <hr className="line" />
                <div className="join-row__div">
                    <JoinForm
                        isView={!loginMenu}
                        setIsView={() => setLoginMenu(!loginMenu)}
                    />
                </div>
            </div>
        </LoginContainer>
    );
};

export default Login;

const LoginContainer = styled.div`
    display: flex;
    align-items: center;
    height: calc(100vh - 86px);
    width: 100%;
    padding: ${(props) => props.theme.paddings.p40};
    & > div {
        width: 100%;
        display: flex;

        & > div {
            width: 50%;
            display: flex;
            justify-content: center;
            padding: 0 ${(props) => props.theme.paddings.p40};
        }
        & > hr {
            width: 0;
        }
    }
`;
