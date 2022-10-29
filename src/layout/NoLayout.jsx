import PropTypes from 'prop-types';
import { AUTHENTICATION_TYPES } from '~/constants';
import { useAuth } from '~/utils';

export const NoLayout = ({ children, authType }) => {
    useAuth(authType);
    return children;
};

NoLayout.propTypes = {
    children: PropTypes.node,
    authType: PropTypes.oneOf(Object.keys(AUTHENTICATION_TYPES))
};
