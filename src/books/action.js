import axios from 'axios'
const SERVER_ADDR = 'https://evening-eyrie-20074.herokuapp.com/'

export function getBooks() {
    return(dispatch)=>{
        dispatch({
            type: "SET_LOADER",
            payload: true
        })
        axios.get(SERVER_ADDR)
        .then(function (response) {
            // console.log(response)
            dispatch({
                type: "GET_BOOKS",
                payload: response.data
            })
            dispatch({
                type: "UN_SET_LOADER",
                payload: false
            })
        })
        .catch(function (error) {
            console.log(error);
            dispatch({
                type: "UN_SET_LOADER",
                payload: false
            })
        })
        
    }
}
export function searchBooks(searchval) {
    return(dispatch)=>{
        dispatch({
            type: "SET_LOADER",
            payload: true
        })
        axios.get(SERVER_ADDR+'books/search/'+searchval)
        .then(function (response) {
            dispatch({
                type: "SEARCH_BOOKS",
                payload: response.data
            })
            dispatch({
                type: "UN_SET_LOADER",
                payload: false
            })
        })
        .catch(function (error) {
            console.log(error);
            dispatch({
                type: "UN_SET_LOADER",
                payload: false
            })
        })
        
    }
}
export function searchBooksAuthors(searchval) {
    return(dispatch)=>{
       
        axios.get(SERVER_ADDR+'authors/search/'+searchval)
        .then(function (response) {
            console.log(response.data)
            dispatch({
                type: "SEARCH_BOOKS_AUTHORS",
                payload: response.data
            })
            // dispatch({
            //     type: "UN_SET_LOADER",
            //     payload: false
            // })
        })
        .catch(function (error) {
            console.log(error);
            dispatch({
                type: "UN_SET_LOADER",
                payload: false
            })
        })
    }
}
export function searchAuthorBooks(id) {
    return(dispatch)=>{
       
        axios.get(SERVER_ADDR+'author/'+id+'/books')
        .then(function (response) {
            console.log(response.data)
            dispatch({
                type: "SEARCH_AUTHOR_BOOKS",
                payload: response.data
            })
            // dispatch({
            //     type: "UN_SET_LOADER",
            //     payload: false
            // })
        })
        .catch(function (error) {
            console.log(error);
            dispatch({
                type: "UN_SET_LOADER",
                payload: false
            })
        })
    }
}
 export function showBook(id) {
    return(dispatch)=>{
        dispatch({
            type: "SET_LOADER",
            payload: true
        })
        axios.get(SERVER_ADDR+'books/'+id)
        .then(function (response) {
            // console.log(response.data)
            dispatch({
                type: "SHOW_BOOK",
                payload: response.data
            })
            dispatch({
                type: "UN_SET_LOADER",
                payload: false
            })
        })
        .catch(function (error) {
            console.log(error);
            dispatch({
                type: "UN_SET_LOADER",
                payload: false
            })
        })
        
    }
 }

 export function deleteBook(book_id, history) {

    return(dispatch)=>{
        
        let isDelete = window.confirm("Do you want to delete this author?.");

        if(isDelete){
            dispatch({
                type: "SET_LOADER",
                payload: true
            })
            axios({
                method: 'delete',
                url: SERVER_ADDR+'books/'+book_id,
                config: { headers: {'content-type': 'application/json' }}
            })
            .then(function (response) {
                console.log(response.data)
                history.replace('/authors')
                history.replace('/')                
            })
            .catch(function (error) {
                console.log(error);
                dispatch({
                    type: "UN_SET_LOADER",
                    payload: false
                })
            })
        }
    }
}