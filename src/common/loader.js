import React, { Component } from 'react';
import { connect } from 'react-redux';

class Loader extends Component {
    loader() {
        if(this.props.isLoading){
            return(
                <div id="loader">
                    <div className="spinner">
                        {/* <div className="item item-1"></div>
                        <div className="item item-2"></div>
                        <div className="item item-3"></div>
                        <div className="item item-4"></div> */}
                    </div>
                </div>
            )
            }
            else{
                return null;
            }
        }

    render() {
   
        return (
            <div>{this.loader()}</div>
        )
      }
      
}
function mapStateToProps(state) {
    // console.log(state);
    return {
      isLoading: state.books.isLoading
    }
  }
  
  export default connect(mapStateToProps, null)(Loader);
  