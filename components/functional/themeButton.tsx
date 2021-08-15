import React from 'react'
import { StoreContext } from '../../context/store'



export const ThemeButton: React.FC = () => {

    const {theme, toggleTheme} = React.useContext(StoreContext);

    return <button onClick={toggleTheme}>{theme === "light" ? "dark" : "light"} mode</button>
}