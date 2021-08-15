import '../styles/globals.css'
import type { AppProps } from 'next/app';
import {GlobalStyle} from '../styles/globalStyle';
import StoreProvider from '../context/store';
import Theme from '../providers/themeProvider';



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
export default MyApp
