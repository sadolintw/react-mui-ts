import React from 'react'
import { render, screen } from '@testing-library/react'
import SimpleButton from '../components/SimpleButton'

// const mock = jest.fn();

const component = 'SimpleButton'

describe('SimpleButton tests', () => {
  it(`should call ${SimpleButton} correctly`, () => {
    const { container } = render(<SimpleButton />);
    expect(container).toBeTruthy();
  })

  it('should have class simpleButton', () => {
    const { container } = render(<SimpleButton />);
    const button = container.getElementsByClassName('simpleButton');
    expect(button.length).toBe(1);
  })

  it('should render correctly', () => {
    const { container } = render(<SimpleButton />);
    expect(container).toMatchSnapshot();
  })
})