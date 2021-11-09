import { atom } from 'recoil';

interface ModalTypes {
    isOpen: boolean;
    ModalComponent?: any;
    ModalContent?: string;
    ModalClose?: any;
}

export const Modal = atom<ModalTypes>({
    key: 'Modal',
    default: {
        isOpen: false,
        ModalComponent: undefined,
        ModalContent: undefined,
        ModalClose: undefined,
    },
});
