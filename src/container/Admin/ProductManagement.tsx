/* eslint-disable prefer-const */
/* eslint-disable no-return-assign */
import Input from 'component/Input/Input';
import React, { useState } from 'react';
import styled from 'styled-components';

interface ProductContent {
    product_name: string;
    sub_product_name: string;
    price: number;
    depscription: string;
    keyword: string;
    product_image: string;
    product_date: string;
}

const ProductManagement = () => {
    const [product, setProduct] = useState<any>({
        product_name: '',
        sub_product_name: '',
        price: null,
        depscription: '',
        keyword: '',
        product_image: '',
        product_date: '',
    });
    const ObjectArray = (item: object) => {
        let result: any = [];
        Object.entries(item).forEach(([key, value]) =>
            result.push(
                <Input
                    id={key}
                    name={key}
                    type="text"
                    value={product[key]}
                    onChange={ChangeProduct}
                    placeholder={key}
                    content={key}
                />
            )
        );

        return result;
    };

    const ChangeProduct = (e: any) => {
        console.log(e.target.name);
        // setProduct(prev => ...prev,prev[e.target.name]:e.target.value);
    };

    return (
        <ProductManagementContainer>
            <form>
                <legend>
                    <h1>상품 등록</h1>
                </legend>
                <div className="form-control">{ObjectArray(product)}</div>
            </form>
        </ProductManagementContainer>
    );
};

export default ProductManagement;
const ProductManagementContainer = styled.div`
    padding: 20px;
    .form-control {
        div {
            margin-top: 30px;
        }
    }
`;
