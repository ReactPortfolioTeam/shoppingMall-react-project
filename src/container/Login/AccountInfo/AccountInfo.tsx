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
interface userIdObject {
    userid: string;
}

const AccountInfo = () => {
    const { userid }: userIdObject = useParams();
    // Header 에서 account 클릭시 로그인되어있는 user(User.ts)의 userid를 파라미터로 넣어서 push할 것
    const userInfo = useRecoilValue(UserInfo);
    const setUserInfo = useSetRecoilState(UserInfo);
    const getUserInfo = async () => {
        try {
            await API.get(`userInfo/list/${userid}`).then((res: any) => {
                const { data } = res;
                if (res.status === 200) {
                    setUserInfo({
                        userid: data.userid,
                        password: data.password,
                        email: data.email,
                        name: data.name,
                        address: data.address,
                        join_date: data.join_date,
                        level: data.level,
                    });
                }
            });
        } catch (error) {
            console.error(error);
        }
    };
    React.useEffect(() => {
        getUserInfo();
    }, []);
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
