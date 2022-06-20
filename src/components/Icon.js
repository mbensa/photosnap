import React from 'react';
import { ReactComponent as Arrow } from '../assets/shared/desktop/arrow.svg';

export default function Icon(props) {
    const {modifier, stroke} = props;
    return(
        <Arrow  />
    )
}
