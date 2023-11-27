import React from 'react';
import IconSearch from '../svgs/IconSearch';

const SearchForm = ({placeH="Поиск", className=""}) => {
  return (
    <form action="" className={'formSearch ' + className}>
        <button type='submit'>
            <IconSearch/>
        </button>
        <input type="search" placeholder={placeH}/>
    </form>
  );
};

export default SearchForm;