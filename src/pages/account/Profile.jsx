import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import IconPlus from '../../components/svgs/IconPlus';
import IconGear from '../../components/svgs/IconGear';
import IconDots from '../../components/svgs/IconDots';
import IconPen from '../../components/svgs/IconPen';
import Post from '../../components/Post';
import AsidePromo from '../../components/AsidePromo';
import UserCard from '../../components/utils/UserCard';

const Profile = () => {
    const [key, setKey] = useState('Subscriptions');

    return (
        <section className='userPage'>
            <Row>
                <Col lg={8}>
                    <div className="userPage-cover">
                        <button type='button' className='fs-11 box w-100 d-flex justify-content-between'>
                            <span>Добавить обложку</span>
                            <IconPlus className="gray"/>
                        </button>
                    </div>
                    <div className="userPage-info">
                        <div className="userPage-info-top">
                            <img src="imgs/photo.jpg" alt="Александер Родионович" />
                            <h2>Александер Родионович</h2>
                            <button type='button' className='d-gray'>
                                <IconGear/>
                            </button>
                            <button type='button' className='gray'>
                                <IconDots/>
                            </button>
                        </div>
                        <p className='mt-3'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas</p>
                    </div>

                    <div className="userPage-btns">
                        <button type='button' className='btn-white active'>Ваши записи</button>
                        <button type='button' className='btn-white'>Комментарии</button>
                        <button type='button' className='btn-white'>Товары</button>
                        <button type='button' className='btn-blue ms-auto'>
                            <span className='me-3'>Создать запись</span>
                            <IconPen className="fs-12"/>
                        </button>
                    </div>

                    <ul className="posts-list">
                        <li><Post own={true}/></li>
                        <li><Post own={true}/></li>
                        <li><Post own={true}/></li>
                    </ul>
                </Col>
                <Col lg={4}>
                    <div className="box p-0 mb-4">
                        <Tabs
                            id="controlled-tab-example"
                            activeKey={key}
                            onSelect={(k) => setKey(k)}
                            >
                            <Tab eventKey="Subscriptions" title="Подписки">
                                <ul className="userPage-subscriptions">
                                    <li>
                                        <UserCard/>
                                    </li>
                                    <li>
                                        <UserCard/>
                                    </li>
                                    <li>
                                        <UserCard/>
                                    </li>
                                </ul>
                            </Tab>
                            <Tab eventKey="Subscribers" title="Подписчики">
                                <ul className="userPage-subscribers">
                                    <li>
                                        <UserCard notext={true}/>
                                    </li>
                                    <li>
                                        <UserCard notext={true}/>
                                    </li>
                                    <li>
                                        <UserCard notext={true}/>
                                    </li>
                                    <li>
                                        <UserCard notext={true}/>
                                    </li>
                                    <li>
                                        <UserCard notext={true}/>
                                    </li>
                                    <li>
                                        <UserCard notext={true}/>
                                    </li>
                                    <li>
                                        <UserCard notext={true}/>
                                    </li>
                                    <li>
                                        <UserCard notext={true}/>
                                    </li>
                                    <li>
                                        <UserCard notext={true}/>
                                    </li>
                                    <li>
                                        <UserCard notext={true}/>
                                    </li>
                                </ul>
                            </Tab>
                        </Tabs>
                    </div>
                    <AsidePromo/>
                </Col>
            </Row>
        </section>
    )
}

export default Profile