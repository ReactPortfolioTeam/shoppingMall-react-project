import React from 'react';
import styled from 'styled-components';
import AboutContent from './AboutContent';
import AboutFooter from './AboutFooter';
import AboutMain from './AboutMain';

const About = () => {
    return (
        <AboutContainer>
            <AboutMain />
            <AboutContent />
            <AboutFooter />
        </AboutContainer>
    );
};

export default About;

const AboutContainer = styled.section`
    height: calc(100vh - 86px);
    width: 100%;
`;
