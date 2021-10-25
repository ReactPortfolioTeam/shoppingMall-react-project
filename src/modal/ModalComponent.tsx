/* eslint-disable no-else-return */
import ReactDOM from 'react-dom';
import * as React from 'react';
import { useRecoilValue } from 'recoil';
import { Modal } from 'state/atom/modal/Modal';

export default function ModalPortals() {
    const modal = useRecoilValue(Modal);

    const modalElement = document.querySelector('#modal');
    if (modal.isOpen) {
        return ReactDOM.createPortal(<modal.ModalComponent />, modalElement!!);
    } else {
        return null;
    }
    // createPortal(ModalPortals안에서 랜더링될 컴포넌트, 랜더링 시킬 상위 DOM Element)
}
