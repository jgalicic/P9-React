import React, { Component } from 'react';
import {
  BrowserRouter
} from 'react-router-dom';
import './App.css';
import axios from 'axios';

// App components
import Form from './Components/Form';
import MainNav from './Components/MainNav';
import PhotoContainer from './Components/PhotoContainer';

const apiKey = require('./config');
const key = apiKey.default.key;

class App extends Component {

  constructor() {
    super();
    this.state = {
      photos: [],
      loading: true,
      keywords: ['Cat', 'Dog', 'Computer'],
      currentSearch: '',
      noResultsFound: false
    };
  }

  performSearch = (query) => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&tags=${query}&per_page=12&format=json&nojsoncallback=1`)
      .then(res => {
        if (res.data.photos.photo.length === 0) {
          this.setState({
            noResultsFound: true
          })
        } else {
          this.setState({
            noResultsFound: false
          })
        }
        this.setState({
          photos: res.data.photos.photo,
          currentSearch: query
        });
      })
      .catch(err => {
        console.log('Error: ', err)
      });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Form onSearch={this.performSearch}/>
          <MainNav data={this.state.keywords} onSearch={this.performSearch}/>
          <PhotoContainer data={this.state}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;