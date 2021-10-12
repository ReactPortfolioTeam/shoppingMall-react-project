import { MyTheme } from 'assets/css/global/theme.style';
import * as React from 'react';
import styled from 'styled-components';
import CollectionItem from './CollectionItem';

export interface IAppProps {}

const CollectionContents = (props: IAppProps) => {
    return (
        <CollectionContentsStyle>
            <CollectionItem
                imgSrc="https://picsum.photos/300?random=1"
                imgAlt="sampleImg"
            />
            <CollectionItem
                imgSrc="https://picsum.photos/300?random=2"
                imgAlt="sampleImg"
            />
            <CollectionItem
                imgSrc="https://picsum.photos/300?random=3"
                imgAlt="sampleImg"
            />
            <CollectionItem
                imgSrc="https://picsum.photos/300?random=4"
                imgAlt="sampleImg"
            />
            <CollectionItem
                imgSrc="https://picsum.photos/300?random=5"
                imgAlt="sampleImg"
            />
            <CollectionItem
                imgSrc="https://picsum.photos/300?random=6"
                imgAlt="sampleImg"
            />
            <CollectionItem
                imgSrc="https://picsum.photos/300?random=1"
                imgAlt="sampleImg"
            />
            <CollectionItem
                imgSrc="https://picsum.photos/300?random=1"
                imgAlt="sampleImg"
            />
        </CollectionContentsStyle>
    );
};

const CollectionContentsStyle = styled.div`
    width: auto;
    overflow-x: scroll;
    overflow-y: hidden;
    &::-webkit-scrollbar {
        height: 4px;
        background-color: transparent;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #222327;
        background-clip: padding-box;
        border: 1px solid transparent;
        border-radius: 10px;
    }
    &::-webkit-scrollbar-track {
        background-color: transparent;
        border-radius: 16px;
        box-shadow: inset 0px 0px 5px white;
    }
    display: flex;
`;

export default CollectionContents;
