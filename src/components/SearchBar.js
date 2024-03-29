import React from 'react';


class SearchBar extends React.Component{
   state = { term: ''};
   

    //or bind this.onformsubmit = this.onformsubmit.bind(this)
    onFormSubmit = (event) => {
        event.preventDefault();    // Prevents submitting the form "default"
        this.props.onSubmit(this.state.term);
    };
 
    render(){
        return (
            <div className = "ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className = "field">
                    <input 
                        type= "text" 
                        value = {this.state.term}
                        onChange={(e) => this.setState({term: e.target.value})}
                    /> 
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;