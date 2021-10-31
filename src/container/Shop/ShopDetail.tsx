/* eslint-disable indent */
/* eslint-disable react/no-array-index-key */
import { MyTheme } from 'assets/css/global/theme.style';
import { ButtonHover } from 'component/Button/ButtonHover';
import { useScroll } from 'hooks/useScroll';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { Products } from 'state/atom/dummy/Products';
import styled from 'styled-components';

interface Product {
    product_id: number;
    category_id: number;
    product_name: string;
    sub_product_name: string;
    price: number;
    depscription: string;
    keyword: string;
    product_image: string[];
    product_date: string;
}

const ShopDetail: React.FC = () => {
    const itemList = useRecoilValue(Products);
    const size = ['S', 'M', 'L', 'XL', 'XXL'];
    const [item, setItem] = useState<Product[]>();
    const [innerHeight, setInnerHeight] = useState<number>(window.innerHeight);
    const { scrollY } = useScroll();

    useEffect(() => {
        setItem(
            itemList.filter(
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

    if (!item) {
        return null;
    }

    return (
        <ContainerDiv>
            <div className="sticky-container__div">
                <div className="sticky__div">
                    <Link to={`shop?menu=${item[0].keyword}`}>
                        Shop &gt; {item[0].keyword}
                    </Link>
                    <h1>{item[0].product_name}</h1>
                    <p className="sub-title__p">{item[0].sub_product_name}</p>
                    <div>
                        <p>$ {item[0].price}</p>
                        <div>
                            <button type="button">+ Wishlist</button>
                            <button type="button">Sizing</button>
                        </div>
                    </div>
                    <hr className="line" />
                    <div>
                        <p>{item[0].depscription}</p>
                        <a href="">Read more</a>
                    </div>
                    <hr className="line" />
                    <div>
                        <p>Size</p>
                        <div>
                            {size.map((item) => (
                                <ButtonHover height="40px" key={item}>
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
                        >
                            Add to bag
                        </ButtonHover>
                        <span>+</span>
                    </div>
                </div>
                <div className="image-container__div">
                    {item[0].product_image.map(
                        (image: string, index: number) => {
                            return (
                                <div key={image + index}>
                                    <img
                                        src={image}
                                        alt={image}
                                        id={`image${index}`}
                                    />
                                </div>
                            );
                        }
                    )}
                    <div>
                        <p>
                            <strong>Information</strong>
                        </p>
                        <p>{item[0].depscription}</p>
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
