import React from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import CreateDeck from "./DeckComponents/CreateDeck";
import DeckList from "./DeckComponents/DecksList";
import DeckStudy from "./DeckComponents/DeckStudy";
import DeckView from "./DeckComponents/DeckView";

import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";
import AddCards from "./CardsComponents/AddCards";
import EditDeck from "./DeckComponents/EditDeck";
import EditCard from "./CardsComponents/EditCard";

function Layout() {
  return (
    <>
      <Header /> {/* Header component for the application */}

      <div className="container">
        <Switch> {/* React Router Switch component to handle different routes */}
          <Route exact path="/">
            {/* Home route, displays "Create Deck" button and a list of all decks */}
            <Link className="btn btn-secondary" to="/decks/new">
              + Create Deck
            </Link>

            <DeckList /> {/* Component to list all decks */}
          </Route>

          <Route path="/decks/new">
            {/* Route to create a new deck */}
            <CreateDeck />
          </Route>

          <Route path="/decks/:id/study">
            {/* Route to study a specific deck */}
            <DeckStudy />
          </Route>

          <Route exact path="/decks/:id">
            {/* Route to view a specific deck */}
            <DeckView />
          </Route>

          <Route path="/decks/:id/cards/new">
            {/* Route to add new cards to a specific deck */}
            <AddCards />
          </Route>

          <Route path="/decks/:id/edit">
            {/* Route to edit a specific deck */}
            <EditDeck />
          </Route>

          <Route path="/decks/:deckId/cards/:cardId/edit">
            {/* Route to edit a specific card within a specific deck */}
            <EditCard />
          </Route>

          <Route>
            {/* Fallback route if no other routes match, displays a "Not Found" message */}
            <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default Layout;
