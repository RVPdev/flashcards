import React from "react";
import { Link } from "react-router-dom";

function CardBreadcrumbs({deck}) {
    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item">
                    <Link to={`/decks/${deck.id}/cards/new`}>{deck.name}</Link>
                </li>
                <li className="breadcrumb-item active">
                    Add Card
                </li>
                
            </ol>
        </nav>
    );
}

export default CardBreadcrumbs;