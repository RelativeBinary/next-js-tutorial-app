'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';

const isUserLoggedIn = true;

const Nav = () => {
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

      {/* mobile navigation */}
      <div className='sm:flex hidden'>
        {isUserLoggedIn ? <div></div> : <></>}
      </div>
    </nav>
  );
};

export default Nav;
