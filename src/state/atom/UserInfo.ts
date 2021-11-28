import { atom } from 'recoil';

export interface UserInfoObject {
    userid: string;
    password: string;
    email: string;
    name: string;
    address: string;
    join_date: string;
    level: string;
}

const UserInfo = atom<UserInfoObject>({
    key: 'UserInfo',
    default: {
        userid: '',
        password: '',
        email: '',
        name: '',
        address: '',
        join_date: '',
        level: '',
    },
});

export default UserInfo;
