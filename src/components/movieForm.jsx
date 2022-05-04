import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";

class MovieForm extends Form {
  state = {
    data: { title: "", genre: "Action", numberInStock: "", rate: "" },
    errors: {},
  };

  schema = {
    title: Joi.string().min(5).required().label("Title"),
    genre: Joi.string().min(5).required().label("Genre"),
    numberInStock: Joi.number().required().label("Number In Stock"),
    rate: Joi.number().required().min(1).max(10).label("Rate"),
  };

  doSubmit = () => {
    // call the server
    console.log("call the server");
    this.props.history.push("/movies");
  };
  render() {
    return (
      <div>
        <h1>New Movie</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          <div className="form-group">
            <label htmlFor="genre">Genre</label>
            <select className="form-control" id="genre">
              <option selected>Action</option>
              <option>Comedy</option>
              <option>A</option>
            </select>
          </div>
          {this.renderInput("numberInStock", "Number In Stock", "number")}
          {this.renderInput("rate", "Rate", "number")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default MovieForm;
