import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import { readDeck, updateDeck } from "../../utils/api";

import EditBreadcrumbs from "../BreadCrumbs/EditBreadcrumb"; // Import breadcrumbs component for navigation

function EditDeck() {
  const { id } = useParams(); // Extract the deck id from the URL parameters
  const [deck, setDeck] = useState({
    name: "",
    description: "",
  }); // State to hold the deck details
  const history = useHistory(); // Hook to navigate programmatically

  // useEffect hook to load the deck details from the API when the component mounts
  useEffect(() => {
    readDeck(id)
      .then(setDeck)
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("aborted", id);
        } else {
          throw err;
        }
      });
  }, []);

  // Function to handle changes in input fields
  const handleChange = (event) => {
    setDeck({
      ...deck,
      [event.target.name]: event.target.value,
    });
  };

  // Function to handle the form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    updateDeck(deck); // Update the deck details
    history.push("/"); // Redirect to the homepage
  };

  // Function to handle the cancel button click
  const handleClick = () => {
    history.push("/"); // Redirect to the homepage
  };

  return (
    <div className="mb-3">
      <EditBreadcrumbs deck={deck} />{" "}
      {/* Breadcrumbs component with deck details */}
      <h2>Edit Deck</h2> {/* Heading */}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            className="form-control"
            value={deck.name} // Deck name
            onChange={handleChange} // Handle changes
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            className="form-control"
            value={deck.description} // Deck description
            onChange={handleChange} // Handle changes
          />
        </div>
        <button className="btn btn-secondary" onClick={handleClick}>
          Cancel
        </button>{" "}
        {/* Cancel button */}
        <button type="submit" className="btn btn-primary ml-3">
          Submit
        </button>{" "}
        {/* Submit button */}
      </form>
    </div>
  );
}

export default EditDeck;
