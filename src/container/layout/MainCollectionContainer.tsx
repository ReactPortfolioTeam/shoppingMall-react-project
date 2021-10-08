import * as React from 'react';
import styled from 'styled-components';
import { ContainerProps } from './Main_view';

const MainCollectionContainer: React.FC<ContainerProps> = (
    props: ContainerProps
) => {
    return (
        <CollectionContainerStyle>
            <div style={{ width: '20%', height: '200px' }}>사이드바</div>
            <div style={{ width: '80%', height: '200px' }}>
                .collection__contents
            </div>
        </CollectionContainerStyle>
    );
};

const CollectionContainerStyle = styled.section`
    display: flex;
    flex-direction: row;
    padding: 2px;
`;

export default MainCollectionContainer;
