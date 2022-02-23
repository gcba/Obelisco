import React from 'react';
import { withA11Y } from '@storybook/addon-a11y';
import { CustomizeCardTypeOne } from './Customize-card-type-one/CustomizeCardTypeOne.stories';
import { CustomizeCardTypeTwo } from './Customize-card-type-two/CustomizeCardTypeTwo.stories';
import { CustomizeCardTypeThree } from './Customize-card-type-three/CustomizeCardTypeThree.stories';
import { CustomizeCardTypeFour } from './Customize-card-type-four/CustomizeCardTypeFour.stories';
import { CustomizeCardTypeFive } from './Customize-card-type-five/CustomizeCardTypeFive.stories';
import { CustomizeCardTypeSix } from './Customize-card-type-six/CustomizeCardTypeSix.stories';
import { CustomizeCardTypeSeven } from './Customize-card-type-seven/CustomizeCardTypeSeven.stories';

//config
export default {
  title: 'Componentes|Customize Cards',
  decorators: [withA11Y]
};

export const CardTypeOne = (): JSX.Element => {
  return (
    <div>
      <h2>Tarjetas</h2>

      <CustomizeCardTypeOne />
    </div>
  );
};

export const CardsTypeTwo = (): JSX.Element => {
  return (
    <div>
      <h2>Tarjetas</h2>

      <CustomizeCardTypeTwo />
    </div>
  );
};

export const CardsTypeThree = (): JSX.Element => {
  return (
    <div>
      <h2>Tarjetas</h2>

      <CustomizeCardTypeThree />
    </div>
  );
};

export const CardsTypeFour = (): JSX.Element => {
  return (
    <div>
      <h2>Tarjetas</h2>

      <CustomizeCardTypeFour />
    </div>
  );
};

export const CardsTypeFive = (): JSX.Element => {
  return (
    <div>
      <h2>Tarjetas</h2>

      <CustomizeCardTypeFive />
    </div>
  );
};

export const CardTypeSix = (): JSX.Element => {
  return (
    <div>
      <h2>Tarjetas</h2>

      <CustomizeCardTypeSix />
    </div>
  );
};

export const CardTypeSeven = (): JSX.Element => {
  return (
    <div>
      <h2>Tarjetas</h2>

      <CustomizeCardTypeSeven />
    </div>
  );
};
