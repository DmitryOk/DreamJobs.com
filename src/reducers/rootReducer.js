import {FETCH_VACANCIES_REFUSE,FETCH_VACANCIES_REQUEST,FETCH_VACANCIES_SUCCESS} from '../actions/actions'


const initialState = {
    isFetching:false,
    data:[]
}

const rootReducer = (state = initialState, action) => {

    switch(action.type){

        case FETCH_VACANCIES_REQUEST :
            return {
                ...state,
                isFetching:true,
  
            }
        case FETCH_VACANCIES_SUCCESS :
            return {
                ...state,
                isFetching:false,
                data:action.response
            }
        case FETCH_VACANCIES_REFUSE :
            return {
                ...state,
                isFetching:false,
            }

         default :
            return {
                ...state
            }   
    }

}

export default rootReducer;