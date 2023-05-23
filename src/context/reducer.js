export const initialState = {
    user : '',
    updatedUser : '',
    lastname : '',
    userLocation : "",
    showSideBar : false,
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
}

export default jobsReducer