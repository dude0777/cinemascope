import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --color-background-start: #1a1e2e;
    --color-background-end: #242235;
    --color-primary: #845EC2;
    --color-primary-dark: #a6d32b;
    --color-text: #ffffff;
    --color-text-secondary: #9ca3af;
    --color-card-background: rgba(30, 34, 50, 0.8);
    --color-overlay: rgba(0, 0, 0, 0.7);
    --border-radius-large: 20px;
    --border-radius-medium: 15px;
    --border-radius-small: 10px;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Arial', sans-serif;
    background-color : #0d0f1a;
    color: var(--color-text);
    min-height: 100vh;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  h1, h2, h3, h4, h5, h6 {
    color: var(--color-primary);
    margin-bottom: 0.5em;
  }

  p {
    margin-bottom: 1em;
  }

  /* Utility classes */
  .text-primary {
    color: var(--color-primary);
  }

  .text-secondary {
    color: var(--color-text-secondary);
  }
`;

export default GlobalStyle;