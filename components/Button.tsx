import * as React from 'react';
import { type } from './types';

export interface ButtonProps {
    type: type;
}

export const Button: React.FC<ButtonProps> = props => {
    return <button type="button" className={`btn btn-${props.type}`}>
        {props.children}
    </button>;
}

