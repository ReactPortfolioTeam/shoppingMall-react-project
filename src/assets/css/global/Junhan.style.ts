import { css } from 'styled-components';

export const JunhanStyle = css`
    .line {
        width: 100%;
        color: #dedede;
        border: 0.5px solid #dedede;
    }
    .make-button {
        opacity: 0.5;
        &:hover {
            cursor: pointer;
            opacity: 1;
        }

        user-select: none;
    }
`;
