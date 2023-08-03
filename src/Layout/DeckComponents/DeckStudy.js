import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min"; // Import useParams hook from React Router
import { readDeck } from "../../utils/api"; // Import API function

import CardUnit from "../CardsComponents/CardUnit"; // Import CardUnit component
import StudyBreadcrumbs from "../BreadCrumbs/StudyBreadcrumbs"; // Import StudyBreadcrumbs component

function DeckStudy() {
  const { id } = useParams(); // Extract the deck id from the URL parameters
  const [deck, setDeck] = useState({}); // State to hold the deck details

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

  return (
    <div>
      <StudyBreadcrumbs deck={deck} /> {/* Breadcrumbs component with deck details */}
      <h2 className="display-4 font-weight-normal">{`Study: ${deck.name}`}</h2> {/* Display the deck name */}
      <CardUnit deck={deck} /> {/* CardUnit component to handle individual card study */}
    </div>
  );
}

export default DeckStudy;
