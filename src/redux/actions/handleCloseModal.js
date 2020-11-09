import actionTypes from "./actionTypes";

const handleCloseModal = () => {
    return (dispatch) => {
        return dispatch({type: actionTypes.CLOSE_MODAL});
    }
};

export {handleCloseModal};