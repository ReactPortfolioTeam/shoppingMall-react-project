import React from 'react';
import { MyTheme } from 'assets/css/global/theme.style';
import styled from 'styled-components';
import MainCollectionSidebar from '../Main/MainCollectionSidebar';
import ShopContent from "./ShopContent";

const Shop = ()=>{
    return(
        <ShopMainStyle>
            <ShopContainerStyle>
                <MainCollectionSidebar />
                <ShopContent/>
            </ShopContainerStyle>
        </ShopMainStyle>
    )
}


const ShopMainStyle = styled.div`
    width: 100%;
    h3 {
        text-align: left;
    }
`;

const ShopContainerStyle = styled.section`
    height: max-content;
    display: flex;
    flex-direction: row;
    padding: ${MyTheme.paddings.p1};
    width: auto;
`;

export default Shop;