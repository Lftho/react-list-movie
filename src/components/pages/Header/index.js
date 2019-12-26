import React from 'react';

import { Container } from './styles';
import { TiFilm } from "react-icons/ti";

export default function Header() {
  return (
    <Container>
      <span>
        ROCKETMOVIE
        <TiFilm size={30} className="film" />
      </span>
    </Container>
  );
}
