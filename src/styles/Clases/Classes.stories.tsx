// Base
import React from 'react';
import './Classes.stories.scss';

// Configuración general del componente
export default {
  title: 'Estilos|Clases',
  parameters: { options: { showPanel: false } }
};

export const SizesAndSpacing = (): JSX.Element => {
  return (
    <>
      <div className="storybook_container-sizes">
        {/* Tamaños y Espaciados - Margin*/}
        <p className="headline-lg font-weight-bold">Tamaños y Espaciados</p>
        <p className="headline-lg font-weight-semibold">Margin | 1 - 8</p>
        <div className="responsive-scroll" tabIndex={0}>
          <table className="table">
            <thead>
              <tr>
                <th scope="col" className="tb-text">
                  margin-top
                </th>
                <th scope="col" className="tb-text">
                  margin-right
                </th>
                <th scope="col" className="tb-text">
                  margin-bottom
                </th>
                <th scope="col" className="tb-text">
                  margin-left
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <p className="storybook__margin-typography mt-0">{'.mt-0'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography mr-0">{'.mr-0'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography mb-0">{'.mb-0'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography ml-0">{'.ml-0'}</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="storybook__margin-typography mt-1">{'.mt-1'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography mr-1">{'.mr-1'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography mb-1">{'.mb-1'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography ml-1">{'.ml-1'}</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="storybook__margin-typography mt-2">{'.mt-2'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography mr-2">{'.mr-2'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography mb-2">{'.mb-2'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography ml-2">{'.ml-2'}</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="storybook__margin-typography mt-3">{'.mt-3'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography mr-3">{'.mr-3'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography mb-3">{'.mb-3'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography ml-3">{'.ml-3'}</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="storybook__margin-typography mt-4">{'.mt-4'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography mr-4">{'.mr-4'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography mb-4">{'.mb-4'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography ml-4">{'.ml-4'}</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="storybook__margin-typography mt-5">{'.mt-5'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography mr-5">{'.mr-5'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography mb-5">{'.mb-5'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography ml-5">{'.ml-5'}</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="storybook__margin-typography mt-6">{'.mt-6'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography mr-6">{'.mr-6'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography mb-6">{'.mb-6'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography ml-6">{'.ml-6'}</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="storybook__margin-typography mt-7">{'.mt-7'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography mr-7">{'.mr-7'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography mb-7">{'.mb-7'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography ml-7">{'.ml-7'}</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="storybook__margin-typography mt-8">{'.mt-8'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography mr-8">{'.mr-8'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography mb-8">{'.mb-8'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography ml-8">{'.ml-8'}</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Tamaños y Espaciados - Margin*/}

        {/* Tamaños y Espaciados - Padding*/}
        <p className="headline-lg font-weight-semibold mt-3">Padding | 1 - 8</p>
        <div className="responsive-scroll" tabIndex={0}>
          <table className="table">
            <thead>
              <tr>
                <th scope="col" className="tb-text">
                  padding-top
                </th>
                <th scope="col" className="tb-text">
                  padding-right
                </th>
                <th scope="col" className="tb-text">
                  padding-bottom
                </th>
                <th scope="col" className="tb-text">
                  padding-left
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <p className="storybook__margin-typography pt-0">{'.pt-0'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography pr-0">{'.pr-0'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography pb-0">{'.pb-0'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography pl-0">{'.pl-0'}</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="storybook__margin-typography pt-1">{'.pt-1'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography pr-1">{'.pr-1'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography pb-1">{'.pb-1'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography pl-1">{'.pl-1'}</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="storybook__margin-typography pt-2">{'.pt-2'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography pr-2">{'.pr-2'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography pb-2">{'.pb-2'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography pl-2">{'.pl-2'}</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="storybook__margin-typography pt-3">{'.pt-3'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography pr-3">{'.pr-3'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography pb-3">{'.pb-3'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography pl-3">{'.pl-3'}</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="storybook__margin-typography pt-4">{'.pt-4'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography pr-4">{'.pr-4'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography pb-4">{'.pb-4'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography pl-4">{'.pl-4'}</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="storybook__margin-typography pt-5">{'.pt-5'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography pr-5">{'.pr-5'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography pb-5">{'.pb-5'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography pl-5">{'.pl-5'}</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="storybook__margin-typography pt-6">{'.pt-6'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography pr-6">{'.pr-6'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography pb-6">{'.pb-6'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography pl-6">{'.pl-6'}</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="storybook__margin-typography pt-7">{'.pt-7'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography pr-7">{'.pr-7'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography pb-7">{'.pb-7'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography pl-7">{'.pl-7'}</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p className="storybook__margin-typography pt-8">{'.pt-8'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography pr-8">{'.pr-8'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography pb-8">{'.pb-8'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography pl-8">{'.pl-8'}</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Tamaños y Espaciados - Padding*/}
      </div>
    </>
  );
};

SizesAndSpacing.story = { name: 'Tamaños y Espaciados' };

export const Columns = (): JSX.Element => {
  return (
    <>
      <div className="storybook_container-columns">
        {/* Columnas */}
        <p className="headline-lg font-weight-bold">Columnas | 1 - 12</p>
        <div className="responsive-scroll" tabIndex={0}>
          <table className="table">
            <thead>
              <tr>
                <th scope="col" className="tb-text">
                  Extra small | {'<576px'}
                </th>
                <th scope="col" className="tb-text">
                  Small | {'≥576px'}
                </th>
                <th scope="col" className="tb-text">
                  Medium | {'≥768px'}
                </th>
                <th scope="col" className="tb-text">
                  Large | {'≥992px'}
                </th>
                <th scope="col" className="tb-text">
                  Extra large | {'≥1200px'}
                </th>
              </tr>
            </thead>
            <tbody>
              {/* 1 */}
              <tr>
                <td>
                  <p className="storybook__margin-typography ">{'.col-1'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography ">{'.col-sm-1'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography ">{'.col-md-1'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography ">{'.col-lg-1'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography ">{'.col-xl-1'}</p>
                </td>
              </tr>
              {/* 2 */}
              <tr>
                <td>
                  <p className="storybook__margin-typography ">{'.col-2'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography ">{'.col-sm-2'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography ">{'.col-md-2'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography ">{'.col-lg-2'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography ">{'.col-xl-2'}</p>
                </td>
              </tr>
              {/* 3 */}
              <tr>
                <td>
                  <p className="storybook__margin-typography ">{'.col-3'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography ">{'.col-sm-3'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography ">{'.col-md-3'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography ">{'.col-lg-3'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography ">{'.col-xl-3'}</p>
                </td>
              </tr>
              {/* 4 */}
              <tr>
                <td>
                  <p className="storybook__margin-typography ">{'.col-4'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography ">{'.col-sm-4'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography ">{'.col-md-4'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography ">{'.col-lg-4'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography ">{'.col-xl-4'}</p>
                </td>
              </tr>
              {/* 5 */}
              <tr>
                <td>
                  <p className="storybook__margin-typography ">{'.col-5'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography ">{'.col-sm-5'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography ">{'.col-md-5'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography ">{'.col-lg-5'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography ">{'.col-xl-5'}</p>
                </td>
              </tr>
              {/* 6 */}
              <tr>
                <td>
                  <p className="storybook__margin-typography ">{'.col-6'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography ">{'.col-sm-6'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography ">{'.col-md-6'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography ">{'.col-lg-6'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography ">{'.col-xl-6'}</p>
                </td>
              </tr>
              {/* 7 */}
              <tr>
                <td>
                  <p className="storybook__margin-typography ">{'.col-7'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography ">{'.col-sm-7'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography ">{'.col-md-7'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography ">{'.col-lg-7'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography ">{'.col-xl-7'}</p>
                </td>
              </tr>
              {/* 8 */}
              <tr>
                <td>
                  <p className="storybook__margin-typography ">{'.col-8'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography ">{'.col-sm-8'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography ">{'.col-md-8'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography ">{'.col-lg-8'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography ">{'.col-xl-8'}</p>
                </td>
              </tr>
              {/* 9 */}
              <tr>
                <td>
                  <p className="storybook__margin-typography ">{'.col-9'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography ">{'.col-sm-9'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography ">{'.col-md-9'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography ">{'.col-lg-9'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography ">{'.col-xl-9'}</p>
                </td>
              </tr>
              {/* 10 */}
              <tr>
                <td>
                  <p className="storybook__margin-typography ">{'.col-10'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography ">{'.col-sm-10'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography ">{'.col-md-10'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography ">{'.col-lg-10'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography ">{'.col-xl-10'}</p>
                </td>
              </tr>
              {/* 11 */}
              <tr>
                <td>
                  <p className="storybook__margin-typography ">{'.col-11'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography ">{'.col-sm-11'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography ">{'.col-md-11'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography ">{'.col-lg-11'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography ">{'.col-xl-11'}</p>
                </td>
              </tr>
              {/* 12 */}
              <tr>
                <td>
                  <p className="storybook__margin-typography ">{'.col-12'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography ">{'.col-sm-12'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography ">{'.col-md-12'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography ">{'.col-lg-12'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography ">{'.col-xl-12'}</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Columnas */}
      </div>
    </>
  );
};

Columns.story = { name: 'Columnas' };

export const Order = (): JSX.Element => {
  return (
    <>
      {/* Order */}
      <p className="headline-lg font-weight-bold ">Order | 1 - 12</p>
      <p>
        Las clases <strong>.first</strong> y <strong>.last</strong> ponen a un elemento <strong>al principio</strong> y
        al <strong>final</strong>.
      </p>
      <div className="responsive-scroll" tabIndex={0}>
        <table className="table">
          <thead>
            <tr>
              <th scope="col" className="tb-text">
                Order
              </th>
            </tr>
          </thead>
          <tbody>
            {/* first */}
            <tr>
              <td>
                <p className="storybook__margin-typography ">
                  <strong>{'.first'}</strong> | Pone a un elemento al principio de todo
                </p>
              </td>
            </tr>
            {/* last */}
            <tr>
              <td>
                <p className="storybook__margin-typography ">
                  <strong>{'.last'}</strong> | Pone a un elemento al final de todo
                </p>
              </td>
            </tr>
            {/* 1 */}
            <tr>
              <td>
                <p className="storybook__margin-typography ">{'.order-1'}</p>
              </td>
            </tr>
            {/* 2 */}
            <tr>
              <td>
                <p className="storybook__margin-typography ">{'.order-2'}</p>
              </td>
            </tr>
            {/* 3 */}
            <tr>
              <td>
                <p className="storybook__margin-typography ">{'.order-3'}</p>
              </td>
            </tr>
            {/* 4 */}
            <tr>
              <td>
                <p className="storybook__margin-typography ">{'.order-4'}</p>
              </td>
            </tr>
            {/* 5 */}
            <tr>
              <td>
                <p className="storybook__margin-typography ">{'.order-5'}</p>
              </td>
            </tr>
            {/* 6 */}
            <tr>
              <td>
                <p className="storybook__margin-typography ">{'.order-6'}</p>
              </td>
            </tr>
            {/* 7 */}
            <tr>
              <td>
                <p className="storybook__margin-typography ">{'.order-7'}</p>
              </td>
            </tr>
            {/* 8 */}
            <tr>
              <td>
                <p className="storybook__margin-typography ">{'.order-8'}</p>
              </td>
            </tr>
            {/* 9 */}
            <tr>
              <td>
                <p className="storybook__margin-typography ">{'.order-9'}</p>
              </td>
            </tr>
            {/* 10 */}
            <tr>
              <td>
                <p className="storybook__margin-typography ">{'.order-10'}</p>
              </td>
            </tr>
            {/* 11 */}
            <tr>
              <td>
                <p className="storybook__margin-typography ">{'.order-11'}</p>
              </td>
            </tr>
            {/* 12 */}
            <tr>
              <td>
                <p className="storybook__margin-typography ">{'.order-12'}</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* Order */}
    </>
  );
};

Order.story = { name: 'Orden' };

export const Border = (): JSX.Element => {
  return (
    <>
      <div className="storybook_container-border">
        {/* Bordes */}
        <p className="headline-lg font-weight-bold ">Bordes</p>
        <div className="responsive-scroll" tabIndex={0}>
          <table className="table">
            <thead>
              <tr>
                <th scope="col" className="tb-text">
                  .border
                </th>
                <th scope="col" className="tb-text">
                  .border-top
                </th>
                <th scope="col" className="tb-text">
                  .border-right
                </th>
                <th scope="col" className="tb-text">
                  .border-bottom
                </th>
                <th scope="col" className="tb-text">
                  .border-left
                </th>
              </tr>
            </thead>
            <tbody>
              {/* 1 */}
              <tr>
                <td>
                  <p className="storybook__margin-typography ">
                    <span className="d-inline-block border"></span>
                  </p>
                </td>
                <td>
                  <p className="storybook__margin-typography ">
                    <span className="d-inline-block border-top"></span>
                  </p>
                </td>
                <td>
                  <p className="storybook__margin-typography ">
                    <span className="d-inline-block border-right"></span>
                  </p>
                </td>
                <td>
                  <p className="storybook__margin-typography ">
                    <span className="d-inline-block border-bottom"></span>
                  </p>
                </td>
                <td>
                  <p className="storybook__margin-typography ">
                    <span className="d-inline-block border-left"></span>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Bordes */}

        {/* Bordes - 0 */}
        <p className="headline-lg font-weight-bold mt-3">Bordes - 0</p>
        <div className="responsive-scroll" tabIndex={0}>
          <table className="table">
            <thead>
              <tr>
                <th scope="col" className="tb-text">
                  .border-0
                </th>
                <th scope="col" className="tb-text">
                  .border-top-0
                </th>
                <th scope="col" className="tb-text">
                  .border-right-0
                </th>
                <th scope="col" className="tb-text">
                  .border-bottom-0
                </th>
                <th scope="col" className="tb-text">
                  .border-left-0
                </th>
              </tr>
            </thead>
            <tbody>
              {/* 1 */}
              <tr>
                <td>
                  <p className="storybook__margin-typography ">
                    <span className="d-inline-block border border-0"></span>
                  </p>
                </td>
                <td>
                  <p className="storybook__margin-typography ">
                    <span className="d-inline-block border border-top-0"></span>
                  </p>
                </td>
                <td>
                  <p className="storybook__margin-typography ">
                    <span className="d-inline-block border border-right-0"></span>
                  </p>
                </td>
                <td>
                  <p className="storybook__margin-typography ">
                    <span className="d-inline-block border border-bottom-0"></span>
                  </p>
                </td>
                <td>
                  <p className="storybook__margin-typography ">
                    <span className="d-inline-block border border-left-0"></span>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Bordes - 0 */}

        {/* Bordes - Colores */}
        <p className="headline-lg font-weight-bold mt-3">Bordes - Colores</p>
        <div className="responsive-scroll" tabIndex={0}>
          <table className="table">
            <thead>
              <tr>
                <th scope="col" className="tb-text">
                  .border-primary
                </th>
                <th scope="col" className="tb-text">
                  .border-secondary
                </th>
                <th scope="col" className="tb-text">
                  .border-success
                </th>
                <th scope="col" className="tb-text">
                  .border-danger
                </th>
                <th scope="col" className="tb-text">
                  .border-warning
                </th>
              </tr>
            </thead>
            <tbody>
              {/* 1 */}
              <tr>
                <td>
                  <p className="storybook__margin-typography ">
                    <span className="d-inline-block border .border-primary"></span>
                  </p>
                </td>
                <td>
                  <p className="storybook__margin-typography ">
                    <span className="d-inline-block border border-secondary"></span>
                  </p>
                </td>
                <td>
                  <p className="storybook__margin-typography ">
                    <span className="d-inline-block border border-success"></span>
                  </p>
                </td>
                <td>
                  <p className="storybook__margin-typography ">
                    <span className="d-inline-block border border-danger"></span>
                  </p>
                </td>
                <td>
                  <p className="storybook__margin-typography ">
                    <span className="d-inline-block border border-warning"></span>
                  </p>
                </td>
              </tr>
            </tbody>
            {/* 2 fila de colores */}
            <thead>
              <tr>
                <th scope="col" className="tb-text">
                  .border-info
                </th>
                <th scope="col" className="tb-text">
                  .border-light
                </th>
                <th scope="col" className="tb-text">
                  .border-dark
                </th>
                <th scope="col" className="tb-text">
                  .border-white
                </th>
              </tr>
            </thead>
            <tbody>
              {/* 1 */}
              <tr>
                <td>
                  <p className="storybook__margin-typography ">
                    <span className="d-inline-block border .border-info"></span>
                  </p>
                </td>
                <td>
                  <p className="storybook__margin-typography ">
                    <span className="d-inline-block border border-light"></span>
                  </p>
                </td>
                <td>
                  <p className="storybook__margin-typography ">
                    <span className="d-inline-block border border-dark"></span>
                  </p>
                </td>
                <td>
                  <p className="storybook__margin-typography ">
                    <span className="d-inline-block border border-white"></span>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Bordes - Colores */}
      </div>
    </>
  );
};

Border.story = { name: 'Bordes' };

// no muestra las 7 columnas
export const Containers = (): JSX.Element => {
  return (
    <>
      <div className="storybook_container-containers">
        {/* Containers */}
        <p className="headline-lg font-weight-bold">Containers</p>
        <div className="responsive-scroll" tabIndex={0}>
          <table className="table">
            <thead>
              <tr>
                <th scope="col" className="tb-text "></th>
                <th scope="col" className="tb-text">
                  Extra small | {'<576px'}
                </th>
                <th scope="col" className="tb-text">
                  Small | {'≥576px'}
                </th>
                <th scope="col" className="tb-text">
                  Medium | {'≥768px'}
                </th>
                <th scope="col" className="tb-text">
                  Large | {'≥992px'}
                </th>
                <th scope="col" className="tb-text">
                  Extra large | {'≥1200px'}
                </th>
              </tr>
            </thead>
            <tbody>
              {/* container */}
              <tr>
                <td>
                  <p className="storybook__margin-typography ">{'.container'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography ">{'100%'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography ">{'540px'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography ">{'720px'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography ">{'960px'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography ">{'1140px'}</p>
                </td>
              </tr>

              {/* .container-sm*/}
              <tr>
                <td>
                  <p className="storybook__margin-typography ">{'.container-sm'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography ">{'100%'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography ">{'540px'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography ">{'720px'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography ">{'960px'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography ">{'1140px'}</p>
                </td>
              </tr>

              {/* .container-md*/}
              <tr>
                <td>
                  <p className="storybook__margin-typography ">{'.container-md'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography ">{'100%'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography ">{'100%'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography ">{'720px'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography ">{'960px'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography ">{'1140px'}</p>
                </td>
              </tr>

              {/* .container-lg*/}
              <tr>
                <td>
                  <p className="storybook__margin-typography ">{'.container-lg'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography ">{'100%'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography ">{'100%'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography ">{'100%'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography ">{'960px'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography ">{'1140px'}</p>
                </td>
              </tr>

              {/* .container-xl*/}
              <tr>
                <td>
                  <p className="storybook__margin-typography ">{'.container-xl'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography ">{'100%'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography ">{'100%'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography ">{'100%'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography ">{'100%'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography ">{'1140px'}</p>
                </td>
              </tr>

              {/* .container-fluid*/}
              <tr>
                <td>
                  <p className="storybook__margin-typography ">{'.container-fluid'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography ">{'100%'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography ">{'100%'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography ">{'100%'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography ">{'100%'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography ">{'100%'}</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Containers */}
      </div>
    </>
  );
};

Containers.story = { name: 'Contenedores' };

export const Alignments = (): JSX.Element => {
  return (
    <>
      <div className="storybook_container-alignment">
        {/* Alineamiento Vertical */}
        <p className="headline-lg font-weight-bold">Alineamientos</p>
        <p>Los alineamientos funcionan dentro de un contenedor que tenga Flex Box/Grid.</p>
        <div className="responsive-scroll" tabIndex={0}>
          <table className="table">
            <thead>
              <tr>
                <th colSpan={3} className="tb-text">
                  Alineamiento Vertical
                </th>
              </tr>
            </thead>
            <tbody>
              {/* align-items-{start} align-items-{end} align-items-{center} */}
              <tr>
                <td>
                  <p className="storybook__margin-typography ">{'.align-items-start'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography ">{'.align-items-end'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography ">{'.align-items-center'}</p>
                </td>
              </tr>

              {/* align-self-{start} align-self-{end} align-self-{center} */}
              <tr>
                <td>
                  <p className="storybook__margin-typography ">{'.align-self-start'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography ">{'.align-self-end'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography ">{'.align-self-center'}</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Alineamiento Vertical */}

        {/* Alineamiento Horizontal */}
        <div className="responsive-scroll mt-3" tabIndex={0}>
          <table className="table">
            <thead>
              <tr>
                <th colSpan={5} className="tb-text">
                  Alineamiento Horizontal
                </th>
              </tr>
            </thead>
            <tbody>
              {/* justify-content-{start} justify-content-{end} justify-content-{center} */}
              <tr>
                <td>
                  <p className="storybook__margin-typography ">{'.justify-content-start'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography ">{'.justify-content-end'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography ">{'.justify-content-center'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography ">{'.justify-content-around'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography ">{'.justify-content-between'}</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Alineamiento Horizontal */}
      </div>
    </>
  );
};

Alignments.story = { name: 'Alineamientos' };

export const DisplayAndPosition = (): JSX.Element => {
  return (
    <>
      <div className="storybook_container-display">
        {/* Display */}
        <p className="headline-lg font-weight-bold">Display</p>
        <div className="responsive-scroll" tabIndex={0}>
          <table className="table">
            <thead>
              <tr>
                <th scope="col" colSpan={5} className="tb-text ">
                  Display
                </th>
              </tr>
            </thead>
            <tbody>
              {/* container */}
              <tr>
                <td>
                  <p className="storybook__margin-typography ">{'.d-none'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography ">{'.d-inline'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography ">{'.d-inline-block'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography ">{'.d-block'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography ">{'.d-table'}</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Display */}

        {/* Position */}
        <p className="headline-lg font-weight-bold mt-3">Position</p>
        <div className="responsive-scroll" tabIndex={0}>
          <table className="table">
            <thead>
              <tr>
                <th scope="col" colSpan={5} className="tb-text ">
                  Position
                </th>
              </tr>
            </thead>
            <tbody>
              {/* container */}
              <tr>
                <td>
                  <p className="storybook__margin-typography ">{'.position-static'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography ">{'.position-relative'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography ">{'.position-absolute'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography ">{'.position-fixed'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography ">{'.position-sticky'}</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Position */}
      </div>
    </>
  );
};

DisplayAndPosition.story = { name: 'Display y Position' };

export const Gap = (): JSX.Element => {
  return <></>;
};

Gap.story = { name: 'Gap' };

export const Visiblity = (): JSX.Element => {
  return (
    <>
      <div className="storybook_container-text">
        {/* Visibilidad */}
        <p className="headline-lg font-weight-bold">Visibilidad</p>
        <div className="responsive-scroll" tabIndex={0}>
          <table className="table">
            <thead>
              <tr>
                <th scope="col" colSpan={5} className="tb-text ">
                  Visibilidad
                </th>
              </tr>
            </thead>
            <tbody>
              {/* container */}
              <tr>
                <td>
                  <p className="storybook__margin-typography ">{'.visible'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography ">{'.invisible'}</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Visibilidad */}
      </div>
    </>
  );
};

Visiblity.story = { name: 'Visibilidad' };

export const Accesiblity = (): JSX.Element => {
  return (
    <>
      <div className="storybook_container-display">
        {/* Display */}
        <p className="headline-lg font-weight-bold">Accesibilidad</p>
        <div className="responsive-scroll" tabIndex={0}>
          <table className="table">
            <thead>
              <tr>
                <th scope="col" colSpan={5} className="tb-text ">
                  Accesibilidad
                </th>
              </tr>
            </thead>
            <tbody>
              {/* container */}
              <tr>
                <td>
                  <p className="storybook__margin-typography ">{'.sr-only'}</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Display */}
      </div>
    </>
  );
};

Accesiblity.story = { name: 'Accesibilidad' };

export const Text = (): JSX.Element => {
  return (
    <>
      <div className="storybook_container-text">
        {/* Texto */}
        <p className="headline-lg font-weight-bold">Texto</p>
        <div className="responsive-scroll" tabIndex={0}>
          <table className="table">
            <thead>
              <tr>
                <th scope="col" colSpan={5} className="tb-text ">
                  Texto
                </th>
              </tr>
            </thead>
            <tbody>
              {/* container */}
              <tr>
                <td>
                  <p className="storybook__margin-typography ">{'.text-left'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography ">{'.text-center'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography ">{'.text-right'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography ">{'.d-block'}</p>
                </td>
                <td>
                  <p className="storybook__margin-typography ">{'.d-table'}</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Texto */}
      </div>
    </>
  );
};

Text.story = { name: 'Texto' };
