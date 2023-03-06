import { render } from '@testing-library/react';
import { AddCategory } from '../../src/components';

describe('tests on AddCagetory', () => {
  test('should render component', () => {
    render(<AddCategory />);
  });
});
