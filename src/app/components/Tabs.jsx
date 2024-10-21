import React from 'react'

const Tabs = ({active, selectTab, children}) => {
    const buttonClasses = active 
        ? 't    ext-white border-b border-yellow-300' 
        : 'text-neutral-300';
    return (
        <button onClick={selectTab}>
            <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
            {children}
            </p> 
        </button>
    )
}

export default Tabs