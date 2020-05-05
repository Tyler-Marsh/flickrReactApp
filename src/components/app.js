import React from 'react';
import { api_key } from "../config.js"
import { BrowserRouter, Route } from "react-router-dom"
import History from './history'
import '../css/index.css'

/* IMPORT COMPONENTS */
import RouterContainer from './RouterContainer'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            picsToDisplayValue:"",
            picsToDisplay: [],
            pics: {
                mountains: [],
                plains: [],
                islands: []
            },
            api_key,
            default: true,
            render: "mountains",
            searchQuery: ""
        }

        this.handleCallback = this.handleCallback.bind(this);

    }

    handleCallback(v) {
        console.log("handleCallback", v)
        this.setState({searchQuery: v})
        // put this after set state History.push(`/search/${v}`)
        this.fetchPictures(v)
    }
   
    componentDidMount() {
        if (this.state.default) {
            for (const property in this.state.pics) {
                this.fetchPictures(property)
            }
        }
        this.setState({ default: false })
    }

    fetchPictures(val) {
        fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${this.state.api_key}&tags=${val}&per_page=24&format=json&nojsoncallback=1`)
            .then(response => response.json())
            .then(responseData => {
                let photos = { ...this.state.pics };
                if (photos[val]) {
                    photos[val] = responseData.photos.photo
                    this.setState({ pics: photos });
                } else {
                    this.setState({ picsToDisplayValue: val, picsToDisplay: responseData.photos.photo }, () => {
                        History.push({
                            pathname: `/search/${val}`,
                            state: {
                                pics: responseData.photos.photo
                            }
                        });
                        window.location.reload();
                    });
                }
            });
    }

    render() {
        console.log('picsToDisplay: ', this.state.picsToDisplay);
        const searchPath = `/search/${this.state.searchQuery}`;
        return (
            <BrowserRouter >
        <Route path={searchPath} render={props => <RouterContainer {...props} defaultText={this.picsToDisplayValue} handleCallback={ this.handleCallback } pics={this.state.picsToDisplay} />} />
        <Route exact path="/" render={props => <RouterContainer {...props} handleCallback={ this.handleCallback } pics={this.state.pics.mountains} />} />
        <Route exact path="/islands" render={props => <RouterContainer  {...props} handleCallback={ this.handleCallback } pics={this.state.pics.islands} />} />
        <Route exact path="/plains" render={props => <RouterContainer {...props} handleCallback={ this.handleCallback } pics={this.state.pics.plains} />} />
      </BrowserRouter>
        )
    }
}

export default App