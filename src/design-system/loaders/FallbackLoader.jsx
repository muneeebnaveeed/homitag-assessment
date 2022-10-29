import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';

import { TailSpin } from 'react-loader-spinner';
import FullBlock from '../blocks/FullContainer';

const spinnerProps = {
    width: 50,
    height: 50,
    color: '#000',
    ariaLabel: 'loading',
    radius: 1,
    visible: true
};

const FallbackLoader = ({ delayBeforeVisible }) => {
    const [isLoaderVisible, setIsLoaderVisible] = useState(false);
    const loaderVisiblityTimeoutRef = useRef();

    useEffect(() => {
        // store timeout id to clear on unmount
        loaderVisiblityTimeoutRef.current = setTimeout(() => {
            setIsLoaderVisible(true);
            loaderVisiblityTimeoutRef.current = null;
        }, delayBeforeVisible);

        // clear running timeouts inorder to prevent changing state on unmounted components
        return () => {
            clearTimeout(loaderVisiblityTimeoutRef.current);
            loaderVisiblityTimeoutRef.current = null;
        };
    }, []);

    // to prevent flicker on fast machine
    if (!isLoaderVisible) return null;

    return (
        <div className="w-screen h-screen">
            <FullBlock className="flex justify-center items-center">
                <TailSpin {...spinnerProps} />
            </FullBlock>
        </div>
    );
};

FallbackLoader.propTypes = {
    delayBeforeVisible: PropTypes.number
};

FallbackLoader.defaultProps = {
    delayBeforeVisible: 250
};

export default FallbackLoader;
