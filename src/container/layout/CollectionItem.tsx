import * as React from 'react';
import styled from 'styled-components';

export interface IAppProps {}

const CollectionItem = (props: IAppProps) => {
    return (
        <CollectionItemStyle>
            <h4>New Arrivals</h4>
            <div>
                <img src="https://picsum.photos/300" />
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: '70%',
                        }}
                    >
                        <h4>Item_name</h4>
                        <p>Item description</p>
                    </div>
                    <p
                        style={{
                            width: '30%',
                        }}
                    >
                        $120.00
                    </p>
                </div>
            </div>
        </CollectionItemStyle>
    );
};
const CollectionItemStyle = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    margin: 0 4px 0 4px;
    border: 2px solid red;
`;

export default CollectionItem;
