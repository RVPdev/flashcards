import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { readCard, readDeck, updateCard } from "../../utils/api";
import EditCardBreadcrumb from "../BreadCrumbs/EditCardBreadcrumb";
import CardForm from "./CardForm";

function EditCard() {
  const { deckId, cardId } = useParams(); // Get the deck and card IDs from the URL
  const history = useHistory();

  const [deck, setDeck] = useState([]); // State to hold the deck information
  const [card, setCard] = useState({
    // State to hold the card information
    front: "",
    back: "",
  });

  useEffect(() => {
    // Fetch deck and card details using the deckId and cardId
    readDeck(deckId).then(setDeck);
    readCard(cardId).then(setCard);
  }, []);

  // Handle changes in the form inputs
  const handleChange = (event) => {
    setCard({
      ...card,
      [event.target.name]: event.target.value,
    });
  };

  // Handle the form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    updateCard(card); // Update the card with the new values
    history.push("/"); // Redirect to the home page
  };

  // Handle the Cancel button click
  const handleClick = () => {
    history.push("/"); // Redirect to the home page
  };

  return (
    <div>
      <EditCardBreadcrumb deck={deck} cardId={cardId} />
      <h2>Edit Card</h2>
      <CardForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        handleClick={handleClick}
        form={card}
      />
    </div>
  );
}

export default EditCard;
