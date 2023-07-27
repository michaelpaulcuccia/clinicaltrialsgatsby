import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../constants';
import burgerImage from '../../public/assets/burger-menu.svg';

const Root = styled.div`
    background-color: #FAF9F6;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .navItems {
        -webkit-font-smoothing: antialiased;
        line-height: 1.25rem;
        font-size: 14px;
    }

    .burgerContainer {
        display: none;
        max-width: 70px;
        padding-right: 10px;
       
        @media (max-width: ${breakpoints.navBarMobileBreak}) {
            display: block;
            img {
                height: 32px;
                width: 32px;

            }
        }        
    }

    div {
        &:not(:first-child):not(:last-child) {
            text-align: center;
            //HIDES ALL DESKTOP NAV ITEMS EXCEPT FOR LEFT NAV ITEM & HAMBURGER
            @media (max-width: ${breakpoints.navBarMobileBreak}) {
                display: none;
            }
        }
        &:first-child {
            padding-left: 5px;
        }
        &:nth-last-child(2) {
            padding-right: 5px;
        }       
    }

`;

const LeftNavItem = styled.div`
    min-width: 250px;

    .top {
        font-style: oblique;
        letter-spacing: 6px;
        font-size: 18px;
    }

    .bottom {
        font-weight: 400;
    }
`;

export default function Nav() {
  return (
    <Root>
        <LeftNavItem><span className='top'>Antigrafo</span><br/><span className='bottom'>Clinical Trials</span></LeftNavItem>
        <div className='navItems'>What Are <br/>Clinical Trials</div>
        <div className='navItems'>Why <br/>Participate</div>
        <div className='navItems'>Oncology <br/>Research</div>
        <div className='navItems'>Rare Disease <br/>Research</div>
        <div className='burgerContainer'>
            <img src={burgerImage} alt='' />
        </div>
    </Root>
  )
}

//TO DO - show Hamburger on Mobile View