import React from 'react';
import ReactDOM from 'react';
import "./index.css"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      pics: [
        {id: 1, src: "https://farm5.staticflickr.com/4334/37032996241_4c16a9b530.jpg", alt: ""},
        {id: 2, src:"https://farm5.staticflickr.com/4342/36338751244_316b6ee54b.jpg", alt: "" },
        {id: 3, src: "https://farm5.staticflickr.com/4343/37175099045_0d3a249629.jpg", alt: ""},
      {id: 4, src: "https://farm5.staticflickr.com/4425/36337012384_ba3365621e.jpg", alt: ""}
      ]
    }
  }
  render() {
    return (
      <div className="container">
        <SearchForm />
        <Nav />
        <PhotoContainer pics={this.state.pics} />
      </div>
    );
  }
}

// form class

class SearchForm extends React.Component {
  constructor() {
    super()
    this.state = {
      value: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    alert(`this was submitted ${this.state.value}`)
  }
  render() {

    return (
      <div>
        <form className="search-form" onSubmit={this.handleSubmit}>
          <input type="search" name="search" placeholder="search" required onChange={this.handleChange} />
          <button type="submit" className="search-button">
            <svg fill="#fff" height="24" viewBox="0 0 23 23" width="24" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                <path d="M0 0h24v24H0z" fill="none"/>
            </svg>
          </button>
        </form>
      </div>
    );
  }
}

//export default App;

// make a nav stateless functional component

/*   NAV COMPONENT */
const Nav = () => {
  return (
    <div>
        <nav className="main-nav">
          <ul>
            <li>
            <span> <button className="search-button">Cats</button></span>
            </li>
            <li>
            <span><button>Dogs</button></span>
            </li>
            <li>
            <span> <button>Computers</button></span>
            </li>
          </ul>
        </nav>
    </div>
  );
}

/* PHOTO CONTAINER COMPONENT     */
// iterates over the array it receives

const PhotoContainer = (props) => {
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
        <li className="not-found">
            <h3>No Results Found</h3>
            <p>You search did not return any results. Please try again.</p>
          </li>
      </ul>
    </div>
  );
}

/* PHOTO COMPONENT */

const Photo = (props) => {
  return (
    <li>
      <img src={props.src} alt={props.src} />
    </li>
  );
}

ReactDOM.render(
  <App  />, document.getElementById('root')
);