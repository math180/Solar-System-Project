import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MissionCard extends Component {
  render() {
    const { name, year, country, destination } = this.props;

    return (
      <div data-testid="mission-card" className='mission-card'>
        <p data-testid="mission-name" className='one'>{name}</p>
        <p data-testid="mission-year" className='two'>{year}</p>
        <p data-testid="mission-country" className='three'>{country}</p>
        <p data-testid="mission-destination" className='four'>{destination}</p>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
