import React from 'react';
import styled from 'styled-components'
import { breakpoints } from '../constants';
import { StaticImage } from "gatsby-plugin-image";

const Root = styled.div`
    @media (max-width: ${breakpoints.navBarMobileBreak}) {
        padding: 0 5px;
    } 
`;

export default function Hero() {
  return (
    <Root>
        <StaticImage 
            src='../images/julia-koblitz-RlOAwXt2fEA-unsplash.jpg'
            alt=''
            height={900}
        />
    </Root>
  )
}
