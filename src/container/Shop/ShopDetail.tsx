/* eslint-disable indent */
/* eslint-disable react/no-array-index-key */
import { MyTheme } from 'assets/css/global/theme.style';
import { ButtonHover } from 'component/Button/ButtonHover';
import AddCartItem from 'container/Shop/AddCart';
import { useScroll } from 'hooks/useScroll';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import Cart from 'state/atom/Cart';
import { ProductInformation } from 'state/atom/dummy/ProductInformation';
import { Products, ProductsType } from 'state/atom/dummy/Products';
import styled from 'styled-components';

const ShopDetail: React.FC = () => {
    const itemList = useRecoilValue(Products);
    const size = ['S', 'M', 'L', 'XL', 'XXL'];
    const [item, setItem] = useState<ProductsType>();
    const [cart, setCart] = useRecoilState(Cart);
    const [selectItem, setSelectItem] = useState<string>();
    const [innerHeight, setInnerHeight] = useState<number>(window.innerHeight);
    const productInformation = useRecoilValue(ProductInformation);
    const { scrollY } = useScroll();

    useEffect(() => {
        setItem(
            itemList.find(
                (innerItem) =>
                    innerItem.product_id ===
                    parseInt(window.location.pathname.split('product/')[1], 10)
            )
        );
    }, []);
    useEffect(() => {
        const step = Math.floor(scrollY / (innerHeight + 100));
        switch (step) {
            case 0:
                imageChange(0);
                break;
            case 1:
                imageChange(1);
                break;

            case 2:
                imageChange(2);
                break;

            default:
                imageChange(3);
        }
    }, [scrollY]);
    const imageChange = (index: any) => {
        let i = 0;
        while (i < 4) {
            const imageTag = document?.querySelector<HTMLElement>(`#image${i}`);
            if (imageTag !== null) {
                if (index === i) {
                    imageTag.style.opacity = '1';
                } else {
                    imageTag.style.opacity = '0';
                }
            }
            i += 1;
        }
    };

    const onClickAddToBag = () => {
        if (selectItem) {
            AddCartItem(
                item as ProductsType,
                selectItem,
                productInformation,
                cart,
                setCart
            );
            setSelectItem('');
        }
    };

    if (!item) {
        return null;
    }

    return (
        <ContainerDiv>
            <div className="sticky-container__div">
                <div className="sticky__div">
                    <Link to={`shop?menu=${item.keyword}`}>
                        Shop &gt; {item.keyword}
                    </Link>
                    <h1>{item.product_name}</h1>
                    <p className="sub-title__p">{item.sub_product_name}</p>
                    <div>
                        <p>$ {item.price}</p>
                        <div>
                            <button type="button">+ Wishlist</button>
                            <button type="button">Sizing</button>
                        </div>
                    </div>
                    <hr className="line" />
                    <div>
                        <p>{item.depscription}</p>
                        <a href="">Read more</a>
                    </div>
                    <hr className="line" />
                    <div>
                        <p>Size</p>
                        <div>
                            {size.map((item) => (
                                <ButtonHover
                                    onClick={() => setSelectItem(item)}
                                    height="40px"
                                    key={item}
                                    isOverrlay
                                    backgroundColor={
                                        selectItem === item
                                            ? MyTheme.colors.darkGray
                                            : undefined
                                    }
                                >
                                    {item}
                                </ButtonHover>
                            ))}
                        </div>
                    </div>
                    <hr className="line" />
                    <div>
                        <ButtonHover
                            width="100%"
                            backgroundColor={MyTheme.colors.dark}
                            color="white"
                            onClick={onClickAddToBag}
                        >
                            Add to bag
                        </ButtonHover>
                        <span>+</span>
                    </div>
                </div>
                <div className="image-container__div">
                    {item.product_image.map((image: string, index: number) => {
                        return (
                            <div key={image + index}>
                                <img
                                    src={image}
                                    alt={image}
                                    id={`image${index}`}
                                />
                            </div>
                        );
                    })}
                    <div>
                        <p>
                            <strong>Information</strong>
                        </p>
                        <p>{item.depscription}</p>
                    </div>
                </div>
            </div>
            <div className="recommender-item__div"></div>
        </ContainerDiv>
    );
};

export default ShopDetail;

const ContainerDiv = styled.div`
    .sticky-container__div {
        width: 100vw;
        height: auto;
        display: flex;

        & > div:first-child {
            padding: ${(p) => p.theme.paddings.p20};
            padding-left: ${(p) => p.theme.paddings.p40};
            position: sticky;
            height: calc(100vh - 50px);
            top: 105px;
            width: 25%;
            & > a:first-of-type {
                color: ${(p) => p.theme.colors.gray};
            }
            & > h1 {
                margin-top: 20vh;
                font-size: ${(p) => p.theme.fonts.size.title};
            }
            .sub-title__p {
                font-size: ${(p) => p.theme.fonts.size.fs18};
                color: ${(p) => p.theme.colors.gray};
            }
            & > div:nth-of-type(1) {
                margin-top: 35vh;
                display: flex;
                justify-content: space-between;
                & > p {
                    font-size: ${(p) => p.theme.fonts.size.title};
                }
                & > div {
                    & > button {
                        border: none;
                        background-color: ${(p) => p.theme.colors.white};
                        font-size: ${(p) => p.theme.fonts.size.fs10};
                        color: ${(p) => p.theme.colors.gray};
                    }
                }
            }
            & > div:nth-of-type(2) {
                & > p {
                    overflow: hidden;
                    text-overflow: ellipsis;
                    -webkit-line-clamp: 2;
                    line-height: 20px;
                    height: 40px;
                    word-wrap: break-word;
                }
                & > a {
                    margin-top: 10px;
                    color: ${(p) => p.theme.colors.darkGray};
                    font-size: ${(p) => p.theme.fonts.size.fs16};
                    font-weight: ${(p) => p.theme.fonts.weight.bold};
                }
            }
            & > div:nth-of-type(3) {
                display: flex;
                justify-content: space-between;
                align-items: center;
                & > p {
                    font-size: ${(p) => p.theme.fonts.size.fs18};
                }
                & > div {
                    & > div {
                        & > button {
                            padding: 10px;
                            border: none;
                        }
                    }
                }
            }
            & > div:nth-of-type(4) {
                position: relative;
                height: auto;
                & > div {
                    width: 100%;
                    display: flex;
                    justify-content: center;
                }
                & > span {
                    position: absolute;
                    top: 50%;
                    right: 20px;
                    line-height: 0;
                    color: ${(p) => p.theme.colors.gray};
                    font-size: 30px;
                }
            }
        }
        & > div:last-child {
            width: 75%;
            position: relative;
            & > div {
                position: sticky;
                top: 0;
                & > img {
                    width: 75vw;
                    height: 100vh;
                    transition: all 0.3;
                }
            }
            & > div:nth-of-type(4) {
                position: relative;
                margin-top: 265px;
            }
            & > div:last-child {
                position: relative;
                display: flex;
                flex-direction: column;
                align-items: center;
                height: 500px;
                p:first-child {
                    margin-top: 50px;
                }
                p {
                    width: 300px;
                }
                strong {
                    font-weight: ${(p) => p.theme.fonts.weight.bold};
                }
            }
        }
    }
`;
