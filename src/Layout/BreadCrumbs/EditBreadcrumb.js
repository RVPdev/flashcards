import React from "react";
import { Link } from "react-router-dom";

function EditBreadcrumbs ({deck}) {
    // console.log(deck, "wiiiiiiiiiiiiiiiiiiiiii")

    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item">
                    <Link to={`/decks/${deck.id}/study`}>{deck.name}</Link>
                </li>
                <li className="breadcrumb-item active">
                    Edit Deck
                </li>
                
            </ol>
        </nav>
    );
}

export default EditBreadcrumbs;