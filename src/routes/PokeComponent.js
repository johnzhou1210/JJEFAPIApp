import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { incrementFoundPokeCount } from '../app/pokeSlice.js';
import "../styles.css";

export default function PokeComponent() {
    const dispatch = useDispatch();
    const [pokemon, setPokemon] = useState(null);

    //Function will generate random number between 1 and 151
    function getRandomPokemonId() {
        return Math.floor(Math.random() * 151) + 1;
    }

    //Function will capitalize the first letter of a string
    //used for Pokemon name
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    //Function used to fetch a random Pokemon using the API
    function fetchRandomPokemon() {
        //Generate a random Pokemon ID between 1 and 152
        const randomPokemonId = getRandomPokemonId();
        //URL used for the Pokemon API request
        const url = `https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`;

        //Fetch the data from the API
        fetch(url)
            .then((res) => res.json())
            .then((result) => {
                //Retrieve the name and image URL from the API
                const newPokemon = {
                    name: capitalizeFirstLetter(result.name),
                    image: result.sprites["front_default"],
                };
                setPokemon(newPokemon);
                dispatch(incrementFoundPokeCount()); //Dispatch the action
            });
    }

    return (
        <div className="App">
            <div className="card">
                <button className="card-large-button2" onClick={fetchRandomPokemon}>
                    <strong>Click for a Random Pokemon!</strong>
                </button>

                {pokemon ? (
                    <div>
                        <img
                            className="card-image"
                            src={pokemon.image}
                            alt={pokemon.name}
                            style={{ width: "70%" }}
                        />
                        <h2 className="card-title">{pokemon.name}</h2>
                    </div>
                ) : (
                    <p></p>
                )}
            </div>
        </div>
    );
}
