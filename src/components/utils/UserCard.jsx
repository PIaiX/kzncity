import React from 'react';
import {Link} from 'react-router-dom';

const UserCard = ({link="/", photo="imgs/user.jpg", name="Имя Фамилия", notext=false}) => {
  return (
    <Link to={link} className='user'>
      <img src={photo} alt={name} />
      {
        (!notext) &&
        <p className='ms-2'>{name}</p>
      }
    </Link>
  )
}

export default UserCard