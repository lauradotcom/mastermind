import styled from '@emotion/styled';
import '@fontsource/syne-mono';
import '@fontsource/inter';

export const theme = {
  colors: {
    backgroundDark: '#252628',
    backgroundLight: '#F9F8F8',
    primaryDark: '#F9F8F8',
    primaryLight: '#252628',
  },
  fonts: {
    headings: `'Syne Mono', monospace`,
    body: `'Inter', sans-serif`,
  }
}

export const Title = styled.h1`
  font-size: 1.25rem;
  font-family: ${(props) => props.theme.fonts.headings};
  color: hotpink;
  @media screen and (min-width: 1024px) {
    font-size: 3rem;
  }
`;