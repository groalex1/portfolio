import React from 'react';
import GithubIcon from "../../../public/images/github-icon.svg";
import LinkedinIcon from "../../../public/images/linkedin-icon.svg";
import Link from 'next/link';
import Image from 'next/image';

const Email = () => {
  return (
    <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4' id = "email">
        <div>
            <h5 className='text-xl font-bold text-white my-2'>Hit me up</h5>
            <p className='text-slate-200 mb-4 max-w-md'>
                Add descriptive text about how and why someone should contact you here
                Mention the form 
            </p>
            <div className='socials flex flex-row gap-2'>
                <Link href = 'https://github.com/groalex1'>
                    <Image src ={GithubIcon} alt = 'Github Icon'/>
                </Link>
                <Link href = "www.linkedin.com/in/alexandergromanSWE">
                    <Image src = {LinkedinIcon} alt = 'LinkedIn Icon'/>
                </Link>
            </div>
        </div>
        <div>
            <form className='flex flex-col gap-6'>
                <label htmlFor='email' type='email' className='text-white block mb-1 text-sm font-medium '> Your Email </label>
                <input 
                    type ='email' 
                    id = 'email' 
                    className='bg-yellow-100 border border-gray-900 placeholder-black text-gray-100 text-sm rounded-lg block w-full p-2.5'
                    required 
                    placeholder='default@domain.com' />

                <label htmlFor='subject' type='subject' className='text-white block mb-2 text-sm font-medium '> Subject </label>
                <input 
                    type ='text' 
                    id = 'subject' 
                    className='bg-yellow-100 border border-gray-900 placeholder-black text-gray-100 text-sm rounded-lg block w-full p-2.5'
                    required 
                    placeholder='Content Here!' />
            </form>
        </div>
    </section>
  )
}

export default Email