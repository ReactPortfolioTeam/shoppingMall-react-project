import { MyTheme } from 'assets/css/global/theme.style';
import * as React from 'react';
import styled from 'styled-components';
import CollectionContents from './CollectionContents';
import MainCollectionSidebar from './MainCollectionSidebar';
import { ContainerProps } from './Main_view';

const MainCollectionContainer: React.FC<ContainerProps> = (
    props: ContainerProps
) => {
    return (
        <MainCollectionStyle>
            <h3>New Arrivals</h3>
            <CollectionContainerStyle>
                <MainCollectionSidebar />
                <CollectionContents />
            </CollectionContainerStyle>
        </MainCollectionStyle>
    );
};

const MainCollectionStyle = styled.div`
    width: 100%;
    h3 {
        text-align: left;
        margin: ${MyTheme.margins.m5};
    }
`;

const CollectionContainerStyle = styled.section`
    height: max-content;
    display: flex;
    flex-direction: row;
    padding: ${MyTheme.paddings.p1};
    width: auto;
`;

export default MainCollectionContainer;
