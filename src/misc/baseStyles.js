import { css } from 'styled-components'

const baseStyles = css`
  html {
    box-sizing: border-box;
    height: 100%;
    font-size: 62.5%;
  }

  *,
  ::before,
  ::after {
    box-sizing: inherit;
  }

  body {
    height: 100%;
    font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', 'Segoe UI',
      'Noto Sans Japanese', 'ヒラギノ角ゴ ProN W3', Meiryo, sans-serif;
    font-size: 1.4rem;
    line-height: 1.7;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }

  img,
  video {
    max-width: 100%;
    vertical-align: middle;
  }

  a {
    transition: color 0.2s ease-out;
    text-decoration: none;
  }

  a:hover {
  }

  a:focus {
    transition: outline-width 0.1s ease-out;
    outline: thin dotted;
  }

  button {
    padding: 0;
    border: 0;
    background-color: transparent;
    appearance: none;
    cursor: pointer;
  }

  button:focus,
  html [type='button']:focus,
  [type='reset']:focus,
  [type='submit']:focus {
    outline: none;
  }

  input,
  textarea {
    -webkit-appearance: none;
  }

  input[type='number']::-webkit-outer-spin-button,
  input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  dl,
  dd,
  figure {
    margin: 0;
  }

  small {
    font-size: inherit;
  }

  svg {
    fill: currentColor;
  }

  body > svg {
    position: absolute;
    width: 0;
    height: 0;
  }

  fieldset {
    padding: 0;
    border: 0;
  }

  select {
    border: 0;
    appearance: none;
  }

  select::-ms-expand {
    display: none;
  }

  [aria-controls] {
    cursor: pointer;
  }
`

export default baseStyles
