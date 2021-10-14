import { MyTheme } from 'assets/css/global/theme.style';
import React from 'react';
import styled from 'styled-components';
import SearchItem from './SearchItem';
import SearchResultCount from './SearchResultCount';

export interface IAppProps {}

const SearchContent: React.FC<IAppProps> = () => {
    return (
        <SearchContentStyle>
            <SearchResultCount count={10} />
            <ItemContainerStyle>
                <SearchItem />
                <SearchItem />
                <SearchItem />
                <SearchItem />
                <SearchItem />
                <SearchItem />
                <SearchItem />
                <SearchItem />
            </ItemContainerStyle>
        </SearchContentStyle>
    );
};

export const SearchContentStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    & > h2 {
        width: 80%;
        border-bottom: 1px solid black;
        padding-bottom: ${MyTheme.paddings.p20};
    }
`;

export const ItemContainerStyle = styled.div`
    width: 80%;
    flex-wrap: wrap;
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

export default SearchContent;
