

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class AutorList extends Component {

    searchAuthor(id){
        this.props.searchAuthorBooks(id)
    }
    render() {
        // console.log()
        const authors = this.props.authors && this.props.authors.map((author,i)=>{
            return(
                <p className="list-group-item list_link" key={i} onClick={()=>this.searchAuthor(author.id)} >{author.name}</p>
            )      
        })
        return (
            <div className="list-group">
                {authors}
            </div>
        )
      }
      
}
export default AutorList;