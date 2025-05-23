"use client";

import React, { useState } from 'react'
import Link from 'next/link'
import NavLink from './NavLink'
import Overlay from './Overlay';

import {XMarkIcon, Bars3Icon} from "@heroicons/react/24/solid";

const NavLinks = [

  {
    title: "About",
    path: "#about",
  },
  {
    title:"Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path:"#email",
  }

]

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className='fixed top-0 left-0 right-0 z-10 bg opacity-100 bg-slate-950 '>
        <div className='flex flex-wrap items-center justify-between mx-auto px-4 py-2'>
            <Link href={"/"} className='text-2xl md:text-5xl text-white font-semibold'> 
              Portfolio
            </Link>
            <div className='mobile-menu block md:hidden'>
              {!navbarOpen ? (
                  <button onClick = {() => setNavbarOpen(true)} className='text-slate-300 flex items-center px-3 py-2 border rounded border-slate-300 hover:text-white hover:border-white'> 
                    <Bars3Icon className='h-5 w-5'/>
                  </button>
                ) : (
                  <button onClick = {() => setNavbarOpen(false)} className = 'text-slate-300 flex items-center px-3 py-2 border rounded border-slate-300 hover:text-white hover:border-white'>
                    <XMarkIcon className='h-5 w-5'/>
                  </button>
                )}
            </div>
            <div className='menu hidden md:block md:w-auto'>
                 <ul className = "flex p-4 md:p-0 md:flex-row md: space-x-8 mt-0">
                    {NavLinks.map((link, index) => (
                          <li key = {index}>
                            <NavLink href={link.path} title = {link.title} />
                          </li>
                      ))}
                 </ul>
            </div>
        </div>
        {navbarOpen ? <Overlay links = {NavLinks} /> : null }
    </nav>
  )
}

export default Navbar