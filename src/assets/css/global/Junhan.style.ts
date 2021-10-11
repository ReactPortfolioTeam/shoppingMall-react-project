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
    .rotate90 {
        transform: rotate(90deg);
    }
    .filter-gray {
        filter: invert(41%) sepia(1%) saturate(0%) hue-rotate(347deg)
            brightness(95%) contrast(92%);
    }
    .center-button {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #fff;
        color: #666;
        border: none;
        cursor: pointer;
    }
`;
