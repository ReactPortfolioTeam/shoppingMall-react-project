import { useRecoilValue } from 'recoil';
import { FilterProductList } from 'state/selector/dummy/FilterProductList';
import styled from 'styled-components';
import ShopItem from './ShopItem';

const ShopContent: React.FC = () => {
    const Item = useRecoilValue(FilterProductList);
    return (
        <ShopContents>
            {Item.map((item) => (
                <ShopItem item={item} key={item.product_id} />
            ))}
            {Item.length === 0 && (
                <h2>해당 카테고리 상품이 존재하지 않습니다.</h2>
            )}
        </ShopContents>
    );
};

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
    & > h2 {
        margin-top: 30px;
    }
`;

export default ShopContent;
