import { fireEvent, screen, render } from '@testing-library/react';
import { ProvidersWrapper } from '../../../testUtils/renderContext';
import LogIn from '../login';

describe('render LogIn component', () => {
  let testComponent;

  beforeEach(() => {
    testComponent = render(<LogIn />, {
      wrapper: ProvidersWrapper,
    });
  });
  afterEach(() => {
    testComponent.unmount();
  });

  it('render heading', () => {
    const { getByRole } = testComponent;
    const heading = getByRole('heading', {
      name: /word cloud game/i,
    });
    expect(heading).toBeInTheDocument();
  });

  it('disable button on click when input is empty', () => {
    const { getByPlaceholderText, getByRole } = testComponent;
    const input = getByPlaceholderText(/nickname/i);
    const button = getByRole('button', { name: /log in/i });
    fireEvent.click(button);
    fireEvent.change(input, { target: { value: '' } });
    expect(button).toBeDisabled();
  });

  it('enable button when input is not empty', () => {
    const { getByPlaceholderText, getByRole } = testComponent;
    const input = getByPlaceholderText(/nickname/i);
    const button = getByRole('button', { name: /log in/i });
    fireEvent.change(input, { target: { value: 'Nickname' } });
    expect(button).not.toBeDisabled();
  });

  it('display error when input is empty on button click', async () => {
    const { getByPlaceholderText, getByRole, findByText } =
      testComponent;
    const input = getByPlaceholderText(/nickname/i);
    const button = getByRole('button', { name: /log in/i });
    fireEvent.change(input, { target: { value: '' } });
    fireEvent.click(button);
    expect(
      findByText(/'* This field is required'/, {
        exact: false,
      }),
    );
  });
  screen.debug();
});
