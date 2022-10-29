import React from 'react';
import PropTypes from 'prop-types';
import { AUTHENTICATION_TYPES, LAYOUOT_TYPES } from '~/constants';

import { DashboardLayout } from './DashboardLayout';
import { NoLayout } from './NoLayout';

const layoutComponents = {
    [LAYOUOT_TYPES.DASHBOARD]: DashboardLayout,
    [LAYOUOT_TYPES.NO_LAYOUT]: NoLayout
};

const Layout = ({ children, type, authType }) => {
    const LayoutComponent = layoutComponents[type];
    return <LayoutComponent authType={authType}>{children}</LayoutComponent>;
};

Layout.propTypes = {
    children: PropTypes.node,
    type: PropTypes.oneOf(Object.keys(LAYOUOT_TYPES)),
    authType: PropTypes.oneOf(Object.keys(AUTHENTICATION_TYPES))
};

export default Layout;
