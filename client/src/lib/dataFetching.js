export async function getStudiesByCondition(arg) {

    const URL = `https://classic.clinicaltrials.gov/api/query/study_fields?expr=${arg}&fields=NCTId%2CBriefTitle%2CCondition&min_rnk=1&max_rnk=&fmt=json`;

    const res = await fetch(URL);

    const data = await res.json();

    const studyFields = data.StudyFieldsResponse.StudyFields;

    return studyFields;

}