import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';
import { url } from '../App';
import axios from 'axios';

const Search = ({ beers, setBeers, setIsLoading }) => {
  const [searchBeer, setSearchBeer] = useState('');

  const fetchBeers = async (value) => {
    // reload results if the value is empty i.e user has deleted all input
    if (!value) {
      setIsLoading(true);
      return window.location.reload();
    }

    try {
      const { data } = await axios(`${url}?beer_name=${value}`, {
        headers: {
          Accept: 'application/json',
        },
      });

      const results = data.filter((beer) => {
        return (
          value &&
          beer &&
          beer.name &&
          beer.name.toLowerCase().includes(value.toLowerCase())
        );
      });
      setBeers(() => results);
    } catch (error) {
      console.log(error.response);
    }
  };

  const handleChange = (value) => {
    setSearchBeer(value);
    fetchBeers(value);
  };

  return (
    <div className='input-wrapper'>
      <FaSearch className='search-icon' />
      <input
        type='text'
        placeholder='Search our beers...'
        value={searchBeer}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

export default Search;

// const response = await fetch(`${url}?beer_name=${value}`);
