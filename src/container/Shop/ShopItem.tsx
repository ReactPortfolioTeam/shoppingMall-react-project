import { MyTheme } from 'assets/css/global/theme.style';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';

interface Props {
    item: any;
}

const ShopItem: React.FC<Props> = ({ item }) => {
    const [selected, setSelected] = useState(false);

    const onClickCapture = (e: React.MouseEvent) => {
        e.stopPropagation();
        setSelected((prev) => !prev);
    };
    const onClickItem = (e: any) => {
        history.push(`/shop/product/${item.product_id}`);
    };
    const history = useHistory();
    return (
        <ShopItemWithQuickAdd onClick={onClickItem}>
            <img
                width="100%"
                height="100%"
                src={item.product_image[0]}
                alt={item.product_name}
            />
            <div className="cart">
                {!selected && (
                    <div className="hover-target">
                        <span>+Add Cart</span>
                    </div>
                )}

                {selected && (
                    <div className="display-option-container">
                        <button
                            onClickCapture={onClickCapture}
                            type="button"
                            className="option"
                        >
                            X
                        </button>
                        <input
                            onClickCapture={() => alert('구현 필요')}
                            className="add-cart"
                            id="add"
                            type="submit"
                            value="Add to "
                        />
                    </div>
                )}

                <div className="container">
                    {!selected && (
                        <div>
                            <button
                                type="button"
                                onClickCapture={onClickCapture}
                                className="soldout"
                            >
                                S
                            </button>
                            <button
                                type="button"
                                onClickCapture={onClickCapture}
                                className=""
                            >
                                S
                            </button>
                            <button
                                type="button"
                                onClickCapture={onClickCapture}
                                className=""
                            >
                                S
                            </button>
                            <button
                                type="button"
                                onClickCapture={onClickCapture}
                                className=""
                            >
                                S
                            </button>
                            <button
                                type="button"
                                onClickCapture={onClickCapture}
                                className=""
                            >
                                S
                            </button>
                        </div>
                    )}
                </div>
            </div>
            <div className="meta-data">
                <h3 style={{ display: 'inline-block' }}>{item.product_name}</h3>
                <span style={{ float: 'right' }}>${item.price}</span>
                <span style={{ display: 'block' }}>
                    {item.sub_product_name}
                </span>
            </div>
        </ShopItemWithQuickAdd>
    );
};
export const ShopItemWithQuickAdd = styled.div`
    width: 45%;
    margin: ${MyTheme.margins.m20};
    position: relative;
    margin-bottom: ${MyTheme.margins.m80};
    cursor: pointer;
    //이미지 내부에 위치한 카트 관련 기능
    & div.cart {
        display: inline-block;
        background-color: white;
        position: absolute;
        width: 100px;
        height: 30px;
        left: 20px;
        bottom: 5%;
        cursor: pointer;
        display: none;
        //사이즈 선택 시 뒤로가거나 카트 넣기 기능 툴팁 컨테이너
        & .display-option-container {
            width: 150%;
            justify-content: left;

            & .option {
                display: inline-block;
                width: 25%;
                height: 100%;
                background-color: white;
                color: black;
                border: none;
                cursor: pointer;
            }

            & .add-cart {
                width: 75%;
                height: 100%;
                background-color: black;
                color: white;
                font-size: ${MyTheme.fonts.size.fs18};
                cursor: pointer;
            }
        }
        //////////////////옵션 표시 및 카트 툴팁 컨테이너 끝//////////////////////////

        & div {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        & .container {
            display: none;

            & div {
                display: inline-block;
                width: max-content;

                & button {
                    display: inline-block;
                    width: 50px;
                    height: 30px;
                    background-color: white;
                    text-align: center;
                    line-height: 30px;
                    cursor: pointer;
                    position: relative;
                    margin-right: -6px;
                    border: none;
                }
                & button.soldout::before {
                    content: '';
                    position: absolute;
                    width: 90%;
                    height: 2px;
                    background-color: black;
                    bottom: 50%;
                    left: 10%;
                    transform: rotate(90edeg);
                }
            }
        }
    }

    &:hover div.cart {
        display: block;
    }

    & div.cart:hover .hover-target {
        display: none;
        & ~ div {
            display: block;
        }
    }
    & div.meta-data {
        width: 100%;
        position: absolute;
        bottom: -40px;
    }
`;
export default ShopItem;
