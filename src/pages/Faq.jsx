import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LinkReturn from '../components/utils/LinkReturn';
import AsidePromo from '../components/AsidePromo';
import Accordion from 'react-bootstrap/Accordion';

const Faq = () => {
  return (
    <Row>
        <Col md={8}>
            <section>
                <div className="d-flex align-items-center box mb-4">
                    <LinkReturn/>
                    <h3>Часто задаваемые вопросы</h3>
                </div>

                <Accordion as="ul" defaultActiveKey="0">
                    <Accordion.Item as="li" eventKey="0">
                        <Accordion.Header>Вопрос #1</Accordion.Header>
                        <Accordion.Body>
                        Donec id justo. Curabitur blandit mollis lacus. Vivamus quis mi. In ut quam vitae odio lacinia tincidunt. In consectetuer turpis ut velit.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item as="li" eventKey="1">
                        <Accordion.Header>Вопрос #2</Accordion.Header>
                        <Accordion.Body>
                        Donec id justo. Curabitur blandit mollis lacus. Vivamus quis mi. In ut quam vitae odio lacinia tincidunt. In consectetuer turpis ut velit.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item as="li" eventKey="2">
                        <Accordion.Header>Вопрос #3</Accordion.Header>
                        <Accordion.Body>
                        Donec id justo. Curabitur blandit mollis lacus. Vivamus quis mi. In ut quam vitae odio lacinia tincidunt. In consectetuer turpis ut velit.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item as="li" eventKey="3">
                        <Accordion.Header>Вопрос #4</Accordion.Header>
                        <Accordion.Body>
                        Donec id justo. Curabitur blandit mollis lacus. Vivamus quis mi. In ut quam vitae odio lacinia tincidunt. In consectetuer turpis ut velit.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item as="li" eventKey="4">
                        <Accordion.Header>Вопрос #5</Accordion.Header>
                        <Accordion.Body>
                        Donec id justo. Curabitur blandit mollis lacus. Vivamus quis mi. In ut quam vitae odio lacinia tincidunt. In consectetuer turpis ut velit.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item as="li" eventKey="5">
                        <Accordion.Header>Вопрос #6</Accordion.Header>
                        <Accordion.Body>
                        Donec id justo. Curabitur blandit mollis lacus. Vivamus quis mi. In ut quam vitae odio lacinia tincidunt. In consectetuer turpis ut velit.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </section>
        </Col>
        <Col md={4}>
            <AsidePromo/>
            <form className='mt-4 box p-3'>
                <h5>Не нашли что искали?</h5>
                <h5 className='mb-3'>Отправьте запрос на нашу почту</h5>
                <input type="text" placeholder='Имя' className='mb-1'/>
                <input type="text" placeholder='Ник на портале' className='mb-1'/>
                <input type="text" placeholder='Email' className='mb-1'/>
                <textarea placeholder='Ваш текст' className='mb-1'></textarea>
                <button type='submit' className='btn-blue w-100 mt-3'>Отправить</button>
            </form>
        </Col>
    </Row>
  );
};

export default Faq;