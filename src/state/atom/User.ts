import { atom } from 'recoil';

export interface UserObject {
    email?: string;
    userid?: string;
    address?: string;
    name?: string;
    join_date?: string;
    level?: string;
}

const User = atom<UserObject>({
    key: 'User',
    default: {},
});

export default User;
