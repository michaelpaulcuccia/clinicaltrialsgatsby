import React, { useState } from 'react';
import Container from './Container';
import { getStudiesByCondition } from '../lib/dataFetching';

export default function StudiesByConditionForm() {

    const [conditionStudies, setConditionStudies] = useState([]);
    const [showStudies, setShowStudies] = useState(false);

    const handleClick =  async () => {
        const res = await getStudiesByCondition('acl tear');
        setConditionStudies(res);
        setShowStudies(!showStudies);
    }

  return (
    <Container>
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
