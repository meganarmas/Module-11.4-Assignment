import React from "react";
import { Link } from "react-router-dom";

const BrowseCharacters = () => {
    return (
        <div className="character-List">
            {characters.map((character) => (
                <div key={character.id} className="card">
                    <Link to={`/character-details/${character.id}`}>
                    <h3>{character.name}</h3>
                    </Link>
                </div>
            ))}
        </div>

    );
};

export default BrowseCharacters;