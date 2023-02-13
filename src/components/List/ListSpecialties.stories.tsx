// Base
import React from 'react';
import './List.stories.scss';
import PropTypes from 'prop-types';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Config
export default {
  title: 'Componentes|Listas/Especialidades',
  decorators: [withA11y]
};

export const Score = (): JSX.Element => {
  const scoring = 0;
  return (
    <div className="wrapper">
      <div className="list-scoring">
        <div className="list-scoring-text">
          <h4>Scoring</h4>
          <p>
            Puntaje de scoring: <span>{scoring} puntos</span>
          </p>
        </div>
        <div className="list-scoring-button">
          <button type="button" className="btn btn-link btn-sm">
            Botón
          </button>
        </div>
      </div>
    </div>
  );
};
Score.story = { name: 'Puntuación' };

function formatCurrency(value: number): React.ReactElement {
  return (
    <React.Fragment>{value.toLocaleString('es-ES', { minimumFractionDigits: 2, useGrouping: true })}</React.Fragment>
  );
}

export const UlList = (): JSX.Element => {
  const ulTitle = [
    'Item lorem ipsum dolor sit',
    'Item lorem ipsum dolor sit',
    'Item lorem ipsum dolor sit',
    'Item lorem ipsum dolor sit',
    'Item lorem ipsum dolor sit'
  ];
  const cost = [1000, 1000, 1000, 1000, 1000];
  const totalCost = cost.reduce((sum, cost) => sum + cost, 0);

  return (
    <div className="wrapper">
      <ul className="ul-cost">
        {ulTitle.map((title, index) => (
          <li key={index} className="li-cost">
            <small>{title}</small>
            <p>${formatCurrency(cost[index])}</p>
          </li>
        ))}
        <hr />
        <li className="total">
          <small>Item lorem ipsum dolor sit</small>
          <p>${formatCurrency(totalCost)}</p>
        </li>
      </ul>
    </div>
  );
};

UlList.story = { name: 'Lista de costos' };

export const OneCost = (): JSX.Element => {
  const ulTitle = 'Item lorem ipsum dolor sit';
  const cost = 1000;

  return (
    <div className="wrapper">
      <ul className="ul-cost">
        <li className="li-cost">
          <small>{ulTitle}</small>
          <p>${formatCurrency(cost)}</p>
        </li>
      </ul>
    </div>
  );
};

OneCost.story = { name: 'Solo un costo' };

export const management = (): JSX.Element => {
  const cost = 2043;
  return (
    <>
      <div className="lists-wrapper">
        <div className="list-information-icon procedure">
          <div className="d-flex">
            <span className="material-icons-round list-icon left-icon">info</span>
            <div className="list-body">
              <p className="list-text">Trámite de Renovación de licencia de conducir</p>
              <p className="total">${formatCurrency(cost)}</p>
            </div>
          </div>
          <a className="btn btn-primary btn-sm" href="#" target="_blank">
            Pagar Boleto(BUI)
          </a>
        </div>
      </div>
    </>
  );
};

management.story = { name: 'Tramite' };

interface PaymentStatusDisplayProps {
  status: string;
}

const PaymentStatus = {
  APPROVED: 'Aprobada',
  PROCESSING: 'En proceso',
  DECLINED: 'Negada'
};

function PaymentStatusDisplay({ status }: PaymentStatusDisplayProps) {
  return (
    <small className="payment-status">
      {status === PaymentStatus.APPROVED && PaymentStatus.APPROVED}
      {status === PaymentStatus.PROCESSING && PaymentStatus.PROCESSING}
      {status === PaymentStatus.DECLINED && PaymentStatus.DECLINED}
    </small>
  );
}

function formatCurrencyWithExponent(value: number): React.ReactElement {
  const exponent = (value % 1).toFixed(2).substr(2);
  return (
    <React.Fragment>
      {Math.floor(value)}
      <sup>{exponent}</sup>
    </React.Fragment>
  );
}
export const processingStatus = (): JSX.Element => {
  const cost = 600;
  return (
    <>
      <div className="lists-wrapper">
        <div className="list-information-icon procedure">
          <div className="d-flex">
            <span className="material-icons-round list-icon left-icon">info</span>
            <div className="list-body">
              <small className="small-cost">${formatCurrencyWithExponent(cost)}</small>
              <h6 className="list-text">Información Relevante al Icono </h6>
              <PaymentStatusDisplay status={PaymentStatus.APPROVED} />
              <div className="list-location">
                <small>
                  <a href="#">o Ubicación Av. Int. Cantilo </a>
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
PaymentStatusDisplay.propTypes = {
  status: PropTypes.oneOf([PaymentStatus.APPROVED, PaymentStatus.PROCESSING, PaymentStatus.DECLINED]).isRequired
};
processingStatus.story = { name: 'Estado de tramite' };

export const ticketRequest = (): JSX.Element => {
  const cost = 450;
  return (
    <>
      <div className="lists-wrapper">
        <div className="list-information-icon procedure ticket">
          <div className="d-flex">
            <div className="list-body">
              <small className="small-cost">${formatCurrencyWithExponent(cost)}</small>
              <h6 className="list-text">Solicitud de informes varios </h6>
              <p className="text-xs">Boleta N° 2549-48758798</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
PaymentStatusDisplay.propTypes = {
  status: PropTypes.oneOf([PaymentStatus.APPROVED, PaymentStatus.PROCESSING, PaymentStatus.DECLINED]).isRequired
};
ticketRequest.story = { name: 'Solicitud de boleta' };

export const paymentMethod = (): JSX.Element => {
  return (
    <>
      <div className="lists-wrapper">
        <div className="list-information-icon procedure">
          <div className="d-flex">
            <div className="payment-method-icon">
              <i className="bx bxl-visa" style={{ color: '#007bc7' }}></i>
            </div>
            <div className="list-body">
              <p className="list-text">Título de lista</p>
              <p className="text-xs">Descripción de la lista</p>
            </div>
          </div>
          <div className="custom-control custom-radio">
            <input
              className="custom-control-input"
              type="radio"
              name="profession"
              id="profession-content"
              value="content"
            />
            <label className="custom-control-label" htmlFor="profession-content"></label>
          </div>
        </div>
      </div>
    </>
  );
};
paymentMethod.story = { name: 'Metodo de pago' };
