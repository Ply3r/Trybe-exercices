import React from 'react';
import { render, screen } from '@testing-library/react';
import Digimon from './Digimon';

describe('Teste da tela do Digimon', () => {
  it('renders Digimon Agumon', async () => {
    const obj = {
      name: 'Agumon',
      level: 'Rookie',
      img: 'https://digimon.shadowsmith.com/img/agumon.jpg',
    }
    render(<Digimon digimon={ obj }/>)
    const agumon = screen.getByText(/Agumon/i)
    const level = screen.getByText(/level: Rookie/i)
    const img = screen.getByTestId(`digimon_Agumon`)
    expect(agumon).toBeInTheDocument()
    expect(level).toBeInTheDocument()
    expect(img).toBeInTheDocument()
  });
});
