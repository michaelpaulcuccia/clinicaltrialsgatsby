import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../constants'

const Root = styled.div`
    background-color: #FAF9F6;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {

        &:not(:first-child) {
            text-align: center;
            //HIDES ALL DESKTOP NAV ITEMS EXCEPT FOR LEFT NAV ITEM
            @media (max-width: ${breakpoints.navBarMobileBreak}) {
                display: none;
            }
        }
        &:first-child {
            padding-left: 5px;
        }
        &:last-child {
            padding-right: 5px;
        }       
    }

`;

const LeftNavItem = styled.div`
    min-width: 250px;
`;

export default function Nav() {
  return (
    <Root>
        <LeftNavItem>Antigrafo<br/>Clinical Trials</LeftNavItem>
        <div>What Are <br/>Clinical Trials</div>
        <div>Why <br/>Participate</div>
        <div>Oncology <br/>Research</div>
        <div>Rare Disease <br/>Research</div>
    </Root>
  )
}

//TO DO - show Hamburger on Mobile View