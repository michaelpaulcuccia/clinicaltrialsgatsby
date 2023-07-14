import React from 'react';
import styled from 'styled-components';

const Root = styled.div`
    font-size: 18px;
    padding: 8px 0px;

    a {
        color: inherit;
        text-decoration: none;
        font-style: italic;
        cursor: pointer;
    }
`;

export default function StudyText({children}) {
  return (
    <Root>{children}</Root>
  )
}
