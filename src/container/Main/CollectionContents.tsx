import * as React from 'react';
import styled from 'styled-components';
import CollectionItem from './CollectionItem';

export interface IAppProps {}

const CollectionContents = (props: IAppProps) => {
    return (
        <CollectionContentsStyle>
            <CollectionItem />
            <CollectionItem />
            <CollectionItem />
            <CollectionItem />
        </CollectionContentsStyle>
    );
};

const CollectionContentsStyle = styled.div`
    overflow-x: scroll;
    display: flex;
`;

export default CollectionContents;
