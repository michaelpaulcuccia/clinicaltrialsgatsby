import React from 'react';
import Container from '../components/Container';
import Nav from './Nav';

export default function DefaultLayout({children}) {
  return (
    <>
      <Nav/>
        <Container>
        {children}
      </Container>
    </>

  )
}
