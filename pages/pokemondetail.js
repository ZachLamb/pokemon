
import "../styles/index.scss";
import PokemonDetails from "../components/pokemonDetails";
import PokemonMap from "../components/pokemonMap";
import dynamic from 'next/dynamic';

const DynamicComponentWithNoSSR = dynamic(() => import('../components/pokemonMap'), {
  ssr: false
});

const currentPokemon = {
  "weight": 192,
  "height": 200
}

const PokemonDetailPage = () => (
  <div className="pokemon-detail-page flex">
    <div className="flex-row poke-dets">
    <PokemonDetails pokemon={currentPokemon}/>
    <div className="poke-map">
    <DynamicComponentWithNoSSR />
    </div>
    </div>
  </div>
);

export default PokemonDetailPage;
