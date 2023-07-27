import React from 'react';
import styled from 'styled-components';

const Root = styled.div`
    border: 1px solid #454545;
    border-radius: 6px;
    padding: 30px 15px 40px 15px;
    margin-bottom: 12px;
    margin-left: 2.5px;
    margin-right: 2.5px;

`;

export default function ReturnStudiesContainer({children}) {
  return (
    <Root>{children}</Root>
  )
}
