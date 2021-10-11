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

const CollectionContainerStyle = styled.section`
    display: flex;
    flex-direction: row;
    padding: ${MyTheme.paddings.p1};
    width: calc((${MyTheme.size.desktop}) * 0.8);
`;

const MainCollectionStyle = styled.div`
    h3 {
        text-align: left;
        margin: ${MyTheme.margins.m5};
    }
`;

export default MainCollectionContainer;
