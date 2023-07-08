import { useEffect, useState } from 'react';
import Beers from './components/Beers';
import Header from './components/Header';
import Loading from './components/Loading';
import Footer from './components/Footer';
import axios from 'axios';
import { PageNotFound } from './components/PageNotFound';

export const url = 'https://api.punkapi.com/v2/beers';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [beers, setBeers] = useState([]);

  const removeBeer = (id) => {
    const newBeers = beers.filter((beer) => beer.id !== id);
    setBeers(newBeers);
  };

  const fetchBeers = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios(url, {
        headers: {
          Accept: 'application/json',
        },
      });

      setBeers(data);
    } catch (error) {
      console.log(error.response);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchBeers();
  }, []);

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return (
    <div>
      <Header beers={beers} setBeers={setBeers} setIsLoading={setIsLoading} />
      {beers.length === 0 && !isLoading ? (
        <PageNotFound />
      ) : (
        <Beers beers={beers} removeBeer={removeBeer} />
      )}
      <Footer />
    </div>
  );
}

export default App;
