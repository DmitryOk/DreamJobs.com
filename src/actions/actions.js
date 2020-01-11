
export const FETCH_VACANCIES_REQUEST = 'FETCH_VACANCIES_REQUEST';
export const FETCH_VACANCIES_SUCCESS = 'FETCH_VACANCIES_SUCCESS';
export const FETCH_VACANCIES_REFUSE  = 'FETCH_VACANCIES_REFUSE';
export const SEARCH_VALUE = 'SEARCH_VALUE';


export const fetchVacanciesRequest = url => {
    return {
        type:FETCH_VACANCIES_REQUEST,
        status:'Pending',
        url
    }
}

export const fetchVacanciesSuccess = response => {
    return {
        type:FETCH_VACANCIES_SUCCESS,
        status:200,
        response 
    }
}

export const fetchVacanciesRefuse = err =>{
    return {
        type : FETCH_VACANCIES_REFUSE,
        status:'FAILED',
        err
    }
}

export const searchValue = value =>{
    return {
        type : SEARCH_VALUE,
        value
    }
}

export const onSubmit = event = dispatch =>{
    event.preventDefault();
    dispatch(searchValue(event.target.value));
}

const fetchVacancies = url => dispatch => {
    dispatch(fetchVacanciesRequest(url));
    return fetch(url)
            .then(data => data.json())
            .then( response => dispatch(fetchVacanciesSuccess(response)))
            .catch(err => dispatch(fetchVacanciesRefuse(err)))
}


export default fetchVacancies;


