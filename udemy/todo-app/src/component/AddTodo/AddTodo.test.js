import React from 'react';
import { render } from '@testing-library/react';
import AddTodo from './AddTodo';

test('renders learn react link', () => {
  const { getByText } = render(<AddTodo />);
  const linkElement = getByText(/This is AddTodo!/i);
  expect(linkElement).toBeInTheDocument();
});
