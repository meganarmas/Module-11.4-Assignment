import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const characters = [
    { 
        id: 1, 
        name: "Thor", 
        description: "God from Norse Mythology",
        comics: ["Thor (1996)", "The Mighty Thor (2011)", "Thor: God of Thunder (2012)"],
    },
];

const CharacterDetail = () => {
    const { id } = useParams();
    const character = characters.find((char) => char.id == parseInt(id));

    if (!character) {
        console.log("Not found")
    }

    return(
        <div className="character-details">
            <h3>{character.name}</h3>
            <p>{character.description}</p>
        </div>
    );
};

export default CharacterDetail;