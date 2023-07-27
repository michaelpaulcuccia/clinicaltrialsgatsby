import React from 'react';
import styled from 'styled-components';
import { maxWidth } from '../constants';

const Root = styled.div`
  max-width: ${maxWidth};
  margin-left: auto;
  margin-right: auto;
`;

export default function Container({children}) {
  return (
    <Root>{children}</Root>
  )
}
