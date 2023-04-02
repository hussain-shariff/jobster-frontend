
export const initialState = {
    user : '',
    updatedUser : '',
    lastname : '',
    userLocation : "",
    jobs : [],
    showLogoutButton : false,
    showSideBar : false,
    currentPage : 'Stats',
    loading : false,
    isEditing : false,
    editJobId : '',
    company : '',
    position : '',
    location : '',
    jobType : 'full-time',
    filterJobType : 'all',
    status : 'pending',
    filterStatus : 'all',
    search : '',
    sort : 'latest'
}

function jobsReducer(state, action) {
    if(action.type === "SET_USER"){
        const {username, lastname, location } = action.userData
        return {
            ...state,
            user : username,
            updatedUser : username,
            lastname,
            userLocation : location
        }
    }
    if(action.type === "HANDLE_CHANGE"){
        return {
            ...state,
            [action.payload.name] : action.payload.value
        }
    }
    if(action.type === "GET_ALL_JOBS"){
        return {
            ...state,
            jobs : action.jobs
        }
    }
    if(action.type === "TOGGLE_SIDEBAR"){
        return {
            ...state,
            showSideBar : !state.showSideBar
        }
    }
    if(action.type === "CLEAR_VALUES"){
        return {
            ...state,
            company : '',
            position : '',
            location : '',
            jobType : 'full-time',
            filterJobType : 'all',
            status : 'pending',
            filterStatus : 'all',
            isEditing : false,
            search : '',
            sort : 'latest' 
        }
    }
    if(action.type === "TOGGLE_LOGOUT_BUTTON"){
        return {
            ...state,
            showLogoutButton : !state.showLogoutButton
        }
    }
    if(action.type === "SET_CURRENT_PAGE"){
        return {
            ...state,
            currentPage : action.page
        }
    }
    if(action.type === "DELETE_JOB"){
        const updatedJobs = state.jobs.filter(job=> job._id !== action.id)
        return {
            ...state,
            jobs : updatedJobs
        }
    }
    if(action.type === "UPDATE_USER_SUCCESSFULL"){
        return {
            ...state,
            user : state.updatedUser
        }
    }
    if(action.type === "SET_EDIT_JOB_DATA"){
        const job = state.jobs.find(job=> job._id === action.id)
        const {_id, position, company, location, jobType, status } = job;
        return {
            ...state,
            isEditing : true,
            editJobId : _id,
            position, 
            company, 
            location,
            jobType, 
            status
        }
    }
}

export default jobsReducer