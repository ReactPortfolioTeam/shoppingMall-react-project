import styled from 'styled-components';

interface FlexBoxProps {
    justifyContent?: string;
    alignItems?: string;
    flexDirection?: string;
}

export const FlexBoxDiv = styled.div<FlexBoxProps>`
    display: flex;
    flex-direction: ${(p) => p.flexDirection ?? null};
    justify-content: ${(p) => p.justifyContent ?? null};
    align-items: ${(p) => p.alignItems ?? null};
`;
