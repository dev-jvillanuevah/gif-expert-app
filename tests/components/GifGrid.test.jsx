const { render, screen } = require('@testing-library/react');
import { GifGrid } from '../../src/components';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';
jest.mock('../../src/hooks/useFetchGifs');

describe('tests on GifGrid', () => {
  const category = 'Dragon Ball Z';
  test('should show the loading initially', () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });
    render(<GifGrid category={category} />);
    expect(screen.getByText('Loading...'));
    expect(screen.getByText(category));
  });

  test('should show items when the images from useFetchGifs are loaded', () => {
    const gifs = [
      {
        id: 'ABC',
        title: 'Goku',
        url: 'https://localhost/goku.jpg',
      },
      {
        id: '123',
        title: 'Vegeta',
        url: 'https://localhost/vegeta.jpg',
      },
    ];
    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });
    render(<GifGrid category={category} />);
    expect(screen.getAllByRole('img').length).toBe(2);
  });
});
