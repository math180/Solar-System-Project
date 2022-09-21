import React from 'react';
import Title from './Title';
import Planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    const planetList = Planets.map((planet) => (
      <PlanetCard key={ planet.name } name={ planet.name } image={ planet.image } />
    ));

    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        { planetList }
      </div>
    );
  }
}

export default SolarSystem;
