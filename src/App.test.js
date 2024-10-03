import { render, screen } from '@testing-library/react';
import App from './App';

test('renders link', () => {
  const {searchParams} = new URL('http://example.com/?about=me');
  render(<App searchParams={searchParams} />);
});

