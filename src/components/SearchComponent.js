import React from "react";

class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        movieNameInputText: "",
        movieGenreInputText: "",
      };
  
      this.handelInputChange = this.handelInputChange.bind(this);
    }
  
    handelInputChange(event) {
      this.setState({
        movieNameInputText:
          event.target.id === "movie_name"
            ? event.target.value
            : this.state.movieNameInputText,
        movieGenreInputText:
          event.target.id === "movie_genre"
            ? event.target.value
            : this.state.movieGenreInputText,
      });
    }
  
    handleSubmit(event) {
      event.preventDefault();
      alert(
        `you added: \n MOVIE: ${this.state.movieNameInputText} \n GENRE: ${this.state.movieGenreInputText}`
      );
    }
  
    render() {
      return (
        <div>
          <h3>Form example</h3>
          <form onSubmit={(event) => this.handleSubmit(event)}>
            <label>Movie Name</label>
            <input
              type="text"
              placeholder="Movie Name...."
              id="movie_name"
              value={this.state.movieNameInputText}
              onChange={(event) => this.handelInputChange(event)}
            />
            <br />
            <label>Movie Genre</label>
            <input
              type="text"
              placeholder="Movie Genre...."
              id="movie_genre"
              value={this.state.movieGenreInputText}
              onChange={(event) => this.handelInputChange(event)}
            />
            <br />
            <input type="submit" value="Click Here" />
          </form>
        </div>
      );
    }
  }

    export default Form