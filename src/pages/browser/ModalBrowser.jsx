import React from 'react';
import { ServiceNuevo } from '../../utils/serviceNuevo/ServiceNuevo';

export const ModalBrowser = ({ vehiculos }) => {
  return (
    <div>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          {vehiculos.map((item) => (
            <div key={item.id}>
              <h1
                style={{
                  fontSize: '25px',
                  fontWeight: 'bold',
                  textAlign: 'center',
                  margin: '10px',
                }}
              >
                Nuevo service: {item.patente.toUpperCase()}
              </h1>
              <ServiceNuevo {...item} />
            </div>
          ))}
          {console.log('hola')}
          <div className="modal-action">
            <label htmlFor="my-modal" className="btn">
              Cerrar
            </label>
            <label htmlFor="my-modal" className="btn">
              Guardar
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
