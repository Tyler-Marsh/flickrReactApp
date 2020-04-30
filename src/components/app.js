import React from 'react';
import {api_key, api_secret} from "../config.js"
import {BrowserRouter, Route} from "react-router-dom"


/* IMPORT COMPONENTS */
import RouterContainer from './RouterContainer'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      pics: {
        defaults: {mountains: [],  plains: [], islands: [] },
        search: [],
        api_key,
        api_secret,
      },
      default: true,
      render: "mountains",
     
    }
  
}
// static getDerivedStateFromProps(props, state) {
//  return {favoritecolor: props.favcol };
// }
    // make the calls to fetch the data with defaults as tag query strings?
    componentDidMount() {
      if(this.state.default) {
      //const landscapes = {mountains: [], plains: [], islands: []};
    for (const property in this.state.pics.defaults)
      fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${this.state.pics.api_key}&tags=${property}&per_page=24&format=json&nojsoncallback=1`)
        .then(response => response.json())
        .then(responseData => {
          let photos = {...this.state.pics};
          photos.defaults[property] = responseData.photos.photo
          this.setState({ pics: photos});
         });
  } 
    this.setState({ default: false})
    }

  render() {
    return (
      <BrowserRouter >
        <Route exact path="/" render={props => <RouterContainer {...props} pics={this.state.pics.defaults.mountains} />} />
        <Route exact path="/islands" render={props => <RouterContainer  {...props} pics={this.state.pics.defaults.islands} />} />
        <Route exact path="/plains" render={props => <RouterContainer {...props} pics={this.state.pics.defaults.plains} />} />
      </BrowserRouter>
    )
  }
}

export default App