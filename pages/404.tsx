import type { NextPage } from 'next'
import React from 'react';
import {H1, ThemeButton} from '../components';
import Link from 'next/link';

const FourOFour: NextPage = () => {
  return (
    <>
      <ThemeButton/>
      <H1>404</H1>
        <p>PAGE NOT FOUND</p>
      <Link href="/">HOME</Link>
    </>
  )
}

export default FourOFour
