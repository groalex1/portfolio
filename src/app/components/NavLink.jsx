import Link from "next/link";
import React from 'react';
import PropTypes from 'prop-types';

const NavLink = ({ href, title }) => {
    return(

        <Link href ={href} className="block text-slate-300 py-2 pl-3 pr-4 sm:text-xl rounded md:p-0 hover:text-white">
            {title}
        </Link>

    )
};

NavLink.propTypes = {

    href: PropTypes.Link.isRequired,
    title: PropTypes.string.isRequired,

};

export default NavLink