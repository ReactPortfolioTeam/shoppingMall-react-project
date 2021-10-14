import { MyTheme } from 'assets/css/global/theme.style';
import * as React from 'react';

export interface IAppProps {
    count?: number;
}

const SearchResultCount: React.FC<IAppProps> = ({ count = 0 }) => {
    return (
        <h2>
            <span
                style={{
                    color: MyTheme.colors.gray,
                }}
            >
                {count} result
            </span>{' '}
            for any
        </h2>
    );
};

export default SearchResultCount;
