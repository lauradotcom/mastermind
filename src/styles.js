import styled from '@emotion/styled';
import '@fontsource/syne-mono';
import '@fontsource/inter';

export const theme = {
  colors: {
    background: '#252628',
    primary: '#F9F8F8',
  },
  fonts: {
    headings: `'Syne Mono', monospace`,
    body: `'Inter', sans-serif`,
  }
}

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #4178BC;
  color: #FFF;
  text-transform: uppercase;
  font-family: ${(props) => props.theme.fonts.body};
  font-weight: 600;
  font-size: 1rem;
  margin: 1rem auto;
  padding: 1rem;
  cursor: pointer;
`