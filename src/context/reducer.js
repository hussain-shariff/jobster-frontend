
export const initialState = {
    jobs : [],
    showLogoutButton : false,
    showSideBar : false,
    currentPage : 'Stats'
}

function jobsReducer(state, action) {
    if(action.type === "GET_ALL_JOBS"){
        return {
            ...state,
            jobs : action.jobs
        }
    }
    if(action.type === "TOGGLE_SIDEBAR"){
        return {
            ...state,
            showSideBar : !showSideBar
        }
    }
}

export default jobsReducer