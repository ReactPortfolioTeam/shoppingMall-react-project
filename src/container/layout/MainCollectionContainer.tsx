import * as React from 'react';
import styled from 'styled-components';
import CollectionContents from './CollectionContents';
import MainCollectionSidebar from './MainCollectionSidebar';
import { ContainerProps } from './Main_view';

const MainCollectionContainer: React.FC<ContainerProps> = (
    props: ContainerProps
) => {
    return (
        <CollectionContainerStyle>
            <MainCollectionSidebar />
            <CollectionContents />
        </CollectionContainerStyle>
    );
};

const CollectionContainerStyle = styled.section`
    display: flex;
    flex-direction: row;
    padding: 2px;
    width: 600px;
    border: 2px solid black;
`;

export default MainCollectionContainer;
