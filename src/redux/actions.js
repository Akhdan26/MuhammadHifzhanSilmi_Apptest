export const SET_FIRST_NAME = 'SET_FIRST_NAME';
export const SET_LAST_NAME = 'SET_LAST_NAME';
export const SET_AGE = 'SET_AGE';
export const SET_PHOTO = 'SET_PHOTO';
export const GET_CONTACTS = 'GET_CONTACTS';

const API_URL = 'https://simple-contact-crud.herokuapp.com/contact';

export const getContacts = () => {
    try {
        return async dispatch => {
            const result = await fetch(API_URL, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            const json = await result.json();
            if (json) {
                dispatch({
                    type: GET_CONTACTS,
                    payload: json,
                })
            } else {
                console.log('Unable to fetch!');
            }
        }
    } catch (error) {
        console.log(error);
    }
}

export const setFirstName = firstName => dispatch => {
    dispatch({
        type: SET_FIRST_NAME,
        payload: firstName,
    })
}
export const setLastName = lastName => dispatch => {
    dispatch({
        type: SET_LAST_NAME,
        payload: lastName,
    })
}
export const setAge = age => dispatch => {
    dispatch({
        type: SET_AGE,
        payload: age,
    })
}
export const setPhoto = photo => dispatch => {
    dispatch({
        type: SET_PHOTO,
        payload: photo,
    })
}