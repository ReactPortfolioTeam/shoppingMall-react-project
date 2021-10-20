import styled from 'styled-components';
import Css from 'csstype';

interface FlexBoxProps {
    justifyContent?: Css.Property.JustifyContent;
    alignItems?: Css.Property.AlignItems;
    flexDirection?: Css.Property.FlexDirection;
}

export const FlexBoxDiv = styled.div<FlexBoxProps>`
    display: flex;
    flex-direction: ${(p) => p.flexDirection ?? null};
    justify-content: ${(p) => p.justifyContent ?? null};
    align-items: ${(p) => p.alignItems ?? null};
`;
