import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Sokiai from './Sokiai'

const TetaZita = () => {
  return (
    <div>
      <h1>Cia yra tetaZita</h1>

      <Link to="/dance">Sokiai Pokiai</Link>
    </div>
  )
}

export default TetaZita
