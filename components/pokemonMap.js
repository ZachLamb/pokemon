import { Component } from "react";
import ReactMapGL, { Marker } from "react-map-gl";

class PokemonMap extends Component {
  state = {
    viewport: {
      width: "100%",
      height: "100%",
      latitude: 32.9579956,
      longitude: -117.1608753,
      zoom: 10
    }
  };

  render() {
    return (
      <ReactMapGL
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxApiAccessToken="pk.eyJ1IjoiemFjaGxhbWI5NCIsImEiOiJjazNzeDlqZncwOXdsM2pwaXBkaTEyNHI3In0.q3I7ygcDwRZiAHtqGi0RnA"
        onViewportChange={viewport => this.setState({ viewport })}
        {...this.state.viewport}
      >
        <Marker
          latitude={32.9579956}
          longitude={-117.1608753}
          offsetLeft={-20}
          offsetTop={-10}
        >
        <img src="/pokeball.png" className="poke-marker"></img>
        </Marker>
      </ReactMapGL>
    );
  }
}

export default PokemonMap;
