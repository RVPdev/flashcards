import React from "react";
import { Link } from "react-router-dom";

function EditCardBreadcrumb({ deck, cardId }) {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to={`/decks/${deck.id}`}>Deck {deck.name}</Link>
        </li>
        <li className="breadcrumb-item active">Edit Card {cardId}</li>
      </ol>
    </nav>
  );
}

export default EditCardBreadcrumb;
