import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class AuthorBooksCard extends Component {

    render() {
        console.log(this.props.authorBooks)
        const cards = this.props.authorBooks && this.props.authorBooks.map((book, i)=>{
            return(
                <div className="card" key={i}>
                  <img className="card-img-top" 
                    src="http://guardianlv.com/wp-content/uploads/2014/08/xHow-Self-Publishers-Market-Their-Books-650x432.jpg.pagespeed.ic.Zzg9zRNut8.webp" 
                    alt="Card image" 
                  />
                  <div className="card-body">
                    <h4 className="card-title">{book.name}</h4>
                    <p className="card-text">{book.description.substring(0,65)+'...'}</p>
                    <NavLink to={"/books/"+book.id} className="btn btn-primary">
                        <span className="glyphicon glyphicon-eye-open"></span> See more
                    </NavLink>
                  </div>
                </div>
            )
        })
        return (
            
           <div class="inline-cords">{cards}</div>
        )
    } 
}

export default AuthorBooksCard;