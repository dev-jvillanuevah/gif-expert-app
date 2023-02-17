import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components';

describe('Tests on GifItem', () => {
  const title = 'Goku';
  const url = 'https://dbz.com/goku.jpg';

  test('should match with the snapshot', () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test('should show the image with the alt and url', () => {
    render(<GifItem title={title} url={url} />);
    const { src, alt } = screen.getByRole('img');
    expect(src).toBe(url);
    expect(alt).toBe(alt);
  });

  test('should show the component title', () => {
    render(<GifItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
});
