import React from 'react';
import { Link } from 'react-router-dom';

const characters = [
    {id: 1, name: "Thor", thumnail: "thor.jpg"}
];

const BrowseCharacters = () => {
    return (
        <div>
            {characters.map((character) => (
                <div key={character.id} className="character-card">
                    <Link to={`/character-details/${character.id}`}>
                        <h3>{character.name}</h3>
                    </Link> 
                    </div>
                ))}
        </div>
    );
};

export default BrowseCharacters