import { useRef, useState } from 'react';
import { ModalBrowser } from './ModalBrowser';
import { ResultBrowser } from './ResultBrowser';
import { vehiculos } from '../../utils/vehiculos';
import './browser.css';

export const BrowserScreen = () => {
  const [searchValue, setSearchValue] = useState('');

  const vehiculosFiltrados = vehiculos.filter(
    (item) => item.patente === searchValue.toUpperCase()
  );

  const inputRef = useRef(null);

  const handleSearch = () => {
    setSearchValue(inputRef.current.value);
  };

  return (
    <div className="browser">
      <div className="titleBrowser">
        <h1>Buscador</h1>
      </div>
      <div>
        <input
          ref={inputRef}
          type="text"
          placeholder="Ingrese la patente del vehículo"
          className=" inputText input input-bordered input-primary w-80 max-w-xs input-md"
        />
        <button
          onClick={handleSearch}
          className="buscar btn btn-xs sm:btn-sm md:btn-md lg:btn-md "
        >
          Buscar
        </button>
      </div>

      <ResultBrowser vehiculos={vehiculosFiltrados} refResult={inputRef} />
      <ModalBrowser vehiculos={vehiculosFiltrados} search={searchValue} />
    </div>
  );
};
