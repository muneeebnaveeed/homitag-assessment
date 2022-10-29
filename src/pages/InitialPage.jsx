import React from 'react';
import FallbackLoader from '~/design-system/loaders/FallbackLoader';
import { useAuth } from '~/utils';
import { AUTHENTICATION_TYPES } from '~/constants';

const InitialPage = () => {
    useAuth(AUTHENTICATION_TYPES.INITIAL);
    return <FallbackLoader />;
};

export default InitialPage;
