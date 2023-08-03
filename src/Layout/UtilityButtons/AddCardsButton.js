import React from "react";
import { useHistory } from "react-router-dom";

function AddCardsButton({ id }) {
  const history = useHistory(); // Access the history object from React Router

  // Function to handle navigation to the "Add Cards" page for a specific deck
  function handleStudy(deckID) {
    history.push(`/decks/${deckID}/cards/new`); // Navigate to the "Add Cards" page
  }

  return (
    <button
      className="btn btn-primary ml-3" // Apply styling to the button
      onClick={() => {
        handleStudy(id); // Call the handleStudy function on click
      }}
    >
      + Add Cards
    </button>
  );
}

export default AddCardsButton;
