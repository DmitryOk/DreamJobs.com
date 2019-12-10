import * as types from '../constants/actionTypes';

export const getDailyVacancies = () => {
    return {
        type :types.GET_DAILY_VACANCIES,
        url:`http://localhost:3333/${types.GET_DAILY_VACANCIES.toLowerCase()}`
    }
}

