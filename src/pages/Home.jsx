import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Post from '../components/Post';

const Home = () => {
  return (
    <Row>
      <Col md={8}>
        <section>
          <div className="d-flex mb-4">
            <button type='button' className='btn-green'>Статьи</button>
            <button type='button' className='btn-white ms-2'>Волшебный заголовок</button>
            <select name="" id="" defaultValue={"new"} className='flex-1 text-end ms-2'>
              <option value="new">Новые</option>
              <option value="old">Старые</option>
              <option value="pop">Популярные</option>
            </select>
          </div>

          <ul className="posts-list">
            <li><Post/></li>
            <li><Post/></li>
            <li><Post/></li>
          </ul>
        </section>
      </Col>
      <Col md={4}>
        <aside>
          <img src="imgs/img.jpg" alt="" className='w-100'/>
        </aside>
      </Col>
    </Row>
    
  )
}

export default Home