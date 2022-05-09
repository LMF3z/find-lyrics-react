import React from 'react';
import LoadingComponent from './LoadingComponent';

const ResultComponent = ({ isLoading, result }) => {
  if (isLoading) {
    return (
      <div className="shadow_custom container_card mt-5 lg:mt-10 min-h-20 text-center p-5 lg:p-10 text-lg lg:text-2xl sm:w-3/4">
        <div className="w-full h-20 flex justify-center items-center">
          <LoadingComponent />
        </div>
      </div>
    );
  }

  return (
    <div className="shadow_custom container_card mt-5 lg:mt-10 min-h-20 text-center p-5 lg:p-10 text-lg lg:text-2xl sm:w-3/4">
      {result?.type === 'exact' ? (
        <div className="w-full h-full text-justify">
          {result.mus[0].text
            .split('\n')
            .map((item, index) =>
              item !== '' ? <p key={index}>{item}</p> : <br key={index} />
            )}
        </div>
      ) : result?.type === 'notfound' ? (
        <label>No se encontró nada.</label>
      ) : (
        <label>Busca letras de tus artistas favoritos.</label>
      )}
    </div>
  );
};

export default ResultComponent;
