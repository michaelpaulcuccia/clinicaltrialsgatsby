import React from 'react';
import Nav from './Nav';

export default function DefaultLayout({children}) {
  return (
    <>
      <Nav/>
        <div>
          {children}
        </div>
    </>
  )
}
