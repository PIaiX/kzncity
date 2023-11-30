import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Login = () => {
  return (
    <section>
        <Row>
            <Col lg={8}></Col>
            <Col lg={4}>
                <div className="box p-0">
                    <img src="imgs/login.png" alt="hello" className='w-100'/>
                    <h5>Первый раз у нас?</h5>
                    <button type='button' className='btn-green'>Зарегистрироваться</button>
                </div>
            </Col>
        </Row>
    </section>
  );
};

export default Login;