"use client";
import React, { useState } from 'react';
import GithubIcon from "../../../public/images/github-icon.svg";
import LinkedinIcon from "../../../public/images/linkedin-icon.svg";
import Link from 'next/link';
import Image from 'next/image';

const Email = () => {
  const [emailData, setEmailData] = useState({
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData),
      });

      if (response.ok) {
        alert('Email sent successfully!');
        setEmailData({ email: '', subject: '', message: '' });
      } else {
        alert('Failed to send email. Please try again.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Error sending email. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmailData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section className=' snap-section grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 min-h-screen items-center justify-center snap-section' id="email">
      <div>
        <h5 className='text-xl font-bold text-white my-2'>Hit me up</h5>
        <p className='text-slate-200 mb-4 max-w-md'>
          Add descriptive text about how and why someone should contact you here
          Mention the form
        </p>
        <div className='socials flex flex-row gap-2'>
          <Link href='https://github.com/groalex1'>
            <Image src={GithubIcon} alt='Github Icon' />
          </Link>
          <Link href="https://www.linkedin.com/in/alexandergromanSWE">
            <Image src={LinkedinIcon} alt='LinkedIn Icon' />
          </Link>
        </div>
      </div>
      <div>
        <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
          <div>
            <label htmlFor='email' className='text-white block mb-1 text-sm font-medium'>
              Your Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              value={emailData.email}
              onChange={handleChange}
              className='bg-yellow-100 border border-gray-900 placeholder-black text-gray-900 text-sm rounded-lg block w-full p-2.5'
              required
              placeholder='default@domain.com'
            />
          </div>

          <div>
            <label htmlFor='subject' className='text-white block mb-2 text-sm font-medium'>
              Subject
            </label>
            <input
              type='text'
              id='subject'
              name='subject'
              value={emailData.subject}
              onChange={handleChange}
              className='bg-yellow-100 border border-gray-900 placeholder-black text-gray-900 text-sm rounded-lg block w-full p-2.5'
              required
              placeholder='Content Here!'
            />
          </div>

          <div>
            <label htmlFor='message' className='text-white block mb-2 text-sm font-medium'>
              Message
            </label>
            <textarea
              id='message'
              name='message'
              value={emailData.message}
              onChange={handleChange}
              className='bg-yellow-100 border border-gray-900 placeholder-black text-gray-900 text-sm rounded-lg block w-full p-2.5'
              required
              rows={4}
              placeholder='Your message here...'
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className='bg-yellow-300 hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded-lg'
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Email;
