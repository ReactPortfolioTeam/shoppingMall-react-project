import React from 'react';
import styled from 'styled-components';
import ShopItem from './ShopItem';

const ShopContent= ()=>{
    
    return(
        <ShopContents>
            <ShopItem/>
            <ShopItem/>
            <ShopItem/>
            <ShopItem/>
            <ShopItem/>
            <ShopItem/>
            <ShopItem/>
        </ShopContents>
    )
}

export const ShopContents = styled.div`
    width: 80%;
    -webkit-flex-wrap: wrap;
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
`

export default ShopContent;