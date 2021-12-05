import { useRecoilState, useRecoilValue } from 'recoil';
import { Modal } from 'state/atom/modal/Modal';
import styled from 'styled-components';
import Button from '../Button/Button';

const DuplicateCheck: React.FC = () => {
    const [modal, setModal] = useRecoilState(Modal);
    return (
        <ModalContainer>
            <div>
                <p>{modal.ModalContent}</p>
                <div>
                    <Button onClick={modal.ModalClose}>사용하기</Button>
                    <Button onClick={() => setModal({ isOpen: false })}>
                        다른 아이디로
                    </Button>
                </div>
            </div>
        </ModalContainer>
    );
};

export default DuplicateCheck;

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
        flex-direction: column;
        min-width: 300px;
        min-height: 100px;
        box-shadow: 0px 4px 4px 5px rgba(0, 0, 0, 0.25);
        background-color: ${(p) => p.theme.colors.white};
        border-radius: 4px;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        justify-content: center;
        align-items: center;
        & > div {
            width: 70%;
            display: flex;
            margin: 10px 0px 0px;
            justify-content: space-between;
            & > button {
                user-select: none;
            }
        }
    }
`;
