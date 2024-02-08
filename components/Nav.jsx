'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';

const isUserLoggedIn = true;

const Nav = () => {
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const setProviders = async () => {
      const repsonse = await getProviders();

      setProviders(response);
    };
  });

  return (
    <nav className='flex-between w-full mb-16 pt-3'>
      <Link href='/' className='flex gap-2 flex-center'>
        <Image
          src='/assets/images/logo.svg'
          width={30}
          height={30}
          alt='promptopia logo'
          className='object-contain'
        />
        <p className='logo_text'>Promptopia</p>
      </Link>

      {/* Desktop navigation */}
      <div className='sm:flex hidden'>
        {isUserLoggedIn ? (
          <div className='flex gap-3 md:gap-5'>
            <Link href='/create-prompt' className='black_btn'>
              Create Post
            </Link>
            <button type='button' onClick={signOut} className='outline_btn'>
              Sign Out
            </button>
            <Link href='/profile'>
              <Image
                src='/assets/images/logo.svg'
                className='rounded-full'
                alt='profile'
                width={37}
                height={37}
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type='button'
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className='black_btn'
                >
                  Sign Up
                </button>
              ))}
          </>
        )}
      </div>

      {/* Mobile navigation */}
      <div className='sm:hidden flex relative'>
        {isUserLoggedIn ? (
          <div className='flex'>
            <Image
              src='/assets/images/logo.svg'
              className='rounded-full'
              alt='profile'
              width={37}
              height={37}
            />
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type='button'
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className='black_btn'
                >
                  Sign Up
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
