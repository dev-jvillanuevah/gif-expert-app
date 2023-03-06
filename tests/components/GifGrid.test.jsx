const { render, screen } = require('@testing-library/react');
import { GifGrid } from '../../src/components';

describe('tests on GifGrid', () => {
  test('should first', () => {
    render(<GifGrid />);
  });
});
