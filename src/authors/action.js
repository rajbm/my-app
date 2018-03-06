import axios from 'axios'
const SERVER_ADDR = 'https://evening-eyrie-20074.herokuapp.com/'

export function getAuthors() {
    return(dispatch)=>{
        dispatch({
            type: "SET_LOADER",
            payload: true
        })
        axios.get(SERVER_ADDR+'authors')
        .then(function (response) {
            console.log(response)
            dispatch({
                type: "GET_AUTHORS",
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
export function searchAthors(searchval) {
    return(dispatch)=>{
        dispatch({
            type: "SET_LOADER",
            payload: true
        })
        axios.get(SERVER_ADDR+'authors/search/'+searchval)
        .then(function (response) {
            console.log(response.data)
            dispatch({
                type: "SEARCH_AUTHORS",
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
export function createAuthor(authordata, history) {

    return(dispatch)=>{
        dispatch({
            type: "SET_LOADER",
            payload: true
        })
        console.log(authordata)     
        var headers = {
            'Content-Type': 'application/json',
        }
        var formData = new FormData();
        formData.set('name',authordata.name)
        formData.set('email',authordata.email)
        formData.set('phone_number',authordata.phone_number)
        formData.set('country',authordata.country)

        axios({
            method: 'post',
            url: SERVER_ADDR+'authors',
            data: formData,
            config: { headers: {'content-type': 'application/json' }}
        })
        .then(function (response) {
            console.log(response)
            history.replace('/');
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
export function addBook(book, history) {

    return(dispatch)=>{
        dispatch({
            type: "SET_LOADER",
            payload: true
        })
        console.log(book)
        var bookformData = new FormData();
        bookformData.set('name',book.name)
        bookformData.set('description',book.description)
        bookformData.set('author_id',book.author_id)
        
        axios({
            method: 'post',
            url: SERVER_ADDR+'books',
            data: bookformData,
            config: { headers: {'content-type': 'application/json' }}
        })
        .then(function (response) {
            console.log(response.data)
            history.replace('/')
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
export function deleteAuthor(author_id, history) {

    return(dispatch)=>{
        let isDelete = window.confirm("Do you want to delete this author?.");
        console.log(isDelete)
        if(isDelete){
            dispatch({
                type: "SET_LOADER",
                payload: true
            })
            axios({
                method: 'delete',
                url: SERVER_ADDR+'authors/'+author_id,
                config: { headers: {'content-type': 'application/json' }}
            })
            .then(function (response) {
                console.log(response.data)
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

export function getAuthorBooks(id) {
    return(dispatch)=>{
        dispatch({
            type: "SET_LOADER",
            payload: true
        })
        axios.get(SERVER_ADDR+'author/'+id+'/books')
        .then(function (response) {
            console.log(response)
            dispatch({
                type: "GET_AUTHOR_BOOKS",
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