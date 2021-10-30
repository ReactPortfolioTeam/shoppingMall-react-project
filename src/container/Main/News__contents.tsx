import { FlexBoxDiv } from 'assets/styledComponents/global/globalStyle.style';
import Button from 'component/Button/Button';
import { ButtonHover } from 'component/Button/ButtonHover';
import * as React from 'react';
import styled from 'styled-components';

export interface NewsContentsProps {
    imageSrc: string;
    imageAlt: string;
    product_name: string;
    sub_product_name: string;
}

const NewsContents: React.FC<NewsContentsProps> = (p: NewsContentsProps) => {
    const { imageSrc, imageAlt, product_name, sub_product_name } = p;
    return (
        <NewsContentsStyle>
            <img src={imageSrc} alt={imageAlt} />
            <p>
                <FlexBoxDiv
                    flexDirection="column"
                    justifyContent="space-between"
                >
                    <h4>{product_name}</h4>
                    <p>{sub_product_name}</p>
                </FlexBoxDiv>
                <ButtonHover isOverrlay>Read</ButtonHover>
            </p>
        </NewsContentsStyle>
    );
};

const NewsContentsStyle = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    width: 100%;
    & > img {
        object-fit: cover;
    }
    & > p {
        display: flex;
        position: absolute;
        bottom: 3rem;
        width: 90%;
        justify-content: space-between;
        align-items: center;
        margin: 12px;
        & > div {
            display: flex;
            flex-direction: column;
        }
    }
    & > button {
    }
    & > h4 {
        margin: 8px;
    }
`;

export default NewsContents;
