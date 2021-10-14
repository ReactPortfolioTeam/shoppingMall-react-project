/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

interface SlideProps {
    imgObject: Array<string>;
}
interface SlideContainerProps {
    number: number;
}
const Slide: React.FC<SlideProps> = ({ imgObject }) => {
    const [activeNum, setActiveNum] = useState<number>(1);

    useEffect(() => {
        if (activeNum === 0) {
            setActiveNum(imgObject.length);
        } else if (activeNum >= imgObject.length + 1) {
            setActiveNum(1);
        } else {
            clickButton();
        }
    }, [activeNum]);

    const clickButton = () => {
        HtmlTagStyle('#image', 'height', '100%');
        HtmlTagStyle('#image', 'opacity', '0.7');
        HtmlTagStyle('#div', 'background-color', '#fff');
    };

    const HtmlTagStyle = (id: string, style: any, styleValue: string) => {
        const ActiveTag = document?.querySelectorAll<HTMLElement>(
            `${id}${activeNum - 1}`
        )[0];

        for (const i in imgObject) {
            const getTag = document?.querySelectorAll<HTMLElement>(
                `${id}${i}`
            )[0];

            getTag.style.removeProperty(style);
        }

        ActiveTag.style[style] = styleValue;
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
                LeftButton
            </button>
            <button
                className="right-button__button"
                type="button"
                onClick={() => setActiveNum(activeNum + 1)}
            >
                RightButton
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
        bottom: 50px;
        & > div {
            width: 100%;
            margin: 0 ${(props) => props.theme.margins.m2_5};
            height: 2px;
            background-color: ${(props) => props.theme.colors.darkGray};
        }
    }
    & > button {
        position: absolute;
        top: 50%;
    }
    .left-button__button {
        left: 0;
    }
    .right-button__button {
        right: 0;
    }
`;
