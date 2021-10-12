import React from 'react';
import styled from 'styled-components';

const AboutMain = () => {
    return (
        <AboutMainContainer>
            <div>
                <h1>
                    The Story
                    <br />
                    About 3sixteen
                </h1>
            </div>
            <div>
                <p>
                    <strong>First and foremost, we’re a denim company.</strong>
                </p>
                <p>
                    Founded over a decade ago, 3sixteen’s modern history starts
                    in 2008 with our very first pair of jeans, the SL-100x. We
                    worked directly with Kuroki Mills in Okayama, Japan to
                    develop a custom denim designed to withstand hard wear and
                    show incredible character along the way.
                </p>
            </div>
        </AboutMainContainer>
    );
};

export default AboutMain;

const AboutMainContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 0 13%;
    display: flex;
    background-image: url('https://picsum.photos/2000');
    & > div {
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;

        h1,
        p,
        strong {
            color: ${(props) => props.theme.colors.white};
        }
        & > h1 {
            font-size: 55px;
        }
        strong {
            font-size: ${(props) => props.theme.fonts.size.title};
            font-weight: ${(props) => props.theme.fonts.weight.bold};
        }
    }
`;
