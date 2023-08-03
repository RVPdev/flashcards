import React, { useEffect, useState } from "react";
import { deleteDeck, listDecks } from "../../utils/api"; // Import API functions
import { useHistory } from "react-router-dom";

import StudyButton from "../UtilityButtons/StudyButton"; // Import StudyButton component

function DeckList() {
  const [decks, setDecks] = useState([]); // State to hold the decks
  const history = useHistory(); // React Router's hook to manipulate browser history

  // Function to load decks from the API
  function loadDeck() {
    listDecks()
      .then(setDecks)
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("aborted");
        } else {
          throw err;
        }
      });
  }

  useEffect(loadDeck, []); // Load decks when the component mounts

  // Function to handle the delete action
  function handleDelete(event, deckID) {
    event.preventDefault();

    if (window.confirm("Delete this deck?")) {
      const filteredDeck = decks.filter((deck) => {
        return deck.id !== deckID;
      });
      setDecks(filteredDeck); // Update state with the filtered deck list
      deleteDeck(deckID); // Delete the deck using the API function
    }
  }

  // Function to handle the view action
  function handleView(event, deckID) {
    event.preventDefault();
    history.push(`decks/${deckID}`); // Redirect to the selected deck view
  }

  return (
    <div>
      {decks.map((deck) => (
        <div className="card mt-2" key={deck.id}>
          <div className="card-body">
            <div className="container">
              <div className="row justify-content-between">
                <h5 className="card-title">{deck.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted mt-1">{`${deck.cards.length} cards`}</h6>
              </div>
            </div>
            <p>{deck.description}</p>
            <div className="container">
              <div className="row justify-content-between">
                <div>
                  <button
                    type=""
                    className="btn btn-secondary"
                    onClick={(event) => {
                      handleView(event, deck.id);
                    }}
                  >
                    View
                  </button>
                  <StudyButton id={deck.id} /> {/* StudyButton component with deck id */}
                </div>
                <div>
                  <button
                    type=""
                    className="btn btn-danger"
                    onClick={(event) => {
                      handleDelete(event, deck.id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DeckList;
