import type { NextPage } from 'next'
import React from 'react';
import {H1, ThemeButton, BodyContainer} from '../components';
import { withAuthHOC } from '../hoc/withAuth';
import { StoreContext } from '../context/store';
import { withFooterAndHeaderHOC } from '../hoc';

const Protected: NextPage = () => {

    const {toggleConnected} = React.useContext(StoreContext);  

  return (
    <BodyContainer>
      <ThemeButton/>
      <H1>PROTECTED</H1>
      <button onClick={toggleConnected}>LOGOUT</button>
    </BodyContainer>
  )
}

export default withFooterAndHeaderHOC(withAuthHOC(Protected))
