const postReducer = (state={
    myposts:[]
},action) => {
    switch (action.type) {
        case 'ADD' :
            state={
                ...state,

            }
            break;
        case 'SUBSTRACT' :
            state={
                ...state
            }
            break;
    } 
    return state;
};
export default postReducer;