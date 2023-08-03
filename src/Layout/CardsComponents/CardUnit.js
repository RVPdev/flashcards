import React, { useState } from "react";
import AddCardsButton from "../UtilityButtons/AddCardsButton";

function CardUnit({ deck }) {
  const cards = deck.cards; // Cards from the deck
  const [currentIndex, setCurrentIndex] = useState(0); // Index to keep track of the current card
  const [flipState, setFilpState] = useState(1); // State to manage the flip effect

  // Function to handle the Next button click
  const handleNext = (event) => {
    event.preventDefault();
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1); // Move to the next card
    } else {
      window.confirm("Restart Cards?") && setCurrentIndex(0); // Restart if at the end
    }
    setFilpState(1); // Reset flip state
  };

  // Function to handle the Flip button click
  const handleFlip = (event) => {
    event.preventDefault();
    setFilpState(flipState + 1); // Toggle flip state (odd/even)
  };

  let card = undefined;

  // if the cards exists
  if (cards) { 
    card = cards[currentIndex]; // Current card being displayed
  }

  // Conditionally render content based on the number of cards in the deck
  if (cards && cards.length < 3) {
    return (
      <div>
        <h2 className="font-weight-normal">Not Enough Cards</h2>
        <p className="font-weight-normal">
          {`You need at least 3 cards to study. There are ${cards.length} in this deck`}
        </p>
        <AddCardsButton id={deck.id} />
      </div>
    );
  } else {
    return (
      <div>
        {card && (
          <div className="card" key={card.id}>
            <div className="card-body">
              <h4 className="card-title">
                Card {currentIndex + 1} of {cards.length}
              </h4>
              <p className="card-text h6">
                {flipState % 2 === 1 ? card.front : card.back} {/* Display front or back based on flip state */}
              </p>
              <div className="container">
                <div className="row">
                  <button
                    type=""
                    className="btn btn-secondary"
                    onClick={handleFlip}
                  >
                    Flip
                  </button>
                  {flipState > 1 && (
                    <button
                      type=""
                      className="btn btn-primary ml-2"
                      onClick={handleNext}
                    >
                      Next
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default CardUnit;
