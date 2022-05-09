import { useState } from 'react';
import Header from './components/Header';
import MainLayout from './components/layouts/MainLayout';
import ResultComponent from './components/ResultComponent';
import SearchComponent from './components/SearchComponent';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState({});

  const searchHandler = async (data) => {
    try {
      setIsLoading(true);

      const response = await fetch(
        `${process.env.REACT_APP_API_URL}?art=${data.artist}&mus=${data.song}&extra=relmus&apikey={${process.env.REACT_APP_API_KEY}}`
      );

      const parsered = await response.json();

      setResult(parsered);
      setIsLoading(false);
    } catch (error) {
      console.log('Error al buscar letra ->', error);
      setIsLoading(false);
      setResult({});
    }
  };

  return (
    <>
      <Header />
      <main className="flex justify-center items-start">
        <MainLayout>
          <SearchComponent searchHandler={searchHandler} />
          <ResultComponent isLoading={isLoading} result={result} />
        </MainLayout>
      </main>
    </>
  );
};

export default App;
