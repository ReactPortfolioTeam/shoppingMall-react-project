import * as React from 'react';
import styled from 'styled-components';
import { ContainerProps, MainViewContainer } from './Main_view';

const MainNewsContainer: React.FC<ContainerProps> = (p: ContainerProps) => {
    const { children } = p;
    return (
        <MainViewContainer>
            <div style={{ height: '400px' }}>.new__contents</div>
            <div style={{ height: '400px' }}>.new__contents</div>
            <div style={{ height: '400px' }}>.new__contents</div>
            <div style={{ height: '400px' }}>.new__contents</div>
        </MainViewContainer>
    );
};

export default MainNewsContainer;
