import React from "react";

function SearchBar(props) {
    return(
        <form>
        <div className="form-group">
          <label htmlFor="search"></label>
          <input
            onChange={props.handleInputChange}
            name="search"
            type="text"
            className="form-control"
            placeholder="Search for Employees"
            id="search"
          />
          <button onClick={props.submit} className="btn btn-primary mt-3">
            Search
          </button>
        </div>
      </form>
    );
    
}

export default SearchBar;