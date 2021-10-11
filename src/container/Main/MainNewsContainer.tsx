import * as React from 'react';
import styled from 'styled-components';
import { ContainerProps, MainViewStyle } from './Main_view';
import NewsContents from './News__contents';

const MainNewsContainer: React.FC<ContainerProps> = (p: ContainerProps) => {
    const { children } = p;
    return (
        <MainViewStyle id="main__view__newsContainer">
            <NewsContents
                imageSrc="https://picsum.photos/800/600"
                imageAlt="randomImg"
            />
            <NewsContents
                imageSrc="https://picsum.photos/800/600"
                imageAlt="randomImg"
            />
            <NewsContents
                imageSrc="https://picsum.photos/800/600"
                imageAlt="randomImg"
            />
            <NewsContents
                imageSrc="https://picsum.photos/800/600"
                imageAlt="randomImg"
            />
        </MainViewStyle>
    );
};

export default MainNewsContainer;
