import * as React from 'react';
import styled from 'styled-components';
import MainCollectionContainer from './MainCollectionContainer';
import MainNewsContainer from './MainNewsContainer';

export interface ContainerProps {
    children?: React.ReactNode;
}

const MainView: React.FC<ContainerProps> = (p: ContainerProps) => {
    return (
        <MainViewContainer id="main__view">
            <MainNewsContainer />
            <MainCollectionContainer />
        </MainViewContainer>
    );
};

export const MainViewContainer = styled.main`
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0;
    border: 2px solid black;
`;

export default MainView;
