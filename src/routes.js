import React, { Component } from 'react';
import HomePage from './pages/HomePage/HomePage'
import NotFoundPage from './pages/NotFoundPage/Page404'

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage />
    },
    {
        path: '',
        exact: false,
        main: () => <NotFoundPage />
    }
];

export default routes;