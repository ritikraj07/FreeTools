import { ADD_CONTENT, POST_DATA_FAILURE, POST_DATA_REQUEST, POST_DATA_SUCCESS } from "./Constant";

let oldState = {
    content: "",
    password: null,
    isError: false,
    isLoading: false,
    id: null,
    actualContent: ''
}

export default function Reducer(newState = oldState, action) {
    console.log("====>", action)
    switch (action.type) {
        case ADD_CONTENT:
            return { ...newState, content: action.payload.content, actualContent: action.payload.actualContent }
        case POST_DATA_SUCCESS:
            return {
                ...newState, content: action.payload.data.content, password: action.payload.data.password, isLoading: false, id: action.payload.data._id,
                actualContent: action.payload.data.actualContent
            }
        case POST_DATA_FAILURE:
            return {...newState, isError: true, isLoading: false}
        case POST_DATA_REQUEST:
            return {...newState, isLoading:true}
        default:
            return newState;
    }
    
}