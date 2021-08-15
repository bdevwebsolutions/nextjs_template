import React from 'react'

/* *
    GLOBAL STORE
    Contains global params used in the whole application:
        - Theme: light | dark
        - ToggleTheme: toggles between the two themes,
        - Connected: check if user is logged in
        - ToggleConnected: login or logout

*/
type Store = {
    theme: "light" | "dark",
    toggleTheme: () => void,
    connected: boolean,
    toggleConnected: () => void,
}

export const StoreContext = React.createContext<Partial<Store>>({});

const StoreProvider: React.FC<{children: React.ReactNode}> = ({children}) => {

    //STORE STATE

    //Themestate + toggle theme function
    const [theme, setTheme] = React.useState<"light" | "dark">("light");
    const toggleTheme: () => void = () => {
        theme === "light" ? setTheme("dark") : setTheme('light')
    }

    //Login State + toggle for login
    const [connected, setConnected] = React.useState<boolean>(false);
    const toggleConnected: () => void = () => {
        setConnected(prevState => !prevState);
    }

    return <StoreContext.Provider value={{theme, toggleTheme, connected, toggleConnected}}>{children}</StoreContext.Provider>
}

export default StoreProvider;