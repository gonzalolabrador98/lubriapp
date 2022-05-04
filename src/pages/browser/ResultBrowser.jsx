import React from 'react';
import { ServiceDescription } from '../../utils/serviceDescription/ServiceDescription';

export const ResultBrowser = ({ vehiculos, refResult }) => {
  return (
    <div>
      {vehiculos.map((item) => (
        <div key={item.id} className="card cardBrowser bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Último service del vehículo</h2>
            <ServiceDescription {...item} />

            <div className="card-actions justify-end mt-7">
              <label htmlFor="my-modal" className="btn btn-sm btn-primary">
                Eliminar
              </label>
              <label htmlFor="my-modal" className="btn btn-sm btn-primary">
                Editar
              </label>
              <label htmlFor="my-modal" className="btn btn-sm btn-primary">
                Nuevo
              </label>
            </div>
          </div>
        </div>
      ))}

      {refResult.current !== null && !vehiculos.length && (
        <div className="m-10">
          <div className="alert alert-error shadow-lg ">
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
        </div>
      )}
    </div>
  );
};
