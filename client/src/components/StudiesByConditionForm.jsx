import React, { useState } from 'react';
import Container from './Container';
import { getStudiesByCondition } from '../lib/dataFetching';

export default function StudiesByConditionForm() {

    const [conditionStudies, setConditionStudies] = useState([]);
    const [data, setData] = useState('');
    const [showStudies, setShowStudies] = useState(false);

    const handleClick =  async () => {

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
      <label>Enter Search Criteria</label>
      <input type='text' value={data} onChange={(event) => setData(event.target.value)} />
      <button onClick={handleClick}>click to see studies</button>
      {
        showStudies &&
        conditionStudies.map((items, i) => (
          <div key={i}>{items.BriefTitle}, <a target='_blank' href={`https://classic.clinicaltrials.gov/ct2/show/${items.NCTId}`}>{items.NCTId}</a></div>
        ))
      }
    </Container>
  )
}
