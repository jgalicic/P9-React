import React, { Component } from 'react';
import PhotoList from './PhotoList';

class PhotoContainer extends Component {

    render() {
        return (
            <div className="photo-container">
                {this.props.data.noResultsFound &&
                    <div>
                        <h2>No Results Found</h2>
                        <p>That search did not return any results, please try again</p>
                    </div>}
                {this.props.data.photos.length > 0 && <h2>{this.props.data.currentSearch} Gifs</h2>}
                <PhotoList data={this.props.data.photos} />
            </div>
        )
    }
}

export default PhotoContainer;