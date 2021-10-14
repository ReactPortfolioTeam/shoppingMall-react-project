import Button from 'component/Button/Button';
import * as React from 'react';
import styled from 'styled-components';
import SearchForm from './SearchForm';

export interface IAppProps {}

const SearchContainer: React.FC<IAppProps> = () => {
    return (
        <SearchContainerStyle>
            <aside id="search__sidebar-section">sidebar section</aside>
            <div id="search__input-section">
                <SearchForm />
            </div>
        </SearchContainerStyle>
    );
};

const SearchContainerStyle = styled.section`
    display: flex;
    flex-direction: row;
    min-height: calc(100vh - 5.7142857143rem);

    #search__sidebar-section {
        position: sticky;
        top: 5.7142857143rem;
        height: calc(100vh - 5.7142857143rem);
        display: flex;
        flex-grow: 1;
        flex-direction: column;
        justify-content: center;
        padding-top: 1.4285714286rem;
        padding-bottom: 1.4285714286rem;
    }
    #search__input-section {
        padding-left: 1.4285714286rem;
        padding-right: 1.4285714286rem;
        flex-grow: 5;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;
export default SearchContainer;
