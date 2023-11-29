import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LinkReturn from '../components/utils/LinkReturn';
import {Link} from 'react-router-dom';

const NotFound = () => {
  return (
    <section className='sec-404'>
      <Row md={2} className='gx-5'>
        <Col>
          <h2>К сожалению этой страницы нет</h2>
          <p className='mb-4'>Зато у нас много других интересных страниц:</p>
          <ul>
            <li><Link to="/" className='btn-gray'>Технологии</Link></li>
            <li><Link to="/" className='btn-gray'>Автомобили</Link></li>
            <li><Link to="/" className='btn-gray'>Строительство</Link></li>
            <li><Link to="/" className='btn-gray'>Мода</Link></li>
            <li><Link to="/" className='btn-gray'>Красота</Link></li>
            <li><Link to="/" className='btn-gray'>Психология</Link></li>
          </ul>
          <div className="d-flex mt-4">
            <LinkReturn onlyIcon={true} className='fs-15'/>
            <button type='button' className='btn-blue ms-2'>На главную</button>
          </div>
        </Col>
        <Col>
          <img src="imgs/notfound.png" alt="404" className='img-fluid br-1'/>
        </Col>
      </Row>
    </section>
  )
}

export default NotFound