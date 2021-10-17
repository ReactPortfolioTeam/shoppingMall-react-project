/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import Slide from 'component/Slide/Slide';
import React from 'react';
import styled from 'styled-components';

const AboutContent = () => {
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
            <Slide imgObject={dummyImage} />
            <p>
                This guiding philosophy is evident in the pieces we&apos;ve
                developed since then: our shirts, jackets, basics and
                accessories all take cues in form and function from our jeans.
                Fabrics and trims are always chosen for their capacity to
                develop character with time.
            </p>
            <p>
                Our company’s foundation is in our faith. Humility and integrity
                are equally important to us as quality and design. We also
                strive to cultivate strong relationships with the artists,
                craftsmen, and friends to whom we owe our success. With our
                quarterly interview feature, Singularities, and our artist
                collaboration project, Vanguard, 3sixteen always aspires to pay
                due respect.
            </p>
            <p>3sixteen: the last shall be first.</p>
            <p>
                <strong>Recommended Reading:</strong>
            </p>
            <ul>
                <li>
                    <a href="#">&quot;Start to Finish&quot; (Hypebeast)</a>
                </li>
                <li>
                    <a href="#">&quot;Start to Finish&quot; (Hypebeast)</a>
                </li>
                <li>
                    <a href="#">&quot;Start to Finish&quot; (Hypebeast)</a>
                </li>
            </ul>
        </AboutContentContainer>
    );
};

export default AboutContent;

const AboutContentContainer = styled.article`
    width: 100%;
    padding: 0 13%;

    & > p,
    ul {
        width: 40%;
        margin-top: ${(p) => p.theme.margins.m40};
    }
    & > p {
        line-height: 120%;
        color: ${(p) => p.theme.colors.gray};
    }
    strong,
    a {
        font-weight: ${(p) => p.theme.fonts.weight.bold};
        color: ${(p) => p.theme.colors.dark};
    }
    ul {
        margin-left: ${(p) => p.theme.margins.m10};
        list-style-type: disc;
    }
    & > div {
        margin-top: ${(p) => p.theme.margins.m40};
    }
`;

const dummyImage = [
    'https://picsum.photos/1500/1000?random=1',
    'https://picsum.photos/1500/1000?random=8',
    'https://picsum.photos/1500/1000?random=7',
    'https://picsum.photos/1500/1000?random=6',
    'https://picsum.photos/1500/1000?random=5',
    'https://picsum.photos/1500/1000?random=4',
    'https://picsum.photos/1500/1000?random=3',
    'https://picsum.photos/1500/1000?random=2',
];
