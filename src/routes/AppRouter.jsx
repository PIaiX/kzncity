import React from 'react'
import {createRoutesFromElements, Route, RouterProvider, createHashRouter} from 'react-router-dom'
import AppLayout from '../layouts/AppLayout'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import Subscriptions from '../pages/account/Subscriptions'
import Bookmarks from '../pages/account/Bookmarks'
import Faq from '../pages/Faq'
import Rules from '../pages/Rules'

const router = createHashRouter(
    createRoutesFromElements(
        <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />}/>
            <Route path="account/subscriptions" element={<Subscriptions/>}/>
            <Route path="account/bookmarks" element={<Bookmarks/>}/>
            <Route path="faq" element={<Faq/>}/>
            <Route path="rules" element={<Rules/>}/>
            <Route path="*" element={<NotFound />} />
        </Route>
    )
)

const AppRouter = () => {
    return <RouterProvider router={router} />
};

export default AppRouter;
