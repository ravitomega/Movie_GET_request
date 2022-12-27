import React from 'react';
import axios from 'axios';
import Header from './Components/Header';
import Body from './Components/Body';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            movies: [],
            search: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }


    componentDidMount() {
        axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=4f49aa8`)
            .then(res => {
                const movies = res.data;
                this.setState({movies});
                console.log(this.state.movies)
            })
    }

    handleSubmit(event) {
        event.preventDefault();
        alert('Sorry, there was only one record in the response. Hence search could not apply');

    }

    render() {
        return (
            <div>
                <Header
                    movies={this.state.movies}
                />
                <form className="d-flex" style={{padding: 20}}>
                    <input className="form-control me-2" type="search" placeholder="Search"
                           aria-label="Search"/>
                    <button onClick={this.handleSubmit} className="btn btn-outline-success"
                            type="submit">Search
                    </button>
                </form>
                <Body
                    src={this.state.movies.Poster}
                    title={this.state.movies.Title}
                    production={this.state.movies.Production}
                    plot={this.state.movies.Plot}
                    rated={this.state.movies.Rated}
                    release={this.state.movies.Released}
                />

            </div>
        );
    }
}

export default App;
