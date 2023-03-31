
export const initialState = {
    user : '',
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
    jobType : 'Full-time',
    status : 'pending',
}

function jobsReducer(state, action) {
    if(action.type === "SET_USER"){
        return {
            ...state,
            user : action.user
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
            jobType : 'Full-time',
            status : 'pending',
            isEditing : false 
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