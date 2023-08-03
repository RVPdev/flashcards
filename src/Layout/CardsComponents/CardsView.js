import React from "react";
import { useHistory } from "react-router-dom";
import { deleteCard } from "../../utils/api"; // Importing deleteCard function from API utilities

function CardsView({ cards }) {
  const history = useHistory(); // Hook to navigate programmatically

  // Function to handle Edit button click
  function handleEdit(deckId, cardId) {
    history.push(`/decks/${deckId}/cards/${cardId}/edit`); // Redirect to the Edit Card page
  }

  // Function to handle Delete button click
  function handleDelete(cardId) {
    if (window.confirm("Delete this card?")) {
      deleteCard(cardId); // Delete the card from the deck
    }
  }

  return (
    <div>
      {cards &&
        cards.map((card) => (
          <div key={card.id} className="container border pb-2">
            <div className="container">
              <div className="row mt-2">
                <p className="col">{card.front}</p> {/* Display card front */}
                <p className="col">{card.back}</p>  {/* Display card back */}
              </div>
            </div>
            <div className="container">
              <div className="d-flex flex-row-reverse">
                <button
                  className="btn btn-danger ml-2"
                  onClick={() => {
                    handleDelete(card.id); // Handle Delete button click
                  }}
                >
                  Delete
                </button>
                <button
                  className="btn btn-secondary"
                  onClick={() => {
                    handleEdit(card.deckId, card.id); // Handle Edit button click
                  }}
                >
                  Edit
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default CardsView;
