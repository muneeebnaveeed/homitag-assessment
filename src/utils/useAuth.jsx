import { useEffect } from 'react';
import { AUTHENTICATION_TYPES } from '~/constants';
import { useLocalStorage } from './useLocalStorage';
import { useNavigate } from 'react-router-dom';

export const useAuth = (authType = AUTHENTICATION_TYPES.AUTHENTICATED) => {
    const [token] = useLocalStorage('token');
    const navigate = useNavigate();

    useEffect(() => {
        (() => {
            if (authType === AUTHENTICATION_TYPES.NO_AUTH) return;
            if (authType === AUTHENTICATION_TYPES.INITIAL) {
                if (!token) return navigate('/register');
                else return navigate('/home', { replace: true });
            }
            if (authType === AUTHENTICATION_TYPES.AUTHENTICATED) if (!token) return navigate('/', { replace: true });
        })();
    }, []);

    return null;
};
