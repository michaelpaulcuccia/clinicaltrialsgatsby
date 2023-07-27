import React, { useState } from 'react';
import styled from 'styled-components';
import Container from './Container';
import { getStudiesByCondition } from '../lib/dataFetching';
import ReturnStudiesContainer from './ReturnStudiesContainer';
import ReturnStudiesText from './ReturnStudiesText';

const Box = styled.div`

  display: flex;
  align-items: center;
  padding-top: 30px;
  padding-bottom: 10px;

  label {
    padding-right: 5px;
    padding-left: 5px;
  }

  input {
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

    const handleClear = () => {
      setShowStudies(!showStudies);
    }

  return (
    <Container>
      <Box>
        <label>Search by Condition</label>
        <input type='text' value={data} onChange={(event) => setData(event.target.value)} />
        <button className='button-one' onClick={handleClick}>Click to see studies</button>
      </Box>
      {
        showStudies && 
        <ReturnStudiesContainer>
          {
            conditionStudies.map((items, i) => (
              <ReturnStudiesText key={i}>
                <span className='title'>{i + 1}.{" "}{items.BriefTitle} </span>
                <br/>
                {
                  items.Condition !== '' ? <span>Condition: {items.Condition}</span> : null
                }
                <br/>
                {
                  items.NCTId !== '' ? <span className='more-info'>For More Information:{" "} 
                  <a target='_blank' rel="noreferrer" href={`https://classic.clinicaltrials.gov/ct2/show/${items.NCTId}`}>{items.NCTId}</a></span>
                  : null
                }
                </ReturnStudiesText>
            ))
          }
        </ReturnStudiesContainer>
       
      }
      {
        showStudies &&
        <button className='button-one' onClick={handleClear}>Clear Form</button>
      }
    </Container>
  )
}
