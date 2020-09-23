import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { withRouter } from 'react-router-dom';

class SearchBar extends Component {
    handleFormSubmit = function({query}){
        console.log('tryng to handle submit', query);

        this.props.history.push('/results');
        
    }


    renderInput(field) {
        return (<input type='text' placeholder='Search Daily Smarty' {...field.input}></input> )
    }


    render() {
        const { handleSubmit } = this.props;

        return (
            <form
            className='search-bar'
            onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}
            >
                <Field name='query' component={this.renderInput}/>
            </form>
        );
    }
}

SearchBar = reduxForm({
    form:'searchBar'
})(SearchBar);

SearchBar = withRouter(SearchBar);

export default SearchBar;