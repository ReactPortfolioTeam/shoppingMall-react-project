import { atom } from 'recoil';

const OrderId = atom({
    key: 'OrderInfo',
    default: {
        orderId: undefined,
    },
});

export default OrderId;
