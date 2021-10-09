import * as React from 'react';
import styled from 'styled-components';
<<<<<<< HEAD
import MainCollectionContainer from './MainCollectionContainer';
import MainNewsContainer from './MainNewsContainer';

export interface ContainerProps {
    children?: React.ReactNode;
}

const MainView: React.FC<ContainerProps> = (p: ContainerProps) => {
    return (
        <MainViewStyle id="main__view">
            <MainNewsContainer />
            <MainCollectionContainer />
        </MainViewStyle>
    );
};

export const MainViewStyle = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
    margin: 0 0 8px 0;
=======

const MainView: React.FC = () => {
    return (
        <MainViewContainer id="main__view">
            <div style={{ height: '200px' }}>item</div>
            <div style={{ height: '200px' }}>item</div>
            <div style={{ height: '200px' }}>item</div>
            <div style={{ height: '200px' }}>item</div>
            <div style={{ height: '200px' }}>item</div>
        </MainViewContainer>
    );
};

const MainViewContainer = styled.main`
    display: flex;
    flex-direction: column;
>>>>>>> bb16c117fbb48958f364b5913c62c61270fb6717
    border: 2px solid black;
`;

export default MainView;
