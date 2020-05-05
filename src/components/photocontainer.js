import React from 'react'
import Photo from './photo'
const PhotoContainer = (props) => {
  // let theId = null;
  //if (props.pics.length > 0) {
  //  theId = "standardizePhoto";
  //}
  return (
    <div className = "photo-container">
      <h2 className="results">Results</h2>
      <ul>
        {props.pics.map(pic => 
          <Photo
            {...pic}
            key={pic.id}
          />
        )}  
      </ul>
    </div>
  ); 
}

export default PhotoContainer