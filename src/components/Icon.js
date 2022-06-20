import React from 'react';
import { ReactComponent as Arrow } from '../assets/shared/desktop/arrow.svg';

export default function Icon(props) {
    const styles = {
        stroke: props.dark ? '#000000' : '#FFFFFF'
    }

    return(
        <Arrow style={styles}/>
    )
}
