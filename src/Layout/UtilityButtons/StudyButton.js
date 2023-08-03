import React from "react";
import { useHistory } from "react-router-dom";

function StudyButton({ id }) {
  // Access the history object from React Router
  const history = useHistory();

  // Function to handle the navigation to the study page of a specific deck
  function handleStudy(deckID) {
    // Redirect the user to the study page for the specified deckID
    history.push(`/decks/${deckID}/study`);
  }

  return (
    <button
      className="btn btn-primary ml-3" // Apply styling to the button
      onClick={() => {
        handleStudy(id); // Call the handleStudy function with the provided deck ID on click
      }}
    >
      Study
    </button>
  );
}

export default StudyButton;
