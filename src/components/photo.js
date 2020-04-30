import React from 'react'
// photo class
// https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg
// src={`https://farm${props.farm}.staticflickr.com/${props.server}/${props.id}_${props.secret}.jpg`}
const Photo = (props) => {
  return (
    <li>
     <img src={`https://farm${props.farm}.staticflickr.com/${props.server}/${props.id}_${props.secret}.jpg`} alt={`${props.title}`} id={props.size} />
    </li>
  );
}

export default Photo