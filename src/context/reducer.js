
export const initialState = {
    user : '',
    jobs : [],
    showLogoutButton : false,
    showSideBar : false,
    currentPage : 'Stats'
}

function jobsReducer(state, action) {
    if(action.type === "SET_USER"){
        return {
            ...state,
            user : action.user
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
}

export default jobsReducer