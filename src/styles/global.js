import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

button {
  padding: 0;
  background: none;
  border: 0;
}

body {
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  color: ${({ theme }) => theme.COLORS.BLACK};

  -webkit-font-smoothing: antialiased;
}

body, input, button, textarea {
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: 500;
  outline: none;
}

a {
  text-decoration: none;
  color: ${({ theme }) => theme.COLORS.BLACK};
}

button, a {
  cursor: pointer;
  transition: filter 0.2s;
}

button:hover, a:hover {
  filter: brightness(0.9);
}

`;
