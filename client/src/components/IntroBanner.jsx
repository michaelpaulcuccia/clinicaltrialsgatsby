import React from 'react';
import styled from 'styled-components';
import { colors, breakpoints } from '../constants';

const Wrapper = styled.div`
  width: 100vw;
  background-color: ${colors.offWhite};

  @media (max-width: ${breakpoints.navBarMobileBreak}) {
    padding-left: 10px;
  } 
`;

const Root = styled.div`
  display: flex;
  justify-content: flex-end;
  background-color: ${colors.offWhite};
  padding-top: 40px;
  padding-bottom: 60px;
  padding-right: 6px;
  max-width: 1040px;
  margin: 0 auto;
`;

const StyledText = styled.span`
  font-weight: bold;
  color: ${colors.strongBlue};
  font-size: 22px;
  line-height: 2.25rem;
`;

export default function IntroBanner() {
  return (
    <Wrapper>
        <Root>
            <div>
                <StyledText>Discover</StyledText> new treatments.  <br/><br/>Advance medical research. <br/><br/>Potentially <StyledText>gain access</StyledText> to investigational treatments.
            </div>
        </Root>
    </Wrapper>
  )
}
