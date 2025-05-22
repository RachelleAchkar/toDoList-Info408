import React from 'react';
import { render, screen } from '@testing-library/react';
import {TodoForm} from '../TodoForm';
import '@testing-library/jest-dom';

test('renders input field and add button', () => {
  render(<TodoForm />);
  expect(screen.getByPlaceholderText(/add a new task/i)).toBeInTheDocument();
  expect(screen.getByText(/add/i)).toBeInTheDocument();
});
