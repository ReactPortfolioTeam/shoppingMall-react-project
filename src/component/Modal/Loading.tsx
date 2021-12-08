import React from 'react';
import styled from 'styled-components';

const Loading = () => {
    return (
        <LoadingContainer>
            <div></div>
        </LoadingContainer>
    );
};

export default Loading;

const LoadingContainer = styled.div`
    position: fixed;
    z-index: 9;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #0008;
    display: flex;
    align-items: center;
    justify-content: center;
    & > div {
        user-select: none;
        border: 5px solid #0008;
        border-top: 5px solid white;
        border-bottom: 5px solid white;
        border-radius: 50%;
        width: 70px;
        height: 70px;
        animation: spin 2s linear infinite;
        @keyframes spin {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }
        }
    }
`;
