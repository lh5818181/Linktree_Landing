
import type { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    primary: '#00BFFF',
    accent: '#A100FF',
    background: '#0D0D0D',
    secondary: '#1A1A1A',
    white: '#F5F5F5',
  },
  fonts: {
    heading: 'League Spartan, sans-serif',
    body: 'Poppins, sans-serif',
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
  },
};

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      accent: string;
      background: string;
      secondary: string;
      white: string;
    };
    fonts: {
      heading: string;
      body: string;
    };
    breakpoints: {
      sm: string;
      md: string;
      lg: string;
    };
  }
}
