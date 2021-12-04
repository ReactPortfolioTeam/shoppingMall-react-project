import Alert from 'component/Modal/Alert';
import React from 'react';
import { useSetRecoilState } from 'recoil';
import { Modal } from 'state/atom/modal/Modal';

export const useAlertModal = () => {
    const setModal = useSetRecoilState(Modal);

    return (text: string, closeFunction: Function = () => {}) =>
        setModal({
            isOpen: true,
            ModalContent: text,
            ModalComponent: Alert,
            ModalClose: () => {
                setModal({ isOpen: false });
                closeFunction();
            },
        });
};
