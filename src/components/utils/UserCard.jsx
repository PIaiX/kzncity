import React from 'react';
import {Link} from 'react-router-dom';

const UserCard = ({link="/", photo="imgs/user.jpg", name="Имя Фамилия"}) => {
  return (
    <Link to={link} className='user'>
      <img src={photo} alt={name} />
      <p>{name}</p>
    </Link>
  )
}

export default UserCard