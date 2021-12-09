import { ButtonHover } from 'component/Button/ButtonHover';
import TextButton from 'component/Button/TextButton';
import React from 'react';
import styled from 'styled-components';

interface Props {
    errorMessage?: string;
}

const Footer: React.FC<Props> = (props) => {
    const { errorMessage } = props;

    const navItem = [
        'Terms',
        'Privacy Policy',
        'Accessibility Statement',
        'Customer Service',
        'Measuring Guide',
        'Contact Us',
    ];
    return (
        <FooterContainer>
            {/* <div className="footer-error__div">
                <em>{errorMessage}</em>
            </div> */}
            <hr className="line" />
            <div className="footer-content__div">
                <div>
                    <img
                        src="./images/icon/vane.svg"
                        width="24px"
                        height="18px;"
                        alt="vane"
                    />
                    <img src="./images/icon/arrow-top.svg" alt="arrow-top" />
                </div>
                <div>
                    <ButtonHover width="370px">
                        <>
                            Sign up for newsletters
                            <img
                                src="./images/icon/arrow-right.svg"
                                alt="arrow-right"
                            />
                        </>
                    </ButtonHover>
                    <div>
                        <span>© 2021 3sixteen</span>
                        <nav>
                            <ul>
                                {navItem.map((item) => (
                                    <li key={item}>
                                        <TextButton>{item}</TextButton>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>
                <div>
                    <div>
                        <img
                            src="./images/icon/instagram.svg"
                            className="make-button"
                            alt="instagram"
                        />
                        <img
                            src="./images/icon/twitter.svg"
                            className="make-button"
                            alt="twitter"
                        />
                    </div>
                    <TextButton
                        changeColor
                        changeColorTo="#cc4242"
                        width="fit-content"
                    >
                        Site Credit
                    </TextButton>
                </div>
            </div>
            <hr className="line" />
            {/* <div className="footer-cookie__div">
                <ButtonHover>
                    <p>Cookies settings</p>
                </ButtonHover>
            </div> */}
        </FooterContainer>
    );
};
Footer.defaultProps = {
    errorMessage:
        'Error validating access token: The session has been invalidated because the user changed their password or Facebook has changed the session for security reasons.',
};
export default Footer;

const FooterContainer = styled.footer`
    .footer-content__div {
        display: flex;
        height: 210px;
        padding: ${(props) => props.theme.paddings.p40};
        & > div {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
        & > div:nth-of-type(1) {
            width: 150px;
            align-items: center;
        }
        & > div:nth-of-type(2) {
            width: calc(100% - 340px);
            nav ul {
                display: flex;
            }
            li {
                margin-right: ${(props) => props.theme.margins.m20};
            }
        }
        & > div:last-child {
            width: 190px;
            align-items: center;
            & img:first-of-type {
                margin-right: ${(props) => props.theme.margins.m20};
            }
            img {
                width: 14px;
                height: 14px;
            }
        }
    }

    .footer-error__div {
        & > em {
            display: block;
            text-align: center;
            font-style: italic;
        }
    }
    .footer-cookie__div {
        display: flex;
        justify-content: center;
    }
`;
