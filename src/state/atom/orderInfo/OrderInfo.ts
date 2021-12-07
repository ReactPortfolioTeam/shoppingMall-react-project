import { atom } from 'recoil';

const OrderInfo = atom({
    key: 'OrderInfo',
    default: {
        userid: '',
        email: '',
        name: '',
        address: '',
        detailedAddress: '',
        phone: '',
    },
});

export default OrderInfo;
