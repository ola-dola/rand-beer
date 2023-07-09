import { useEffect, useState } from 'react';
import Beers from './Beers';
import Header from './Header';
import Loading from './Loading';
import Footer from './Footer';
import axios from 'axios';
import { PageNotFound } from './PageNotFound';

export const url = 'https://api.punkapi.com/v2/beers';

function Home() {
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

export default Home;
