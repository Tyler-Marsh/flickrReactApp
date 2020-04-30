import React from 'react'
import Photo from './photo'
const PhotoContainer = (props) => {
  // let theId = null;
  //if (props.pics.length > 0) {
  //  theId = "standardizePhoto";
  //}
  if (props['pics']) {
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
  ); }
  else {
    return(

    
    <div className = "photo-container">
      <h2 className="results">Results</h2>
      <ul> 
          <Photo
            src={"#"}
            alt={""}
          />
        <li>Load....</li>
      </ul>
    </div>
    );
  }
}

export default PhotoContainer