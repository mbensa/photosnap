import React from "react";
import Image from './Image';
import LogoSvg from '../assets/shared/desktop/logo.svg';

export default function Logo() {
    return (
       <Image src={LogoSvg} alt="logo image"/>
    )
}