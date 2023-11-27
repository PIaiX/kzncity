import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import AsidePromo from '../../components/AsidePromo';
import SearchForm from '../../components/forms/SearchForm';
import UserCard from '../../components/utils/UserCard';
import IconDots from '../../components/svgs/IconDots';
import IconSubscribe from '../../components/svgs/IconSubscribe';

const Subscriptions = () => {
  return (
    <Row>
      <Col md={8}>
        <section>
          <div className="d-flex box mb-4">
            <SearchForm placeH='Поиск по подпискам' />
            <select name="" id="" defaultValue={"new"} className='text-end ms-5'>
              <option value="new">Новые</option>
              <option value="old">Старые</option>
              <option value="pop">Популярные</option>
            </select>
          </div>

          <ul className="list">
            <li>
              <UserCard photo='imgs/photo.jpg' name='Александер Родионович'/>
              <Dropdown align="end">
                <Dropdown.Toggle variant="none">
                  <IconDots className="fs-15"/>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as="button">Отписаться</Dropdown.Item>
                  <Dropdown.Item as="button">Пожаловаться</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li>
              <UserCard name='Temporibus'/>
              <Dropdown align="end">
                <Dropdown.Toggle variant="none">
                  <IconDots className="fs-15"/>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as="button">Отписаться</Dropdown.Item>
                  <Dropdown.Item as="button">Пожаловаться</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li>
              <UserCard photo='imgs/photo.jpg' name='Александер Родионович'/>
              <Dropdown align="end">
                <Dropdown.Toggle variant="none">
                  <IconDots className="fs-15"/>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as="button">Отписаться</Dropdown.Item>
                  <Dropdown.Item as="button">Пожаловаться</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li>
              <UserCard name='Temporibus'/>
              <Dropdown align="end">
                <Dropdown.Toggle variant="none">
                  <IconDots className="fs-15"/>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as="button">Отписаться</Dropdown.Item>
                  <Dropdown.Item as="button">Пожаловаться</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <h6>Рекомендуем</h6>
            <li>
              <UserCard name='Temporibus'/>
              <button type='button' className='btn-border-blue py-1'>
                <span className='fs-09'>Подписаться</span>
                <IconSubscribe className="fs-15 ms-2"/>
              </button>
            </li>
            <li>
              <UserCard name='Temporibus'/>
              <button type='button' className='btn-border-blue py-1'>
                <span className='fs-09'>Подписаться</span>
                <IconSubscribe className="fs-15 ms-2"/>
              </button>
            </li>
            <li>
              <UserCard name='Temporibus'/>
              <button type='button' className='btn-border-blue py-1'>
                <span className='fs-09'>Подписаться</span>
                <IconSubscribe className="fs-15 ms-2"/>
              </button>
            </li>
            <li>
              <UserCard name='Temporibus'/>
              <button type='button' className='btn-border-blue py-1'>
                <span className='fs-09'>Подписаться</span>
                <IconSubscribe className="fs-15 ms-2"/>
              </button>
            </li>
          </ul>
        </section>
      </Col>
      <Col md={4}>
        <AsidePromo/>
      </Col>
    </Row>
  );
};

export default Subscriptions;