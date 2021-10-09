import * as React from 'react';
import styled from 'styled-components';
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
    border: 2px solid black;
`;

export default MainView;
