import { fireEvent, screen, render } from '@testing-library/react';
import { ProvidersWraper } from '../../../testUtils/renderContext';
import LogIn from '../login';

describe('render LogIn component', () => {
  it('render heading', () => {
    const { getByRole } = render(<LogIn />, {
      wrapper: ProvidersWraper,
    });
    const heading = getByRole('heading', {
      name: /word cloud game/i,
    });
    expect(heading).toBeInTheDocument();
  });

  it('disable button on click when input is empty', () => {
    const { getByPlaceholderText, getByRole } = render(<LogIn />, {
      wrapper: ProvidersWraper,
    });
    const input = getByPlaceholderText(/nickname/i);
    const button = getByRole('button', { name: /log in/i });
    fireEvent.click(button);
    fireEvent.change(input, { target: { value: '' } });
    expect(button).toBeDisabled();
  });

  it('enable button when input is not empty', () => {
    const { getByPlaceholderText, getByRole } = render(<LogIn />, {
      wrapper: ProvidersWraper,
    });
    const input = getByPlaceholderText(/nickname/i);
    const button = getByRole('button', { name: /log in/i });
    fireEvent.change(input, { target: { value: 'Nickname' } });
    expect(button).not.toBeDisabled();
  });
  screen.debug();
});
