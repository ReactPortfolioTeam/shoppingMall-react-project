import * as React from 'react';
import styled from 'styled-components';
import CollectionItem from './CollectionItem';

export interface IAppProps {}

const CollectionContents = (props: IAppProps) => {
    return (
        <CollectionContentsStyle>
            <CollectionItem
                imgSrc="https://picsum.photos/300"
                imgAlt="sampleImg"
            />
            <CollectionItem
                imgSrc="https://picsum.photos/300"
                imgAlt="sampleImg"
            />
            <CollectionItem
                imgSrc="https://picsum.photos/300"
                imgAlt="sampleImg"
            />
            <CollectionItem
                imgSrc="https://picsum.photos/300"
                imgAlt="sampleImg"
            />
        </CollectionContentsStyle>
    );
};

const CollectionContentsStyle = styled.div`
    overflow-x: scroll;
    display: flex;
`;

export default CollectionContents;
