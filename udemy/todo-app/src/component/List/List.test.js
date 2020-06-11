import React from 'react';
import { render } from '@testing-library/react';
import List from './List';

test('renders learn react link', () => {
  const { getByText } = render(<List />);
  const linkElement = getByText(/This is List!/i);
  expect(linkElement).toBeInTheDocument();
});
