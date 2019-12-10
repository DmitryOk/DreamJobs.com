import {getDailyVacancies} from '../actions/actions';


const initialState = {
    url:'',
    loading:false,
    error:false
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){

        case 'GET_DAILY_VACANCIES':
            return (dispatch) => {
                dispatch(getDailyVacancies);
                fetch(action.url)
                    .then(res => res.json())
                    .then((data,err)=> dispatch(data))
            };

        default: return state ;
    }
}

export default rootReducer;