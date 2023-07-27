import React, { useState } from 'react';
import { StaticImage } from "gatsby-plugin-image";
import styled from 'styled-components';
import { breakpoints } from '../constants';

const Wrapper = styled.div`
    width: 100vw;
    background-color: #FAF9F6;
`;

const Root = styled.div`
    max-width: 1040px;
    margin: 0 auto;
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
        font-weight: 300;
        color: #0077b6;
    }
`;

const OverlayMenu = styled.div`
    display: none;

    @media (max-width: ${breakpoints.navBarMobileBreak}) {
        display: block;
        position: absolute;
        height: calc(100% - 80px);
        width: 100%;
        color: white;
        background-color: black;
        top: 80px;
        right: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 30px;

        .navItems {
            -webkit-font-smoothing: antialiased;
            line-height: 2.25rem;
            font-size: 18px;
            padding-bottom: 10px;
        }
                
    }
    

`;

export default function Nav() {

    const [showOverlayMenu, setShowOverlayMenu] = useState(false);

    const handleHamburgerClick = () => {
        setShowOverlayMenu(!showOverlayMenu);
    }

  return (
    <Wrapper>
        <Root>
            <LeftNavItem>
                <span className='top'>Antigrafo</span><br/><span className='bottom'>clinical trials</span>
            </LeftNavItem>
            <div className='navItems'>What Are <br/>Clinical Trials</div>
            <div className='navItems'>Why <br/>Participate</div>
            <div className='navItems'>Oncology <br/>Research</div>
            <div className='navItems'>Rare Disease <br/>Research</div>
            <div className='burgerContainer' onClick={handleHamburgerClick}>
                <StaticImage 
                    src='../images/burger-menu.svg' 
                    height={32}
                    width={32}
                    alt='' 
                />
            </div>
        </Root>
        {
            showOverlayMenu &&
            <OverlayMenu>
                <div className='navItems'>What Are Clinical Trials</div>
                <div className='navItems'>Why Participate</div>
                <div className='navItems'>Oncology Research</div>
                <div className='navItems'>Rare Disease Research</div>
            </OverlayMenu>
        }
    </Wrapper>

  )
}
