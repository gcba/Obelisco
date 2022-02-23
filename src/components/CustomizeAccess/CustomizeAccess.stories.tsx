import React from 'react';
import { withA11Y } from '@storybook/addon-a11y';
import { BigAccessComponent } from './BigAccess/BigAccess.stories';
import { ModeOfUseAccessComponent } from './ModeOfUseAccess/ModeOfUseAccess.stories';
import { SmallAccessComponent } from './SmallAccess/SmallAccess.stories';
import { ModeOfUseTypeTwoComponent } from './ModeOfUseTypeTwo/ModeOfUseTypeTwo.stories';
import { AccessMobileComponent } from './AccessMobile/AccessMobile.stories';

//config
export default {
  title: 'Componentes|Customize Access',
  decorators: [withA11Y]
};

export const CustomizeAccess = (): JSX.Element => {
  return (
    <div>
      <h2>Acceso grande</h2>
      <BigAccessComponent />
    </div>
  );
};

export const ModeOfUseAccess = (): JSX.Element => {
  return (
    <div>
      <h2>Acceso grande</h2>
      <ModeOfUseAccessComponent />
    </div>
  );
};

export const SmallAccess = (): JSX.Element => {
  return (
    <div>
      <h2>Acceso chico</h2>
      <SmallAccessComponent />
    </div>
  );
};

export const ModeOfUseAccessTypeTwo = (): JSX.Element => {
  return (
    <div>
      <h2>Acceso grande</h2>
      <ModeOfUseTypeTwoComponent />
    </div>
  );
};

export const AccessMobile = (): JSX.Element => {
  return (
    <div>
      <h2>Mobile</h2>
      <AccessMobileComponent />
    </div>
  );
};
