import { useRecoilValue } from 'recoil';
import { Products } from 'state/atom/dummy/Products';

const ShopDetail: React.FC = () => {
    const itemList = useRecoilValue(Products);
    const item: any = itemList.filter(
        (itemList) =>
            item.product_id === window.location.pathname.split('product/')[1]
    );

    return <div></div>;
};

export default ShopDetail;
