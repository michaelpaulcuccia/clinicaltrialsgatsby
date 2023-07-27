import React from 'react';
import styled from 'styled-components';
import { colors } from '../constants';

const Root = styled.div`
    padding: 12px 18px 12px 0;
    font-weight: 300;
    font-size: 18px;
    line-height: 1.75rem;
    -webkit-font-smoothing: antialiased;

    .more-info {
        font-style: italic;
    }

    a {
        text-decoration: none;
        color: ${colors.strongBlue};
        font-weight: 400;

        &:hover {
            color: ${colors.strongBlueHover};
        }
    }
`;

export default function ReturnStudiesText({children}) {
  return (
    <Root>{children}</Root>
  )
}
