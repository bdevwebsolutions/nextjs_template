//MAIN _APP FILE

//Styling
import "nprogress/nprogress.css";
import '../styles/globals.css'
import {GlobalStyle} from '../styles/globalStyle';
import { BodyContainer } from "../components";

//Nprogress
import NProgress from 'nprogress';
import {Router} from 'next/router';

//_app 
import type { AppProps } from 'next/app';

//Context
import StoreProvider from '../context/store';
import Theme from '../providers/themeProvider';




NProgress.configure({
  minimum: 0.2,
  showSpinner: false,
  easing: "ease",
  speed: 800,
})

Router.events.on('routeChangeStart', () => {NProgress.start()})
Router.events.on('routeChangeComplete', () => {NProgress.done()})
Router.events.on('routeChangeError', () => {NProgress.done()})


function MyApp({ Component, pageProps }: AppProps) {

  return (
  <StoreProvider>
    <GlobalStyle/>
    <Theme>
        <Component {...pageProps} />
    </Theme>
  </StoreProvider>
  )
}

//WITH BANNER 
export default MyApp


//WITHOUT BANNER