import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    const planetList = planets.map((planet) => (
      <PlanetCard
        key={ planet.name }
        planetName={ planet.name }
        planetImage={ planet.image }
      />
    ));

    return (
      <div data-testid="solar-system" className='planets'>
        <Title headline="Planetas" />
        { planetList }
      </div>
    );
  }
}

export default SolarSystem;
