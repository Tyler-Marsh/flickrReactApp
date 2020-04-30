import React from 'react'
import SearchForm from './searchform'
import Nav from './nav'
import PhotoContainer from './photocontainer'

const RouterContainer = (props) => {
  // length does === 0 for a while
  //props.pics.length > 0 this should show that it DOES have some pics.
  
    if (props.pics.length > 0) {
      return (
        <div className="container">
          <SearchForm />
          <Nav />
          <PhotoContainer pics={props.pics} />
        </div>
      );
      }
      else {
        return (
          <div className="container">
            <SearchForm />
            <Nav />
            <PhotoContainer />
          </div>
        );
      }
    }

    export default RouterContainer
