import Button from 'component/Button/Button';
import Input from 'component/Input/Input';
import * as React from 'react';
import styled from 'styled-components';

export interface IAppProps {
    setSubmit: any;
    searchInput: string;
    changeSearchInput: React.ChangeEventHandler;
}

const SearchForm: React.FC<IAppProps> = ({
    setSubmit,
    searchInput,
    changeSearchInput,
}) => {
    return (
        <SearchFormStyle>
            {/* <label htmlFor="input-search">
            </label> */}
            <div id="field-search-container">
                <Input
                    id="search"
                    value={searchInput}
                    onChange={changeSearchInput}
                    width="100%"
                    height="3rem"
                    type="text"
                    placeholder="Search anything"
                    content="Search"
                />
                <Button
                    height="3rem"
                    type="submit"
                    onClick={() => setSubmit(true)}
                >
                    Submit
                </Button>
            </div>
        </SearchFormStyle>
    );
};

const SearchFormStyle = styled.form`
    width: 80%;
    & > #field-search-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: flex-end;
        flex-wrap: nowrap;
    }
`;

export default SearchForm;
