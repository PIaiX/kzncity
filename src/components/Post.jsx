import React from 'react';
import IconSubscribe from '../components/svgs/IconSubscribe';
import IconDots from '../components/svgs/IconDots';
import Dropdown from 'react-bootstrap/Dropdown';
import IconHeart from '../components/svgs/IconHeart';
import IconChat from '../components/svgs/IconChat';
import IconBookmark from '../components/svgs/IconBookmark';
import IconClock from '../components/svgs/IconClock';
import IconEye from '../components/svgs/IconEye';

const Post = () => {
  return (
    <div className="post">
        <div className="p-3">
            <div className="d-flex justify-content-between align-items-center mb-3">
            <div className='d-flex align-items-center'>
                <div className='user'>
                    <img src="/imgs/photo.jpg" alt="Temporibus" />
                    <p>Temporibus</p>
                </div>
                <span className='green mx-2'>●</span>
                <span className='fs-09 d-gray me-2'>11:58</span>
                <span className='fs-09 d-gray'>фев 2023</span>
            </div>

            <ul>
                <li>
                    <button type='button' className='blue'>
                        <span className='fs-09 me-2'>Подписаться</span>
                        <IconSubscribe className="fs-15"/>
                    </button>
                </li>
                <li>
                    <Dropdown>
                        <Dropdown.Toggle variant="none" className='gray'>
                        <IconDots className="fs-15"/>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                        <Dropdown.Item as="button">Поделиться</Dropdown.Item>
                        <Dropdown.Item as="button">Пожаловаться</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </li>
            </ul>
            </div>
            <h2>Aeleniti atque corrupti quos dolores et quas molestias excepturi sint</h2>
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.</p>
        </div>
        <img src="/imgs/img0.jpg" alt="" className='post-img'/>
        <div className="d-flex justify-content-between align-items-center px-3 pt-2 pb-3">
            <ul>
            <li>
                <button type='button' className='btn-likes'>
                <IconHeart/>
                <span className='ms-1'>5 582</span>
                </button>
            </li>
            <li>
                <button type='button' className='btn-comments'>
                <IconChat/>
                <span className='ms-1'>5</span>
                </button>
            </li>
            <li>
                <button type='button' className='btn-saves active'>
                <IconBookmark/>
                </button>
            </li>
            </ul>
            <ul className='d-gray'>
            <li>
                <IconClock className="fs-15"/>
                <span className='fs-09 ms-1'>5 минут</span>
            </li>
            <li>
                <IconEye className="fs-15"/>
                <span className='fs-09 ms-1'>21 635</span>
            </li>
            </ul>
        </div>
    </div>
  );
};

export default Post;