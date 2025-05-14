import { createGlobalStyle } from 'styled-components';
import type { theme } from './theme/theme';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@500;700&family=Poppins:wght@400;600&display=swap');

  * { margin: 0; padding: 0; box-sizing: border-box; }

  body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.fonts.body};
    line-height: 1.6;
  }

  h1,h2,h3,h4,h5,h6 {
    font-family: ${({ theme }) => theme.fonts.heading};
  }

  img { max-width: 100%; display: block; }
`;
