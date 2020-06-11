import React from 'react';
import { render } from '@testing-library/react';
import TodoApp from './TodoApp';

test('renders learn react link', () => {
  const { getByText } = render(<TodoApp />);
  const linkElement = getByText(/This is TodoApp!/i);
  expect(linkElement).toBeInTheDocument();
});
