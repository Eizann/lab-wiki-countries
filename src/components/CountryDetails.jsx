import React from 'react';
import { useParams, Link } from 'react-router-dom';

const CountryDetails = ({ countries }) => {
  const params = useParams();

  const myCountry = countries.find(
    (country) => country.alpha3Code === params.id
  );
  console.log(myCountry);
  return (
    <>
      <div className="col-7">
        <img
          src={`https://flagpedia.net/data/flags/icon/72x54/${myCountry.alpha2Code.toLowerCase()}.png`}
          alt={myCountry.name.common}
          style={{ width: '300px' }}
        />
        <h1>{myCountry.name.common}</h1>
        <table class="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{ width: '30%' }}>Capital</td>
              <td>{myCountry.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>{myCountry.area}km²</td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {myCountry.borders.map((border) => {
                    return (
                      <>
                        <li>
                          <Link to={`/${border}`}>
                            <p>{border}</p>
                          </Link>
                        </li>
                      </>
                    );
                  })}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CountryDetails;
