import React from 'react'
import { ThemeProvider } from 'styled-components'
import { StoreContext } from '../context/store'
import { light, dark } from '../styles/theme'

const Theme: React.FC<{children: React.ReactNode}> = ({children}) => {


    const {theme} = React.useContext(StoreContext);

    return (
        <ThemeProvider theme={theme === "light" ? light : dark}>
            {children}
        </ThemeProvider>
    )
}

export default Theme;