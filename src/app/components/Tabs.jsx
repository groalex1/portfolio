import React from 'react';
import PropTypes from 'prop-types';

const Tabs = ({active, selectTab, children}) => {
    const buttonClasses = active 
        ? 'text-primary-light dark:text-primary-dark border-b-2 border-primary-light dark:border-primary-dark' 
        : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white';
        
    return (
        <button 
            onClick={selectTab}
            className={`mr-6 py-2 font-medium transition-colors duration-300 ${buttonClasses}`}
        >
            {children}
        </button>
    )
}

Tabs.propTypes = {
    active: PropTypes.bool.isRequired, 
    selectTab: PropTypes.func.isRequired, 
    children: PropTypes.node.isRequired,
};

export default Tabs