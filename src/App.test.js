jest.mock('react-router-dom', () => ({
  BrowserRouter: ({ children }) => children,
  Routes: ({ children }) => children,
  Route: ({ element }) => element,
  Link: ({ children, to }) => <a href={to}>{children}</a>,
  NavLink: ({ children, to }) => <a href={to}>{children}</a>,
  useNavigate: () => jest.fn(),
  useParams: () => ({ id: '1' }),
}), { virtual: true });

import { render, screen } from '@testing-library/react';
import App from './App';

test('renderiza sem crash', () => {
  render(<App />);
});

test('renderiza link Home na navbar', () => {
  render(<App />);
  const link = screen.getByRole('link', { name: /home/i });
  expect(link).toBeInTheDocument();
});

test('renderiza link Produtos na navbar', () => {
  render(<App />);
  const link = screen.getByRole('link', { name: /produtos/i });
  expect(link).toBeInTheDocument();
});

test('renderiza título da página inicial', () => {
  render(<App />);
  const heading = screen.getByRole('heading', { name: /gerenciador de cadastro de produtos/i });
  expect(heading).toBeInTheDocument();
});

test('renderiza texto de descrição na Home', () => {
  render(<App />);
  const description = screen.getByText(/projeto piloto/i);
  expect(description).toBeInTheDocument();
});