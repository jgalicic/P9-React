import React, { Component } from 'react';
import magnify from '../magnify.svg';

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onSearch(this.state.value);
    }

    render() {
        return (
            <form className="search-form" onSubmit={this.handleSubmit}>
                <input type="search" name="search" placeholder="Search" value={this.state.value} onChange={this.handleChange} required />
                <button type="submit" className="search-button">
                    <img src={magnify} className="App-magnify" alt="magnify" />
                </button>
            </form>
        )
    }
}

export default Form;



