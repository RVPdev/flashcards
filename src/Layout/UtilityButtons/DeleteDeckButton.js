import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { deleteDeck } from "../../utils/api";

function DeleteDeckButton({ id }) {
  // Access the history object from React Router
  const history = useHistory();

  // Function to handle the deletion of a deck
  function handleDelete(id) {
    // Confirm with the user before proceeding to delete the deck
    if(window.confirm("Delete this deck?")) {
      // Call the deleteDeck function from the API utilities
      deleteDeck(id);
    }

    // Redirect the user to the root page
    history.push("/");
  }

  return (
    <button
      className="btn btn-danger"
      onClick={() => {
        handleDelete(id);
      }}
    >
      Delete
    </button>
  );
}

export default DeleteDeckButton;
