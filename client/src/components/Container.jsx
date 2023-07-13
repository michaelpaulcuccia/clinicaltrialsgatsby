import React from 'react';
import styled from 'styled-components';

const Root = styled.div`
  max-width: 1040px;
  margin-left: auto;
  margin-right: auto;
`;

export default function Container({children}) {
  return (
    <Root>{children}</Root>
  )
}
