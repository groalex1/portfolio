import React from 'react';
import NavLink from './NavLink';
import PropTypes from 'prop-types';

const Overlay = ({ links }) => {
  return (
    <ul className='flex flex-col py-4 items-center'>
        {links.map((link,index) => (
            <li key = {index}>
                <NavLink href={link.path} title = {link.title} />
            </li>
        ))}
    </ul>
  )
}

Overlay.propTypes = {
  links: PropTypes.element,
}

export default Overlay