import { render } from '@testing-library/react';
import { GifExpertApp } from '../src/GitExpertApp';

describe('tests on GifExpertApp', () => {
  test('should match with the snapshot', () => {
    const { container } = render(<GifExpertApp />);
    expect(container).toMatchSnapshot();
  });
});

// TODO: add tests for onAddCategory func
