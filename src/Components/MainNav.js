import React, { Component } from 'react';
import {
    BrowserRouter
} from 'react-router-dom';
import { NavLink } from 'react-router-dom';

class MainNav extends Component {

    handleClick(title, e) {
        e.preventDefault();
        this.props.onSearch(title);
    }

    render() {
        return (
            <BrowserRouter>
                <nav className="main-nav">

                    <ul>
                        {this.props.data.map((title, index) =>
                            <li onClick={(e) => this.handleClick(title, e)} key={index}>
                                <NavLink to={title + 's'} >{title + 's' /*s to pluralize*/}</NavLink>
                            </li>
                        )}
                    </ul>
                </nav>
            </BrowserRouter>
        )
    }
}

export default MainNav;