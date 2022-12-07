import React from 'react';
import { render } from '@testing-library/react';
import Button from '../Components/Button';

test("should not allowed click if button isDisabled is present", () => {
  const { container } = render(<Button isDisabled></Button>);
  expect(container.querySelector("span.disabled")).toBeInTheDocument();
}
);
