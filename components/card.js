import Link from "next/link";
import React from "react";
import "../styles/index.scss";

const Card = props => (
  <div className="pokemon-card">
    <Link href="/pokemondetail">
      <a onClick={() =>{console.log("stub to include function that will pass selectedPokemon into state: " + props.name)}}>
        <img loading="auto" src={props.photo}></img>
        <p>{props.name}</p>
      </a>
    </Link>
  </div>
);
export default Card;
