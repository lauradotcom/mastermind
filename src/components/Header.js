/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Title } from '../styles.js';

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

