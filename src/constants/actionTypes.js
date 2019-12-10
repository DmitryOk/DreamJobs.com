/*todo: remove temporary comments when application structure become clarified*/

/* client side vacancy actions types*/

//send query onto the server and get daily vacancies

export const GET_DAILY_VACANCIES = "GET_DAILY_VACANCIES";

//should send query onto the server , and render vacancy list 
export const GET_VACANCIES = "GET_VACANCIES";

//should re-render vacancy list on client if employer/applicant wanna hide any of them   
export const UPDATE_VACANCIES = "UPDATE_VACANCIES";

// should send query onto the server , then show full vacancy info 
export const GET_FULL_VACANCY_INFO = "GET_FULL_VACANCY_INFO"; 

/* vacancy action types for server */

//should create vacancy profile in employer's profile,then send info onto server & create document in appropriate db section
export const CREATE_VACANCY_PROFILE = "CREATE_VACANCY_PROFILE" ;

//should send query onto the server , and render full vacancy profile within employer's profile  
export const GET_VACANCY_PROFILE = "GET_VACANCY_PROFILE";

//should send renewed vacancy information from employer's profile onto server and db 
export const EDIT_VACANCY_PROFILE = "EDIT_VACANCY_PROFILE";

// should remove vacancy from server & db & employer's profile 
export const REMOVE_VACANCY_PROFILE = "REMOVE_VACANCY_PROFILE"; 

/* client side resume actions types*/

//should sent query onto the server & render resume list
export const GET_RESUME = "GET_RESUME";

// should re-render resume list on client if employer/applicant wanna hide any of them 
export const UPDATE_RESUME = "UPDATE_RESUME";

// should send query onto the server , then show full resume info
export const GET_FULL_RESUME_INFO = "GET_FULL_RESUME_INFO"; 

/* resume action types for server */

 //should create resume profile in applicant's profile,then send info onto server & create document in appropriate db section 
export const CREATE_RESUME_PROFILE = "CREATE_RESUME_PROFILE";

 //should send query onto the server , and render full resume profile within applicant's profile
export const GET_RESUME_PROFILE = "GET_RESUME_PROFILE";

 //should send renewed resume information from applicant's profile onto server and db
export const EDIT_RESUME_PROFILE = "EDIT_RESUME_PROFILE";

//should remove resume from server & db & applicant's profile
export const REMOVE_RESUME_PROFILE = "REMOVE_RESUME_PROFILE"; 

/*user profile action types*/

//should create common profile
export const CREATE_MY_PROFILE = "CREATE_MY_PROFILE"; 

//should send query onto the server and get common profile info
export const GET_MY_PROFILE = "GET_MY_PROFILE"; 

//should send renewed common information from  profile onto server and db
export const EDIT_MY_PROFILE = "EDIT_MY_PROFILE"; 

// should remove whole profile from server & db 
export const REMOVE_MY_PROFILE = "REMOVE_MY_PROFILE"; 




