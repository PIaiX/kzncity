import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Post from '../../components/Post';
import AsidePromo from '../../components/AsidePromo';
import SearchForm from '../../components/forms/SearchForm';
import LinkReturn from '../../components/utils/LinkReturn';

const Bookmarks = () => {
  return (
    <Row>
      <Col md={8}>
        <section>
          <div className="d-flex align-items-center box mb-4">
            <LinkReturn/>
            <SearchForm placeH='Поиск по подпискам' />
            <select name="" id="" defaultValue={"new"} className='text-end ms-5'>
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
        <AsidePromo/>
      </Col>
    </Row>
  );
};

export default Bookmarks;