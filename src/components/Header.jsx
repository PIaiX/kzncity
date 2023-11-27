import React from 'react'
import IconPlus from './svgs/IconPlus'
import SearchForm from './forms/SearchForm'

const Header = () => {
  return (
    <header>
      <img src="imgs/logo.svg" alt="KZN.city" />
      <SearchForm placeH="Найдём самое лучшее и интересное" className="ms-5"/>
      <button type='button' className='btn-red ms-4'>
        <span>Опубликовать</span>
        <IconPlus className="fs-12 ms-2"/>
      </button>
      <button type='button' className='ms-5'>Войти</button>
    </header>
  )
}

export default Header