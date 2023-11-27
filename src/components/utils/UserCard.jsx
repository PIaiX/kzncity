import React from 'react'

const UserCard = ({photo="imgs/user.jpg", name="Имя Фамилия"}) => {
  return (
    <div className='user'>
        <img src={photo} alt={name} />
        <p>{name}</p>
    </div>
  )
}

export default UserCard