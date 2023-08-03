import React, { useEffect, useState } from "react";
import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import { createCard, readDeck } from "../../utils/api";

import CardBreadcrumbs from "../BreadCrumbs/CardBreadcrums"; // Import breadcrumbs component for navigation
import CardForm from "./CardForm";

function AddCards() {
  const { id } = useParams(); // Extract the deck id from the URL parameters
  const history = useHistory(); // Hook to navigate programmatically
  const [deck, setDeck] = useState([]); // State to hold the deck details

  // useEffect hook to load the deck details from the API when the component mounts
  useEffect(() => {
    readDeck(id)
      .then((response) => setDeck(response))
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("aborted", id);
        } else {
          throw err;
        }
      });
  }, []);

  //Initial Form State
  const initialForm = {
    front: "",
    back: "",
  };

  const [form, setForm] = useState(initialForm); // State to hold the form details

  // Function to handle changes in input fields
  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  // Function to handle the form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    //add create card
    createCard(id, form); // Create a new card
    setForm(initialForm); // Reset the form
  };

  // Function to handle the Done button click
  const handleClick = () => {
    history.push("/"); // Redirect to the homepage
  };

  return (
    <div className="mb-3">
      <CardBreadcrumbs deck={deck} />{" "}
      {/* Breadcrumbs component with deck details */}
      <h3>{deck.name}: Add Card</h3>
      <CardForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        handleClick={handleClick}
        form={form}
      />
    </div>
  );
}

export default AddCards;
