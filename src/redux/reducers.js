import { SET_FIRST_NAME, SET_LAST_NAME, SET_AGE, SET_PHOTO, GET_CONTACTS } from "./actions";

const initialState = {
    firstName: '',
    lastName: '',
    age: 0,
    photo: '',
    contacts: []
}

function userReducer(state = initialState, action) {
    switch (action.type) {
        case SET_FIRST_NAME:
            return { ...state, firstName: action.payload };
        case SET_LAST_NAME:
            return { ...state, lastName: action.payload };
        case SET_AGE:
            return { ...state, age: action.payload };
        case SET_PHOTO:
            return { ...state, photo: action.payload };
        case GET_CONTACTS:
            return { ...state, contacts: action.payload };
        default:
            return state;
    }
}

export default userReducer;