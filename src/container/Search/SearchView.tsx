import { MyTheme } from 'assets/css/global/theme.style';
import * as React from 'react';
import styled from 'styled-components';
import SearchContainer from './SearchContainer';

export interface IAppProps {}

const SearchView: React.FC<IAppProps> = () => {
    return (
        <SearchViewStyle>
            <SearchContainer />
        </SearchViewStyle>
    );
};

const SearchViewStyle = styled.main`
    width: 100%;
    margin: 0;
    padding: 0 ${MyTheme.paddings.p40} 0 ${MyTheme.paddings.p40};
`;

export default SearchView;
