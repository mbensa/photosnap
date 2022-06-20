import React from 'react';
import { ReactComponent as Facebook } from '../assets/shared/desktop/facebook.svg';
import { ReactComponent as Instagram } from '../assets/shared/desktop/instagram.svg';
import { ReactComponent as Pinterest } from '../assets/shared/desktop/pinterest.svg';
import { ReactComponent as Twitter } from '../assets/shared/desktop/twitter.svg';
import { ReactComponent as Youtube } from '../assets/shared/desktop/youtube.svg';

export default function Social() {
    return (
        <div>
            <Facebook />
            <Youtube />
            <Twitter />
            <Pinterest />
            <Instagram />   
        </div>
    )
}