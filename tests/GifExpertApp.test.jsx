import { fireEvent, render, screen } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';

describe('tests on GifExpertApp', () => {
  test('should match with the snapshot', () => {
    const { container } = render(<GifExpertApp />);
    expect(container).toMatchSnapshot();
  });

  test('should have a title', () => {
    render(<GifExpertApp />);
    expect(screen.getByRole('heading', { level: 1 }).innerHTML).toBe(
      'GifExpertApp'
    );
  });
});
