import React, { useState } from 'react';
import styled from 'styled-components';
import Container from './Container';
import Button from './Button';
import StudyText from './StudyText';
import { getStudiesByCondition } from '../lib/dataFetching';

const Box = styled.div`

  display: flex;
  align-items: center;
  padding-bottom: 10px;

  label {
    font-size: 18px;
    line-height: 20px;
    font-weight: 600;
    padding-right: 5px;
  }

  input {
    border-radius: 2px;
    margin-right: 5px;
  }
`;

export default function StudiesByConditionForm() {

    const [conditionStudies, setConditionStudies] = useState([]);
    const [data, setData] = useState('');
    const [showStudies, setShowStudies] = useState(false);

    const handleClick =  async () => {
      console.log('click')

      if (data !== '') {
        const res = await getStudiesByCondition(data);
        setConditionStudies(res);
        setShowStudies(!showStudies);
        //CLEARS FROM
        setData('')
      }
        
    }

  return (
    <Container>
      <Box>
        <label>Search by Condition</label>
        <input type='text' value={data} onChange={(event) => setData(event.target.value)} />
        {/* <Button onClick={handleClick}>Click to see studies</Button> */}
        <button onClick={handleClick}>Click to see studies</button>
      </Box>
      {
        showStudies &&
        conditionStudies.map((items, i) => (
          <StudyText key={i}>{items.BriefTitle}, <a target='_blank' rel="noreferrer" href={`https://classic.clinicaltrials.gov/ct2/show/${items.NCTId}`}>{items.NCTId}</a></StudyText>
        ))

      }
    </Container>
  )
}
