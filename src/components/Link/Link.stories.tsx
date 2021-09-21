// Base
import React from 'react';
import './Link.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Components

// Config
export default {
  title: 'Componentes|Enlace',
  decorators: [withA11y]
};

export const Default = (): JSX.Element => {
  return (
    <p>
      You never see a frog so modest and <a className="enlace" href="#" target="_blank">enlace en párrafo</a> as he was, for all he was so gifted. 
      And when it come to fair and square jumping on a dead level, 
      he could get over more ground at one straddle than any animal of his breed you ever see.
    </p>
  );
};

export const Focus = (): JSX.Element => {
  return (
    <p>
      You never see a frog so modest and <a className="focus" href="#" target="_blank">enlace en párrafo</a> as he was, for all he was so gifted. 
      And when it come to fair and square jumping on a dead level, 
      he could get over more ground at one straddle than any animal of his breed you ever see.
    </p>
  );
};

export const Externo = (): JSX.Element => {
  return (
    <div>
      <p>You never see a frog so modest and enlace en párrafo as he was, for all he was so gifted. 
        And when it come to fair and square jumping on a dead level, he could get over more ground at one straddle than any animal of his breed you ever see.
      </p>
      <p> 
        <a className="externo" href="#" target="_blank">Enlace externo</a>
      </p>
    </div>    
  );
};