/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { HtmlTagStyle } from 'utils/HtmlTagStyle';

interface SlideProps {
    imgObject: Array<string>;
}
interface SlideContainerProps {
    number: number;
}
const Slide: React.FC<SlideProps> = ({ imgObject }) => {
    const [activeNum, setActiveNum] = useState<number>(1);

    useEffect(() => {
        //  activeNum 1 ~ Object.length 까지 존재
        if (activeNum === 0) {
            setActiveNum(imgObject.length);
        } else if (activeNum >= imgObject.length + 1) {
            setActiveNum(1);
        } else {
            clickButton();
        }
    }, [activeNum]);

    const clickButton = () => {
        //  리팩토링 할 예정 효율적으로 너무 안좋은 스타일 이라 생각됩니다.
        const imageStyle = [
            {
                styleName: 'height',
                styleValue: '100%',
            },
            {
                styleName: 'opacity',
                styleValue: '0.7',
            },
        ];
        const divStyle = [
            { styleName: 'background-color', styleValue: '#fff' },
        ];

        HtmlTagStyle('#image', imageStyle, activeNum, imgObject.length + 1);
        HtmlTagStyle('#div', divStyle, activeNum, imgObject.length + 1);
    };

    return (
        <SlideContainer number={activeNum}>
            {imgObject.map((item, index) => {
                return (
                    <img
                        id={`image${index}`}
                        src={item}
                        key={`image${item}`}
                        alt="LoremImage"
                    />
                );
            })}
            <div>
                {imgObject.map((item, index) => (
                    <div key={`div${item}`} id={`div${index}`} />
                ))}
            </div>
            <button
                className="left-button__button"
                type="button"
                onClick={() => setActiveNum(activeNum - 1)}
            >
                &lt;
            </button>
            <button
                className="right-button__button"
                type="button"
                onClick={() => setActiveNum(activeNum + 1)}
            >
                &gt;
            </button>
        </SlideContainer>
    );
};

export default Slide;

const SlideContainer = styled.div<SlideContainerProps>`
    width: 100%;
    height: 50vw;
    overflow: hidden;
    position: relative;
    & > img {
        width: 100%;
        height: 100%;
        transition: opacity 0.2s, height 0.001s;
        position: absolute;
        opacity: 0;
    }

    & > div {
        width: 100%;
        display: flex;
        position: absolute;
        bottom: 30px;
        & > div {
            width: 100%;
            margin: 0 ${(props) => props.theme.margins.m2_5};
            height: 1.5px;
            background-color: ${(props) => props.theme.colors.darkGray};
        }
    }
    & > button {
        position: absolute;
        top: 50%;
        width: 40px;
        height: 40px;
        background-color: rgba(255, 255, 255, 0.75);
        color: ${(p) => p.theme.colors.gray};
        font-size: ${(p) => p.theme.fonts.size.title};
        cursor: pointer;
        border: none;
        transition: all 0.25s;
        :hover {
            background-color: rgba(255, 255, 255, 1);
        }
    }

    .left-button__button {
        left: 0;
        transform: translateX(-100%);
    }
    .right-button__button {
        right: 0;
        transform: translateX(100%);
    }

    :hover {
        .left-button__button {
            transform: translateX(0%);
        }
        .right-button__button {
            transform: translateX(0%);
        }
    }
`;
