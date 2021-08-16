## NEXTJS TYPESCRIPT TEMPLATE

### INCLUDED

#### 1: React with typescript

Nextjs base with typescript support

#### 2: Styled components

- Theme based on the two theme objects under /styles/theme.ts
- GlobalStyle

#### MISC PACKAGES
- React Spring: Animation library
- Formik: form library
- Recharts: Charting library
- i18-react and i18next: Internationalization framework: translations etc
- react-use: collection of react hooks

#### 3: Context
* Store Context
    - theme: theme variable: "light" | "dark"
    - toggleTheme: changes the active theme
    - connected: boolean that indicates if user is connected to the app
    - toggleConnected: toggles the connected state
#### 4: HOC's
* withAuth: Checks if the connected bool from the store context is true, this allow a route to  be viewed
* withHeader, withFooter and withFooterAndHeader: injects a header at the top and a footer at the bottom of the page

#### 5: Components
##### 5.1: Container
* Container components for positioning and base styling

##### 5.2: Markup
* Markup components like h1 paragraph etc ...

##### 5.3: Functional
* ThemeButton: Button that toggles the themestate => affects the global theme



