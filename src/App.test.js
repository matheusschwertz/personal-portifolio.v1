import React from 'react';
import { render, screen } from '@testing-library/react';
import MeuComponente from './MeuComponente'; // Importe o componente que você quer testar

test('rendereiza um botão com texto "Clique aqui"', () => {
  render(<MeuComponente />);
  const botao = screen.getByText(/Clique aqui/i);
  expect(botao).toBeInTheDocument();
});
