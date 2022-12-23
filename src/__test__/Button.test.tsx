import React from 'react'
import { render, screen } from '@testing-library/react'
import Button from '../components/Button'

// const mock = jest.fn();

const component = 'Button'

describe('Button tests', () => {
  it(`should call ${component} correctly`, () => {
    const { container } = render(<Button name="test" />);
    expect(container).toBeTruthy();
  })

  it('should render correctly', () => {
    const { container } = render(<Button name="test" />);
    expect(container).toMatchSnapshot();
  })
})