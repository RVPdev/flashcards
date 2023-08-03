import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { readDeck } from "../../utils/api";

import StudyButton from "../UtilityButtons/StudyButton"; // Import StudyButton component
import AddCardsButton from "../UtilityButtons/AddCardsButton"; // Import AddCardsButton component
import DeleteDeckButton from "../UtilityButtons/DeleteDeckButton"; // Import DeleteDeckButton component
import CardsView from "../CardsComponents/CardsView"; // Import CardsView component
import DeckBreadcrumbs from "../BreadCrumbs/DeckBreadcrumbs"; // Import DeckBreadcrumbs component

function DeckView() {
  const { id } = useParams(); // Extract the deck id from the URL parameters
  const [deck, setDeck] = useState([]); // State to hold the deck details

  const history = useHistory(); // Hook to navigate programmatically

  let cards = undefined;

  // useEffect hook to load the deck details from the API when the component mounts
  useEffect(() => {
    readDeck(id)
      .then((response) => setDeck(response)) // Set the deck details to the state
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("aborted", id);
        } else {
          throw err;
        }
      });
  }, []);

  if (deck !== []) { //make sure deck is not empty
    cards = deck.cards; // Extract cards from the deck
  }

  // Function to handle navigation to edit deck view
  function handeClick(id) {
    history.push(`/decks/${id}/edit`);
  }

  return (
    <div>
      <DeckBreadcrumbs deck={deck} /> {/* Breadcrumbs component with deck details */}
      <h3>{deck.name}</h3> {/* Display the deck name */}
      <p>{deck.description}</p> {/* Display the deck description */}
      <div className="container">
        <div className="row justify-content-between">
          <div>
            <button
              className="btn btn-secondary"
              onClick={() => {
                handeClick(id); // Navigate to edit deck view
              }}
            >
              Edit
            </button>
            <StudyButton id={id} /> {/* Study button component */}
            <AddCardsButton id={id} /> {/* Add cards button component */}
          </div>
          <div>
            <DeleteDeckButton id={id} /> {/* Delete deck button component */}
          </div>
        </div>
      </div>
      <h2 className="mt-4">Cards</h2> {/* Cards section header */}
      <CardsView cards={cards} /> {/* CardsView component to display the cards */}
    </div>
  );
}

export default DeckView;
