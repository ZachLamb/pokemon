import gql from 'graphql-tag';

const POKEMON_QUERY = gql`
  query Pokemon {
    pokemon
  }
`;

export default POKEMON_QUERY;