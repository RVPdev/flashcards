import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { createDeck } from "../../utils/api"; // Import the API function to create a deck

import Breadcrumbs from "../BreadCrumbs/Breadcrumbs";

function CreateDeck() {
  const history = useHistory(); // React Router's hook to manipulate browser history

  // Define initial state for the form fields
  const initialForm = {
    name: "",
    description: "",
  };

  // Declare state variable for form data
  const [form, setForm] = useState(initialForm);

  // Handle changes in form fields
  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    createDeck(form); // Call the API function to create a new deck
    history.push("/"); // Redirect to the home page
  };

  // Handle cancel button click
  const handleClick = () => {
    history.push("/"); // Redirect to the home page
  };

  return (
    <div className="mb-3">
      <Breadcrumbs /> {/* Breadcrumbs component for navigation */}
      <h2>Create Deck</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Deck Name"
            className="form-control"
            value={form.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            placeholder="Brief Description of the deck"
            className="form-control"
            value={form.description}
            onChange={handleChange}
          />
        </div>
        <div className="">
          <button
            type="submit"
            className="btn btn-secondary"
            onClick={handleClick}
          >
            Cancel
          </button>
          <button type="submit" className="btn btn-primary ml-3">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateDeck;
