const initialState = {
    authors: [],
    authorBooks: []
}

const authorReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'SET_LOADER':
            state = {
                ...state,
                isLoading: action.payload
            };
            break;
        case 'UN_SET_LOADER':
            state = {
                ...state,
                isLoading: action.payload
            };
        break;
        case 'GET_AUTHORS' :
            console.log(action.payload)
            state = {
                ...state,
                authors: action.payload
            };
            break;
        case 'SEARCH_AUTHORS' :
            console.log(action.payload)
            state = {
                ...state,
                authors: action.payload,
            };
            break;
        case 'GET_AUTHOR_BOOKS' :
            console.log(action.payload)
            state = {
                ...state,
                authorBooks: action.payload
            };
            break;
        default:
            state
    }
    return state;
};
export default authorReducer; 