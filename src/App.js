import logo from './logo.svg';
import './App.css';
import Countries from './countries.json';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="container">
        <div className="row">
          <div
            className="col-5"
            style={{ maxHeight: '90vh', overflow: 'scroll' }}
          >
            <div className="list-group">
              <CountriesList countries={Countries} />
            </div>
          </div>

          <Routes>
            <Route
              path="/:id"
              element={<CountryDetails countries={Countries} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
