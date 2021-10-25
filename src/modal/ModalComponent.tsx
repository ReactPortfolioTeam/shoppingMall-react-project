import ReactDOM from 'react-dom';
import * as React from 'react';

interface ModalProps {
    children: React.ReactNode;
}

export default function ModalPortals(props: ModalProps) {
    const modalElement = document.querySelector('#modal');
    return ReactDOM.createPortal(props.children, modalElement!);
    // createPortal(ModalPortals안에서 랜더링될 컴포넌트, 랜더링 시킬 상위 DOM Element)
}
