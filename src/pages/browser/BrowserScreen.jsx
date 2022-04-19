import { useRef, useState } from 'react';
import { ServiceDescription } from '../../components/serviceDescription/ServiceDescription';
import { vehiculos } from '../../utils/vehiculos';
import './browser.css';

export const BrowserScreen = () => {
  const [searchValue, setSearchValue] = useState('');

  const inputRef = useRef(null);

  const handleSearch = () => {
    setSearchValue(inputRef.current.value);
  };

  const vehiculosFiltrados = vehiculos.filter(
    (item) => item.patente === searchValue.toUpperCase()
  );

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

      <div>
        {vehiculosFiltrados.map((item) => (
          <div className="card cardBrowser bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Último service del vehículo</h2>
              <ServiceDescription {...item} />

              <div className="card-actions justify-end mt-7">
                <button className="btn btn-sm btn-primary">Eliminar</button>
                <button className="btn btn-sm btn-primary">Editar</button>
                <button className="btn btn-sm btn-primary">Nuevo</button>
              </div>
            </div>
          </div>
        ))}

        {inputRef.current !== null && !vehiculosFiltrados.length && (
          <div className="alert alert-error shadow-lg m-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current flex-shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Ingrese un numero de patente válido.</span>
          </div>
        )}
      </div>
    </div>
  );
};
