import React from 'react'
import {Outlet, ScrollRestoration} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Header from '../components/Header'
import Sidebar from '../components/Sidebar';
import ScrollToTop from '../components/utils/ScrollToTop';

const AppLayout = () => {
    return (
        <Container>
            <ScrollRestoration />
            <div className="layout">
                <Header />
                <Sidebar/>
                <main>
                    <Outlet />
                    <ScrollToTop/>
                </main>
            </div>
        </Container>
    )
}

export default AppLayout