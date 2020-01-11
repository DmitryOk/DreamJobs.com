import {FETCH_VACANCIES_REFUSE,FETCH_VACANCIES_REQUEST,FETCH_VACANCIES_SUCCESS , SEARCH_VALUE} from '../actions/actions'
import { ROOT_PATH } from '../../const/const';


const def = `${ROOT_PATH}newest`;

const initialState = {
    isFetching:false,
    data:[],
    value:def
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
        case SEARCH_VALUE :
            return {
                ...state,
                value:action.value
            }

        default :
            return {
                ...state
            }   
    }

}

export default rootReducer;