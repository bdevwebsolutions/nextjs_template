## NEXTJS TYPESCRIPT TEMPLATE

### INCLUDED

 - React with typescript
 - Styled components
    * Theme based on the two theme objects under /styles/theme.ts
    * GlobalStyle
 - Context
    * Store Context
        > theme: theme variable: "light" | "dark"
        > toggleTheme: changes the active theme
        > connected: boolean that indicates if user is connected to the app
        > toggleConnected: toggles the connected state
 - HOC's
    * withAuth: Checks if the connected bool from the store context is true, this allow a route to  be viewed


