"use client";
import React, { useState } from 'react';
import GithubIcon from "../../../public/images/github-icon.svg";
import LinkedinIcon from "../../../public/images/linkedin-icon.svg";
import Link from 'next/link';
import Image from 'next/image';
import AnimatedSection from './AnimatedSection';

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
        alert('Awkward! Looks like this section is working properly at the moment, please try again or email me directly at gromanalexander@gmail.com');
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
    <section className='snap-section min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-16 px-4' id="email">
      <div className="max-w-6xl w-full mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Get In Touch</h2>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          <AnimatedSection>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
              <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-4'>Hit me up</h3>
              <p className='text-gray-600 dark:text-gray-300 mb-6'>
                Question? Proposal? Request? Just want to talk? <br />Here&apos;s the place.
              </p>
              <div className='socials flex flex-row gap-4 mb-6'>
                <Link href='https://github.com/groalex1' className="hover:opacity-80 transition-opacity">
                  <Image src={GithubIcon} alt='Github Icon' className="w-8 h-8 dark:invert" />
                </Link>
                <Link href="https://www.linkedin.com/in/alexandergromanSWE" className="hover:opacity-80 transition-opacity">
                  <Image src={LinkedinIcon} alt='LinkedIn Icon' className="w-8 h-8" />
                </Link>
              </div>
              
              <div className="hidden md:block">
                <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Let&apos;s build something amazing together</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  I&apos;m always open to new opportunities and interesting projects. Whether you need a full website, 
                  a specific feature, or just want to chat about tech, I&apos;d love to hear from you.
                </p>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={200}>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
              <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
                <div>
                  <label htmlFor='email' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                    Your Email
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    value={emailData.email}
                    onChange={handleChange}
                    className='bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 
                              text-gray-900 dark:text-white text-sm rounded-lg block w-full p-2.5
                              focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark focus:border-transparent'
                    required
                    placeholder='default@domain.com'
                  />
                </div>

                <div>
                  <label htmlFor='subject' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                    Subject
                  </label>
                  <input
                    type='text'
                    id='subject'
                    name='subject'
                    value={emailData.subject}
                    onChange={handleChange}
                    className='bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 
                              text-gray-900 dark:text-white text-sm rounded-lg block w-full p-2.5
                              focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark focus:border-transparent'
                    required
                    placeholder='What is this about?'
                  />
                </div>

                <div>
                  <label htmlFor='message' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                    Message
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    value={emailData.message}
                    onChange={handleChange}
                    className='bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 
                              text-gray-900 dark:text-white text-sm rounded-lg block w-full p-2.5
                              focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark focus:border-transparent'
                    required
                    rows={5}
                    placeholder='Your message here...'
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className='bg-gradient-to-r from-secondary-light to-primary-light dark:from-secondary-dark dark:to-primary-dark
                            text-white font-medium py-2.5 px-5 rounded-lg hover:shadow-lg transition-all duration-300
                            disabled:opacity-70 disabled:cursor-not-allowed'
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Email;