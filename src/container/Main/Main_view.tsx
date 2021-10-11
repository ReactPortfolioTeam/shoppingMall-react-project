import { MyTheme } from 'assets/css/global/theme.style';
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
            <MainContentsStyle>
                <MainNewsContainer />
                <MainCollectionContainer />
            </MainContentsStyle>
        </MainViewStyle>
    );
};

export const MainViewStyle = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
    margin: 0 0 ${MyTheme.margins.m10} 0;
`;
export const MainContentsStyle = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: calc((${MyTheme.size.desktop}) * 0.8);
`;

export default MainView;
