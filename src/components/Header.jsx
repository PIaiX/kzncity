import React from 'react'
import IconSearch from './svgs/IconSearch'
import IconPlus from './svgs/IconPlus'

const Header = () => {
  return (
    <header>
      <img src="/imgs/logo.svg" alt="KZN.city" />
      <form action="" className='formSearch ms-5'>
        <button type='submit'>
          <IconSearch/>
        </button>
        <input type="search" placeholder='Найдём самое лучшее и интересное'/>
      </form>
      <button type='button' className='btn-red ms-4'>
        <span>Опубликовать</span>
        <IconPlus className="fs-12 ms-2"/>
      </button>
      <button type='button' className='ms-5'>Войти</button>
    </header>
  )
}

export default Header