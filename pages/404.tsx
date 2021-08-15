import type { NextPage } from 'next'
import React from 'react';
import {H1, ThemeButton, BodyContainer} from '../components';
import Link from 'next/link';

const FourOFour: NextPage = () => {
  return (
    <BodyContainer>
      <ThemeButton/>
      <H1>404</H1>
      <p>PAGE NOT FOUND</p>
      <Link href="/">HOME</Link>
    </BodyContainer>
  )
}

export default FourOFour
