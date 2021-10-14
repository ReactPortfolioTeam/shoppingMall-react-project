import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

interface SlideProps {
    imgObject: Array<string>;
}
interface SlideContainerProps {
    number: number;
}

const AboutContent = () => {
    const dummyImage = [
        'https://picsum.photos/1500/1000',
        'https://picsum.photos/1400/1000',
        'https://picsum.photos/1300/1000',
        'https://picsum.photos/1200/1000',
        'https://picsum.photos/1100/1000',
        'https://picsum.photos/1000/1000',
        'https://picsum.photos/1900/1000',
        'https://picsum.photos/1800/1000',
    ];
    return (
        <AboutContentContainer>
            <p>
                Everything about the jean, from the cut to the buttons, rivets,
                leather patch, and stitch color, was selected to demonstrate a
                level of lasting quality and versatility.
            </p>
            <p>
                We’ve since added several fits in more than 10 different
                fabrics, but our approach has not changed: every jean produced
                by 3sixteen is designed to become a permanent fixture in our
                lineup.
            </p>
            <Slide imgObject={dummyImage}></Slide>
        </AboutContentContainer>
    );
};

const Slide: React.FC<SlideProps> = ({ imgObject }) => {
    const [activeNum, setActiveNum] = useState<number>(1);

    useEffect(() => {
        if (activeNum === 0) {
            setActiveNum(imgObject.length);
        } else if (activeNum >= imgObject.length + 1) {
            setActiveNum(1);
        }
    }, [activeNum]);
    return (
        <SlideContainer number={activeNum}>
            {imgObject.map((item, index) => {
                return <img id={`image${index}`} src={item} alt="LoremImage" />;
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
                hi
            </button>
            <button
                className="right-button__button"
                type="button"
                onClick={() => setActiveNum(activeNum + 1)}
            >
                hi
            </button>
        </SlideContainer>
    );
};

export default AboutContent;

const AboutContentContainer = styled.article`
    width: 100%;
    padding: 0 13%;
`;

const SlideContainer = styled.div<SlideContainerProps>`
    width: 100%;
    height: 50vw;
    overflow: hidden;
    position: relative;
    & > img {
        width: 100%;
        height: 100%;
        transition: opacity 0.2s, height 0.001s;
    }
    & > img:nth-child(${(props) => props.number}) {
        visibility: visible;
        height: 100%;
        opacity: 0.7;
    }
    & > img:not(:nth-child(${(props) => props.number})) {
        position: absolute;
        height: 0;
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
        & > div:nth-child(${(props) => props.number}) {
            background-color: ${(props) => props.theme.colors.white};
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
