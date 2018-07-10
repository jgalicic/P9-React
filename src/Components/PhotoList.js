import React from 'react';
import Photo from './Photo';

const PhotoList = props => {

    const results = props.data;

    let photos = results.map(photo => 
        <Photo url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} key={photo.id} />
    );

    return (
        <ul className="photo-list">
            {photos}
        </ul>
    );
}

export default PhotoList;



