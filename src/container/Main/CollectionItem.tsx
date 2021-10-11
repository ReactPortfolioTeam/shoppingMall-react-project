import { MyTheme } from 'assets/css/global/theme.style';
import * as React from 'react';
import styled from 'styled-components';

export interface IAppProps {
    imgSrc: string;
    imgAlt: string;
}

const CollectionItem = (props: IAppProps) => {
    const { imgSrc, imgAlt } = props;
    return (
        <CollectionItemStyle>
            <div>
                <img src={imgSrc} alt={imgAlt} />
                <div className="collection__description-container">
                    <div>
                        <h4>Item_name</h4>
                        <p>Item description</p>
                    </div>
                    <span>$120.00</span>
                </div>
            </div>
        </CollectionItemStyle>
    );
};
const CollectionItemStyle = styled.div`
    width: max-content;
    padding: 0 ${MyTheme.paddings.p5} 0 ${MyTheme.paddings.p5};
    border-right: 1px solid ${MyTheme.colors.gray};
    .collection__description-container {
        display: flex;
        flex-direction: row;
        & > div {
            display: flex;
            flex-direction: column;
            flex-basis: 70%;
        }
        & > span {
            text-align: end;
            flex: 1;
        }
    }
`;

export default CollectionItem;
