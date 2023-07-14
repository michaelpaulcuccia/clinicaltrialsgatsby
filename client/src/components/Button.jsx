import React from 'react';
import styled from 'styled-components';

const Root = styled.button`
    background-color: #8383e9;
    color: white;
    padding: 4px 12px;
    border-radius: 3px;

    &:hover {
        background-color: #4040ee;
    }
`;

export default function Button({className, children}) {
  return (
    <Root className={className}>{children}</Root>
  )
}
