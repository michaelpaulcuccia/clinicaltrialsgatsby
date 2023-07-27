import React from 'react';
import styled from 'styled-components';
import { colors } from '../constants';

const Wrapper = styled.div`
    width: 100vw;
    background-color: ${colors.offWhite};
`;

const Root = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${colors.offWhite};
  padding-top: 40px;
  padding-bottom: 60px;
  max-width: 1040px;
  margin: 0 auto;
`;

const StyledText = styled.span`
  font-weight: bold;
  color: ${colors.lightBlue};
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
