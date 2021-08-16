import type { NextPage } from 'next'
import React from 'react';
import {H1, ThemeButton, BodyContainer} from '../components';
import Link from 'next/link';
import { withFooterAndHeaderHOC } from '../hoc';

const Home: NextPage = () => {
  return (
    <BodyContainer>
      <ThemeButton/>
      <H1>TEMPLATE</H1>
      <Link href="/protected">PROTECTED (requires login, protected route)</Link>
      <Link href="/login">LOGIN</Link>
      <ul>
        <li>1</li>
        <li>2</li>
      </ul>
    </BodyContainer>
  )
}



export default withFooterAndHeaderHOC(Home)
