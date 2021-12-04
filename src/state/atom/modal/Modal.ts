import Alert from 'component/Modal/Alert';
import { atom, useSetRecoilState } from 'recoil';

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

export const ModalOpen = () => {
    const setModal = useSetRecoilState(Modal);
    setModal({
        isOpen: true,
        ModalComponent: Alert,
        ModalContent: '로딩중입니다.',
        ModalClose: () => {
            setModal({ isOpen: false });
        },
    });
};
