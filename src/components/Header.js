/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

const Title = styled.h1`
  font-size: 1.25rem;
  font-family: ${(props) => props.theme.fonts.headings};
  color: #F9F8F8;
  @media screen and (min-width: 1024px) {
    font-size: 3rem;
  }
`;

export const Header = () => {
  return (
    <header
      css={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: '#252628',
        color: '#F9F8F8',
        height: '8vh',
        textAlign: 'center',
        borderBottom: '1px solid #8D9F9B',
        padding: '2%',
      }}
    >
      <div></div>
      <Title>Codebreaker</Title>
      <div></div>
    </header>
  )
}

