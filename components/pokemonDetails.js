import Link from "next/link";
import React from "react";
import "../styles/index.scss";

const Checkbox = props => <input className="checkbox" type="checkbox" {...props} />;

const PokemonDetails = props => (
  <div className="pokemon-text-details flex-col">
    <div className="flex-row ">
      <p>Height {props.pokemon.height}</p>
    </div>
    <div className="flex-row ">
      <p>Weight {props.pokemon.weight}</p>
    </div>
    <div className="flex-row ">
      <p>In Bag </p>
      <Checkbox
        checked={false}
        onChange={() => {console.log("checked!")}}
      />
    </div>
    <div className="flex-row flex-main-justify">
          <p>Type1</p>
          <p>Type2</p>
          <p>Type3</p>
    </div>
    <div className="flex-row">
    <p>
    Spicy jalapeno bacon ipsum dolor amet ham hock prosciutto tongue tri-tip strip steak. Porchetta pork kielbasa, spare ribs kevin picanha pastrami jerky landjaeger t-bone leberkas pork chop beef ribs alcatra. Short loin burgdoggen ground round brisket. Ham hock bresaola salami tenderloin alcatra sausage hamburger corned beef.
    </p>
    </div>
    <div className="flex-col">
      <p>skill Name</p>
      <p>skill Name</p>
    </div>
  </div>
);
export default PokemonDetails;
