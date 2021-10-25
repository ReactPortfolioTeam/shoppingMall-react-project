import { atom } from 'recoil';

interface ModalTypes {
    isOpen: boolean;
    ModalComponent?: any;
}

export const Modal = atom<ModalTypes>({
    key: 'Modal',
    default: {
        isOpen: false,
        ModalComponent: undefined,
    },
});
