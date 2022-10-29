import React from 'react';
import cls from 'classnames';
import PropTypes from 'prop-types';

const FullBlock = ({ children, className }) => {
    return <div className={cls('w-full h-full', className)}>{children}</div>;
};

FullBlock.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};

FullBlock.defaultProps = {
    className: ''
};

export default FullBlock;
