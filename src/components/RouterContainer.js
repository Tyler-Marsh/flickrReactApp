import React from 'react'
import SearchForm from './searchform'
import Nav from './nav'
import PhotoContainer from './photocontainer'
 
const RouterContainer = (props) => {
  // length does === 0 for a while
  //props.pics.length > 0 this should show that it DOES have some pics.
      const pics = props.location && props.location.state && props.location.state.pics ? props.location.state.pics : props.pics;
      // console.log('pics: ', pics);
      return (
        <div className="container">
          <SearchForm handleCallback={props.handleCallback}/>
          <Nav defaultText={props.defaultText}/>
          { pics.length > 0 && <PhotoContainer pics={pics} />}
        </div>
      );
      
    }

    export default RouterContainer
