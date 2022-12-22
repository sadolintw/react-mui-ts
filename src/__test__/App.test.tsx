import React from 'react'
import { render, screen } from '@testing-library/react'
import App from '../App'

// const mock = jest.fn();

const component = 'App'

describe('App tests', () => {
  it(`should call ${component} correctly`, () => {
    const { container } = render(<App />);
    expect(container).toBeTruthy();
  })

  it('should render correctly', () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  })
})