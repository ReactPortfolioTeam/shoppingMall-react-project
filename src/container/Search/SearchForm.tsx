import Button from 'component/Button/Button';
import * as React from 'react';
import styled from 'styled-components';

export interface IAppProps {}

const SearchForm: React.FC<IAppProps> = () => {
    return (
        <SearchFormStyle>
            <label htmlFor="input-search">
                <span>Search</span>
                {/* 
                    추후 label 적용 // input에 focus() 되면 
                    placeholder에 있던 내용이 이 div에 랜더링 되는 애니메이션 구현
                    */}
            </label>
            <div id="field-search-container">
                <div id="field-search">
                    <input
                        type="search"
                        id="input-search"
                        placeholder="Search"
                    />
                </div>
                <Button>Submit</Button>
            </div>
        </SearchFormStyle>
    );
};

const SearchFormStyle = styled.form`
    display: flex;
    width: 80%;
    flex-direction: column;
    label {
        margin-bottom: 4px;
    }
    & > #field-search-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: flex-end;
        flex-wrap: nowrap;
        & > #field-search {
            display: block;
            width: 100%;
            z-index: 0;
            input {
                width: 100%;
                height: 2rem;
                border: 1px solid black;
                border-radius: 3px;
            }
        }
    }
`;

export default SearchForm;
