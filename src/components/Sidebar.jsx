import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import IconAddUser from './svgs/IconAddUser';
import IconBookmark from './svgs/IconBookmark';
import IconFire from './svgs/IconFire';
import PlaixIcon from './svgs/PlaixIcon';
import Plaix from './svgs/Plaix';
import UserCard from './utils/UserCard';

const Sidebar = () => {
  return (
    <nav className="sidebar">
        <ul className='mb-4'>
            <li>
                <UserCard photo='imgs/photo.jpg' name='Александер Родионович'/>
            </li>
            <li>
                <NavLink to="/account/subscriptions" className='link'>
                    <IconAddUser/>
                    <span>Подписки</span>
                </NavLink>
            </li>
            <li>
                <NavLink to="/account/bookmarks" className='link'>
                    <IconBookmark/>
                    <span>Закладки</span>
                </NavLink>
            </li>
        </ul>
        <ul className='mb-4'>
            <li>
                <Link to="/" className='link'>
                    <IconAddUser/>
                    <span>Все записи</span>
                </Link>
            </li>
            <li>
                <Link to="/" className='link'>
                    <IconFire/>
                    <span>Популярное</span>
                </Link>
            </li>
            <hr />
            <li>
                <Link to="/" className='link'>
                    <span>Технологии</span>
                </Link>
            </li>
            <li>
                <Link to="/" className='link'>
                    <span>Бизнес</span>
                </Link>
            </li>
            <li>
                <Link to="/" className='link'>
                    <span>Автомобили</span>
                </Link>
            </li>
            <li>
                <Link to="/" className='link'>
                    <span>Развлечения</span>
                </Link>
            </li>
            <li>
                <Link to="/" className='link'>
                    <span>Строительство</span>
                </Link>
            </li>
        </ul>
        <ul className='mb-4'>
            <li>
                <Link to="/rules" className='link'>
                    <span>Правила портала</span>
                </Link>
            </li>
            <li>
                <Link to="/faq" className='link'>
                    <span>Помощь</span>
                </Link>
            </li>
            <li>
                <Link to="/contacts" className='link'>
                    <span>Контакты</span>
                </Link>
            </li>
            <hr />
            <li>
                <a href="https://plaix.ru/" target='_blank' rel="noreferrer" className='devs'>
                    <PlaixIcon/>
                    <span className='mx-2'>Создано в</span>
                    <Plaix/>
                </a>
            </li>
        </ul>
    </nav>
  )
}

export default Sidebar