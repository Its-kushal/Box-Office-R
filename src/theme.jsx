import { ThemeProvider, createGlobalStyle } from 'styled-components';

const theme = {
   fontFamily: 'Roboto, sans-serif',
   mainColors: {
      red: '#ff0000',
      gray: '#c6c6c6',
      dark: '#353535',
   },
};

const GlobalStles = createGlobalStyle`
    body {
      font-family: ${({ theme }) => theme.fontFamily};
      font-size: 18px;
      margin: 0;
      padding-top: 40px;
      padding-left: 15px;
      padding-right: 15px;
    }
  `;

export const GlobalTheme = ({ children }) => {
   return (
      <ThemeProvider theme={theme}>
         <GlobalStles />
         {children}
      </ThemeProvider>
   );
};
