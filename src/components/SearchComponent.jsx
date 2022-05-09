import { useState } from 'react';

const SearchComponent = ({ searchHandler }) => {
  const [dataToSearch, setDataToSearch] = useState({
    artist: '',
    song: '',
  });

  const handlerChange = ({ target }) => {
    setDataToSearch({ ...dataToSearch, [target.name]: target.value });
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    setDataToSearch({
      artist: '',
      song: '',
    });
    searchHandler(dataToSearch);
  };

  return (
    <div className="shadow_custom container_card min-h-20 text-center p-3 text-lg lg:text-2xl sm:w-3/4">
      <h3>Busca por artista y canción</h3>
      <form className="container_form" onSubmit={handlerSubmit}>
        <div className="container_label_and_input">
          <label htmlFor="">artista</label>
          <input
            className="input"
            type="text"
            name="artist"
            value={dataToSearch.artist}
            onChange={handlerChange}
          />
        </div>
        <div className="container_label_and_input">
          <label htmlFor="">canción</label>
          <input
            className="input"
            type="text"
            name="song"
            value={dataToSearch.song}
            onChange={handlerChange}
          />
        </div>
        {/* w-full h-16 flex justify-center items-center */}
        <div className="container_label_and_input">
          <label className="hidden lg:block lg:invisible">d</label>
          <button className="button h-12 bg-blue">Buscar</button>
        </div>
      </form>
    </div>
  );
};

export default SearchComponent;
