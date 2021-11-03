import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import Button from 'component/Button/Button';
import styled from 'styled-components';
import { Products, ProductsType } from 'state/atom/dummy/Products';
import SearchForm from './SearchForm';
import SearchContent from './SearchContent';

export interface IAppProps {}

const SearchContainer: React.FC<IAppProps> = () => {
    const [isSubmit, setIsSubmit] = useState<boolean>(false);
    const products = useRecoilValue(Products);
    const [searchInput, setSeartchInput] = useState<string>('');
    const changeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSeartchInput(e.target.value);
    };
    const searchItems: ProductsType[] = products.filter((item) => {
        return Object.values(item).toString().includes(searchInput);
    });

    return (
        <>
            {isSubmit ? (
                <ResultContainerStyle>
                    <SearchContent searchItems={searchItems} />
                </ResultContainerStyle>
            ) : (
                <SearchContainerStyle>
                    <aside id="search__sidebar-section">sidebar section</aside>
                    <div id="search__input-section">
                        <SearchForm
                            setSubmit={setIsSubmit}
                            searchInput={searchInput}
                            changeSearchInput={changeSearchInput}
                        />
                    </div>
                </SearchContainerStyle>
            )}
        </>
    );
};

const ResultContainerStyle = styled.section`
    display: flex;
    align-items: center;
`;

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
