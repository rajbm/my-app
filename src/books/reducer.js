const initialState = {
    books:[],
    authors: [],
    author:[],
    isLoading: false,
    user_select: true
}

const bookReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'SET_LOADER':
        // console.log("yes")
            state = {
                ...state,
                isLoading: action.payload
            };
            break;
        case 'UN_SET_LOADER':
        // console.log("NO")
        
            state = {
                ...state,
                isLoading: action.payload
            };
        break;
        case 'GET_BOOKS' :
            console.log(action.payload)
            state = {
                ...state,
                books: action.payload.books,
                authors: action.payload.authors
            };
            break;
        case 'SEARCH_BOOKS' :
            console.log(action.payload)
            state = {
                ...state,
                books: action.payload,
            };
            break;
        case 'SEARCH_BOOKS_AUTHORS' :
            console.log(action.payload)
            state = {
                ...state,
                authors: action.payload,
            };
            break;
        case 'SEARCH_AUTHOR_BOOKS' :
            console.log(action.payload)
            state = {
                ...state,
                books: action.payload,
            };
            break;
        case 'SHOW_BOOK' :
            // console.log(action.payload)
            state = {
                ...state,
                author: action.payload
            };
            break;
        default:
            state
    }
    return state;
};
export default bookReducer; 