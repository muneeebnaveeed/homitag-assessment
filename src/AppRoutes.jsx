import React, { lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AUTHENTICATION_TYPES, LAYOUOT_TYPES } from './constants';
import Layout from './layout';

const Home = lazy(() => import('./pages/Home'));
const Register = lazy(() => import('./pages/Register'));
const InitialPage = lazy(() => import('./pages/InitialPage'));

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route
                    path="/home"
                    element={
                        <Layout type={LAYOUOT_TYPES.DASHBOARD} authType={AUTHENTICATION_TYPES.NO_AUTH}>
                            <Home />
                        </Layout>
                    }
                />
                <Route path="/register" element={<Register />} />
                <Route path="/" element={<InitialPage />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
