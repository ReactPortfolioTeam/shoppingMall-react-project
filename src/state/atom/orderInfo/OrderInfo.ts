import { atom } from 'recoil';

const OrderInfo = atom({
    key: 'OrderInfo',
    default: {
        email: '',
        firstName: '',
        lastName: '',
        address: '',
        detailedAddress: '',
        phone: '',
    },
});

export default OrderInfo;
