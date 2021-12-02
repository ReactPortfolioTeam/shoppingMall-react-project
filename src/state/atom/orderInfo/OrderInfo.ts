import { atom } from 'recoil';

const OrderInfo = atom({
    key: 'OrderInfo',
    default: {
        email: '',
        name: '',
        address: '',
        detailedAddress: '',
        phone: '',
    },
});

export default OrderInfo;
