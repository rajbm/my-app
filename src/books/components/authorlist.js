import React, { Component } from 'react';
import List from './list'
class AutorList extends Component {

    
    render() {
        // console.log()
        const authors = this.props.authors && this.props.authors.map((author,i)=>{
            return(
                <List key={i} author={author} addBook={this.props.addBook} searchAuthorBooks={this.props.searchAuthorBooks} />
                // <div className="authors_list_block" key={i}>
                //     <p className="list-group-item list_link"  onClick={()=>this.searchAuthor(author.id)} >
                //         {author.name}
                //     </p>
                //     <p className="add_book_icon"><span className="glyphicon glyphicon-plus-sign" ></span></p>
                // </div>
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