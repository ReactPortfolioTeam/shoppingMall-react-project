import { ButtonHover } from 'component/Button/ButtonHover';
import * as React from 'react';
import styled from 'styled-components';

export interface NewsContentsProps {
    imageSrc: string;
    imageAlt: string;
}

const NewsContents: React.FC<NewsContentsProps> = (p: NewsContentsProps) => {
    const { imageSrc, imageAlt } = p;
    return (
        <NewsContentsStyle>
            <img src={imageSrc} alt={imageAlt} />
            <p>
                <div>
                    <h4>Product Name</h4>
                    <p>Product description</p>
                </div>
                <ButtonHover>Read</ButtonHover>
            </p>
        </NewsContentsStyle>
    );
};

const NewsContentsStyle = styled.div`
    display: flex;
    flex-direction: column;
    & > img {
        object-fit: cover;
    }
    & > p {
        display: flex;
        justify-content: space-between;
        margin: 12px;
        & > div {
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
        }
    }
    & > button {
    }
    & > h4 {
        margin: 8px;
    }
`;

export default NewsContents;
