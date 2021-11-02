import { randomInt } from 'crypto';
import * as React from 'react';
import { useRecoilValue } from 'recoil';
import { Products } from 'state/atom/dummy/Products';
import styled from 'styled-components';
import { ContainerProps, MainViewStyle } from './Main_view';
import NewsContents from './News__contents';

const MainNewsContainer: React.FC<ContainerProps> = (p: ContainerProps) => {
    const products = useRecoilValue(Products);
    const newsContentsList = [
        products[0],
        products[4],
        products[7],
        products[9],
    ];
    return (
        <MainViewStyle id="main__view__newsContainer">
            {newsContentsList.map((item) => (
                <NewsContents
                    imageSrc={item.product_image[2]}
                    imageAlt={item.product_name}
                    product_name={item.product_name}
                    sub_product_name={item.sub_product_name}
                />
            ))}
        </MainViewStyle>
    );
};

export default MainNewsContainer;
