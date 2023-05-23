export const initialState = {
    user : '',
    updatedUser : '',
    lastname : '',
    userLocation : "",
    showSideBar : false,
    isEditing : false,
    editJobId : '',
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
    if(action.type === "TOGGLE_SIDEBAR"){
        return {
            ...state,
            showSideBar : !state.showSideBar
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