import { MyTheme } from 'assets/css/global/theme.style';
import styled from 'styled-components';
import MainCollectionSidebar from '../Main/MainCollectionSidebar';
import ShopContent from './ShopContent';

const Shop = () => {
    return (
        <ShopMainStyle>
            <ShopContainerStyle>
                <MainCollectionSidebar />
                <ShopContent />
            </ShopContainerStyle>
        </ShopMainStyle>
    );
};

const ShopMainStyle = styled.div`
    h3 {
        text-align: left;
    }
`;

const ShopContainerStyle = styled.section`
    display: flex;
    flex-direction: row;
    padding: ${MyTheme.paddings.p1};
    width: 100%;
`;

export default Shop;
