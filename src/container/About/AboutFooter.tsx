import React, { useState } from 'react';
import styled from 'styled-components';

const AboutFooter = () => {
    const [activeButton, setActiveButton] = useState<number>(0);
    const clickButton = (index: number) => {
        if (activeButton === index) {
            setActiveButton(0);
        } else {
            setActiveButton(index);
        }
    };

    return (
        <AboutFooterContainer>
            <h1>Jean Anatomy</h1>
            <img
                src="https://reactportfolioteam.github.io/shoppingMall-react-project/images/about/anatomy_jean_1440x.jpg"
                alt="jean"
            />

            {DataObject.map((item, index) => {
                return (
                    <React.Fragment key={item.title + item.id}>
                        <button
                            type="button"
                            className={`${
                                activeButton === index + 1 && 'active-button'
                            } round-button__button`}
                            id={`round-button${index}`}
                            onClick={() => clickButton(index + 1)}
                        >
                            +
                        </button>
                        <div
                            className={`content ${
                                activeButton === index + 1 && 'active-content'
                            }`}
                            id={`content${index}`}
                        >
                            <p>
                                <strong>{item.title}</strong>
                            </p>
                            <p>{item.content}</p>
                        </div>
                    </React.Fragment>
                );
            })}
        </AboutFooterContainer>
    );
};

export default AboutFooter;

const AboutFooterContainer = styled.div`
    width: 100%;
    padding: 0 13%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    padding-top: ${(props) => props.theme.paddings.p40};

    & > h1 {
        margin-bottom: ${(props) => props.theme.margins.m40};
    }
    & > img {
        width: 100%;
    }

    .round-button__button {
        position: absolute;
        cursor: pointer;
        width: 30px;
        height: 30px;
        background-color: ${(p) => p.theme.colors.white};
        border: none;
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: ${(props) => props.theme.fonts.size.title};
        transition: all 0.5s;
    }
    .active-button {
        width: 40px;
        height: 40px;
        background-color: rgba(0, 0, 0, 0);
        color: ${(p) => p.theme.colors.white};
        border: 1px solid ${(p) => p.theme.colors.white};
        transform: rotate(45deg);
        font-size: 30px;
    }
    button:nth-of-type(1) {
        top: 17%;
        left: 42%;
    }
    button:nth-of-type(2) {
        top: 30%;
        left: 41%;
    }
    button:nth-of-type(3) {
        top: 17%;
        left: 54%;
    }
    button:nth-of-type(4) {
        top: 27%;
        left: 57%;
    }
    button:nth-of-type(5) {
        top: 72%;
        left: 61%;
    }
    .content {
        position: absolute;
        display: flex;
        flex-direction: column;
        width: 22rem;
        opacity: 0;
        transition: all 0.5s;
        & > p {
            & > strong {
                font-weight: ${(props) => props.theme.fonts.weight.bold};
            }
        }
        & > p:last-of-type {
            color: ${(props) => props.theme.colors.gray};
        }
    }
    .content:nth-of-type(1) {
        left: 15%;
        top: 17%;
    }
    .content:nth-of-type(2) {
        left: 15%;
        top: 30%;
    }
    .content:nth-of-type(3) {
        right: 15%;
        top: 17%;
    }
    .content:nth-of-type(4) {
        right: 15%;
        top: 27%;
    }
    .content:nth-of-type(5) {
        right: 15%;
        top: 72%;
    }
    .active-content {
        opacity: 1;
    }
`;
const DataObject = [
    {
        id: 1,
        title: 'The Waistband Stitch',
        content:
            'We utilize a continuous tucked chainstitch on our jean waistbands. Instead of terminating the chainstitch and finishing with a single needle, we run the chainstitch off the waistband and then tuck it in – this prevents the stitch from unraveling over time.',
    },
    {
        id: 2,
        title: 'The Details',
        content:
            "We don't like flashy details, which is why we chose to keep the coin pocket selvedge hidden. That being said, we do enjoy small touches that only the wearer sees, things that let our customer know that their jeans were thoughtfully put together. You'll also find a hidden selvedge detail on the inside of the fly.",
    },

    {
        id: 3,
        title: 'The Patch',
        content:
            'Our patches are made for us by our good friends at Tanner Goods, a leather goods company based in Portland, OR. We use heavyweight natural tan english bridle leather that will age richly over time alongside the jeans: as the denim lightens, the patch darkness.',
    },
    {
        id: 4,
        title: 'The Pocketbags',
        content:
            "An often overlooked detail, pocketbags are extremely important considering how much they're used and how much wear and tear they endure from carrying your daily essentials. We elected to use a 100% cotton 8oz twill fabric for our pocketing; some might call this overkill, but we're sure our pocketbags will withstand more abuse than almost any other jean on the market.",
    },
    {
        id: 5,
        title: 'The Denim',
        content:
            'We have the privilege of working with Okayama based Kuroki Mills – one of the most famous denim mills in Japan – to produce our own custom fabric. This is a major challenge for small companies like ours as costs and yardage minimimums become preventative factors, but, it was important that we offer a textile that is completely unique to our jeans, something that no on else can buy.',
    },
];
