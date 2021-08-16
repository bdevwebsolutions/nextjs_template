import type { NextPage } from 'next'
import React from 'react';

//Components
import { ThemeButton, H1, BodyContainer } from '../components';

//Context
import { StoreContext } from '../context/store';

//Nextjs
import Link from 'next/link';

//HOC
import { withFooterAndHeaderHOC } from '../hoc';

const Login: NextPage = () => {

  const {connected, toggleConnected} = React.useContext(StoreContext);  

  return (
    <BodyContainer>
      <ThemeButton/>
      <H1>LOGIN</H1>
      <button onClick={toggleConnected}>LOGIN</button>
      {connected ? <Link href='/protected'>PROTECTED PAGE</Link> : null}
    </BodyContainer>
  )
}

export default withFooterAndHeaderHOC(Login)
