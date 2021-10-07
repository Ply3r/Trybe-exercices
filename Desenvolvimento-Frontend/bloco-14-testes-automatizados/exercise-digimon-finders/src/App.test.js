import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import UserEvent from '@testing-library/user-event'

describe('Teste da aplicação toda', () => {
  it('testa se com o input agumon retorna o agumon', async (done) => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue([{
        name: 'Agumon',
        level: 'Rookie',
        img: 'https://digimon.shadowsmith.com/img/agumon.jpg',
      }])
    })

    render(<App />);
    const inputSearch = screen.getByTestId('search-input');
    const button = screen.getByTestId('search-button');
    await UserEvent.type(inputSearch, 'agumon');
    expect(inputSearch.value).toBe('agumon')
    UserEvent.click(button);
    setTimeout(() => {
      const agumon = screen.getByText(/Agumon/i)
      const level = screen.getByText(/level: Rookie/i)
      const img = screen.getByTestId(`digimon_Agumon`)
      expect(agumon).toBeInTheDocument()
      expect(level).toBeInTheDocument()
      expect(img).toBeInTheDocument()
      done();
    }, 0)
  });
});
