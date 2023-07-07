// import { useNavigate } from "react-router-dom";
let Add_Content = (data) => async (dispatch) => {
    dispatch(postDataRequest());
    // let navigate = useNavigate()
    try {
        const response = await fetch('http://localhost:8080/pastebin/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const responseData = await response.json();
        let {_id} = responseData
        dispatch(postDataSuccess(responseData));
        // navigate(`copy/${_id}`)
    } catch (error) {
        dispatch(postDataFailure(error.message));
    }
};

const postDataRequest = () => {
    return {
        type: 'POST_DATA_REQUEST'
    };
};

const postDataSuccess = (data) => {
    return {
        type: 'POST_DATA_SUCCESS',
        payload: data
    };
};

const postDataFailure = (error) => {
    return {
        type: 'POST_DATA_FAILURE',
        payload: error
    };
};

export { Add_Content };
