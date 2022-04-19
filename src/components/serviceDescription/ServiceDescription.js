import React from 'react';

export const ServiceDescription = ({
  fecha,
  patente,
  filtroAceite,
  filtroAire,
  filtroCombustible,
  liquidoEmbrague,
  liquidoFrenos,
  pastillasFrenos,
  correa,
  correaDistribucion,
  refrigerante,
}) => {
  return (
    <div>
      <p>Fecha: {fecha}</p>
      <p>Patente: {patente}</p>
      <p>Filtro de aceite: {filtroAceite}</p>
      <p>Filtro de aire: {filtroAire}</p>
      <p>Filtro de Combustible: {filtroCombustible}</p>
      <p>Liquido de embrague: {liquidoEmbrague}</p>
      <p>Liquido de frenos: {liquidoFrenos}</p>
      <p>Pastillas de frenos: {pastillasFrenos}</p>
      <p>Correa: {correa}</p>
      <p>Correa de distribucion: {correaDistribucion}</p>
      <p>Refrigerante: {refrigerante}</p>
    </div>
  );
};
