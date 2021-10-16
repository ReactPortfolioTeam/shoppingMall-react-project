/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-plusplus */

// for 문을 사용해서 해보았으나 너무 비효율적입니다
// ClassName 에 직접 사용하는 것이 옳은가.. 고민이 되네요 ( ClassName={isBoolean ? ("active") : (null)})
interface StyleObject {
    styleName: string;
    styleValue: string;
}
export const HtmlTagStyle = (
    id: string,
    style: Array<StyleObject> | any,

    activeNum: number,
    length: number
) => {
    const ActiveTag = document?.querySelectorAll<HTMLElement>(
        `${id}${activeNum - 1}`
    )[0];

    for (let index = 0; index < length - 1; index++) {
        const getTag = document?.querySelectorAll<HTMLElement>(
            `${id}${index}`
        )[0];
        for (const key of style) {
            getTag.style.removeProperty(key.styleName);
        }
    }

    for (const key of style) {
        ActiveTag.style[key.styleName] = key.styleValue;
    }
};
