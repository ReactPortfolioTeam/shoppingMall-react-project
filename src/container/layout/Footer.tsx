import React from 'react';
import styled from 'styled-components';

interface Props {
    errorMessage?: string;
}

const Footer: React.FC<Props> = (props) => {
    const { errorMessage } = props;
    return (
        <FooterContainer>
            <div className="footer-error__div">
                <em>{errorMessage}</em>
            </div>
            <div className="footer-content__div">
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className="footer-cookie__div"></div>
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
        padding: 40px;
        & > div {
            display: flex;
            flex-direction: column;
        }
    }

    .footer-error__div {
        & > em {
            text-align: center;
        }
    }
`;
