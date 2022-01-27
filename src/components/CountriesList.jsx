import React from 'react';
import { Link } from 'react-router-dom';

const CountriesList = ({ countries }) => {
  return (
    <>
      {countries.map((country, i) => {
        return (
          <Link
            className="list-group-item list-group-item-action"
            to={country.alpha3Code}
            key={i}
          >
            <img
              src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
              alt={country.name.common}
            />
            <p>{country.name.common}</p>
          </Link>
        );
      })}
    </>
  );
};

export default CountriesList;
