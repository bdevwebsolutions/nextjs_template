import type { NextPage } from 'next'
import React from 'react';
import {H1, ThemeButton, BodyContainer} from '../components';
import Link from 'next/link';
import { withFooterAndHeaderHOC } from '../hoc';
import Skeleton from 'react-loading-skeleton';

const Home: NextPage = () => {
  return (
    <>
      <ThemeButton/>
      <H1>TEMPLATE</H1>
      <Link href="/protected">PROTECTED (requires login, protected route)</Link>
      <Link href="/login">LOGIN</Link>
      <ul>
        <Skeleton count={5} duration={2}/>
      </ul>
    </>
  )
}



export default withFooterAndHeaderHOC(Home)
