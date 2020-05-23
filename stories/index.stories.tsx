import React from 'react';
import { Button as ButtonComponent } from '../components/Button';
import { withKnobs, text, select, number } from "@storybook/addon-knobs";
import '../src/bastrap.scss';

export default { 
    title: 'Button', 
    decorators: [withKnobs]
};

// export const Primary = () => <Button type="primary">Primary</Button>;

export const Button = () => {
    const type = select( 'type', ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark'], 'primary');
    const content = text('Button text','Texto');
  
    return <ButtonComponent type={type}>{content}</ButtonComponent>;
  };
