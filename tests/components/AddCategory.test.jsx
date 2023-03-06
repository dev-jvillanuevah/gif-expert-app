import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components';

describe('tests on AddCagetory', () => {
  test('should change the value on the textbox', () => {
    render(<AddCategory onNewCategory={() => {}} />); // create the test subject
    const input = screen.getByRole('textbox'); // substract the input
    fireEvent.input(input, { target: { value: 'Goku' } }); // pass the input value firing the input event
    expect(input.value).toBe('Goku'); // make the assertion
  });

  // we did it this way instead of evaluate the onSubmitValue func
  // because we want to test the component
  test('should should call onNewCategory if the input has a value', () => {
    const inputValue = 'Goku';
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={onNewCategory} />);
    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);

    expect(input.value).toBe('');

    expect(onNewCategory).toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledTimes(1);
    expect(onNewCategory).toHaveBeenCalledWith(inputValue);
  });

  test('should not call onNewCategory if the input has an empty value', () => {
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={onNewCategory} />);

    const form = screen.getByRole('form');

    fireEvent.submit(form);

    expect(onNewCategory).toBeCalledTimes(0);
    expect(onNewCategory).not.toHaveBeenCalled();
  });
});
