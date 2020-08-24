import React from 'react';
import { FooterContainer } from './styled/index';

const Footer = () => {
  const newDate = new Date();
  const year = newDate.getFullYear();
  return (
    <FooterContainer>
      <p>Crime Stats MCR</p>
      <p>{year}</p>
    </FooterContainer>
  );
};

export default Footer;
