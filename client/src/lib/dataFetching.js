export async function getStudiesByCondition(arg) {

    const URL = `https://classic.clinicaltrials.gov/api/query/study_fields?expr=${arg}&fields=NCTId%2CBriefTitle%2CCondition&min_rnk=1&max_rnk=&fmt=json`;

    const res = await fetch(URL);

    const data = await res.json();

    console.log(data)

    if (data.StudyFieldsResponse.NStudiesFound === 0 || data.StudyFieldsResponse.NStudiesReturned === 0) {

        let arr = [
            {
                BriefTitle: `No Studies were found for ${arg}`,
                NCTId: ''
            }
        ];

        return arr;

    } else {

        const studyFields = data.StudyFieldsResponse.StudyFields;
        return studyFields;
        
    }

}