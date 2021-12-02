import { useRecoilValue } from 'recoil';
import { Modal } from 'state/atom/modal/Modal';
import styled from 'styled-components';

const Alert: React.FC = () => {
    const modal = useRecoilValue(Modal);
    return (
        <ModalContainer>
            <div>
                <button type="button" onClick={modal.ModalClose}>
                    X
                </button>
                <p>{modal.ModalContent}</p>
            </div>
        </ModalContainer>
    );
};

export default Alert;

const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 9;
    & > div {
        position: fixed;
        display: flex;
        min-width: 300px;
        min-height: 71px;
        box-shadow: 0px 4px 4px 5px rgba(0, 0, 0, 0.25);
        background-color: ${(p) => p.theme.colors.white};
        border-radius: 4px;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        justify-content: center;
        align-items: center;
        & > button {
            position: absolute;
            top: 5px;
            right: 5px;
            background-color: white;
            border: none;
            cursor: pointer;
        }
    }
`;
