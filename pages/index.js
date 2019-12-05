import Card from "../components/card";

import "../styles/index.scss";

import { useQuery } from '@apollo/react-hooks';

import POKEMON_QUERY from '../graphql/pokemon.query';

const pokemon = [
  {
    photo: "/bsaur.png",
    text: "first pokemon"
  },
  {
    photo: "/bsaur.png",
    text: "second pokemon"
  },
  {
    photo: "/bsaur.png",
    text: "third pokemon"
  },
  {
    photo: "/bsaur.png",
    text: "four pokemon"
  },
  {
    photo: "/bsaur.png",
    text: "five pokemon"
  }
];

const Index = () => {

  //query hook
  const {data, loading, error} = useQuery(POKEMON_QUERY);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    console.warn("Error from GraphQL: " + error)
  }
return (
  <div className="main-page flex">
    <div className="flex-row flex-main-space ">
      {pokemon.map((project,i) => {
        return <Card key={i} photo={project.photo} name={project.text} />;
      })}
    </div>
  </div>
)
    };

export default Index;
