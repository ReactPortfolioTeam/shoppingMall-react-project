// import {
//     Flex,
//     FlexBoxDiv,
// } from 'assets/styledComponents/global/globalStyle.style';
import React from 'react';
import styled, { css } from 'styled-components';
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

const AboutContainer = styled.div``;
