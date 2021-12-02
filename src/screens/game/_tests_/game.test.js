import { waitFor, render, fireEvent } from '@testing-library/react';
import { ProvidersWraper } from '../../../testUtils/renderContext';
import Game from '../game';

// TODO: disable button when no word was clicked (at least one word should be clicked)
// TODO: show text validation when no word was clicked (at least one word should be clicked)
// TODO: check if word has green background when the right word was clicked
// TODO: check if word has opacity green background when the right word was not clicked
// TODO: check if word has red background when the wrong word was clicked
// TODO: check if content of button to "Finsh game" had been changed when at least one word was clicked

describe('render Game component', () => {
  it('render header with user name and log out link', async () => {
    const { findByTestId, getByRole } = render(<Game />, {
      wrapper: ProvidersWraper,
    });
    const paragraph = await findByTestId('user-name');
    const link = getByRole('link', { name: /log out/i });
    expect(link.closest('a')).toHaveAttribute('href', '/');
    expect(paragraph).toBeInTheDocument();
  });
  it('navigate to log in screen when log out button was clicked', async () => {
    const { findByRole } = render(<Game />, {
      wrapper: ProvidersWraper,
    });
    const link = await findByRole('link', { name: /log out/i });
    expect(link.closest('a')).toHaveAttribute('href', '/');
    fireEvent.click(link);
    const heading = findByRole('heading', {
      name: /word cloud game/i,
    });
    waitFor(() => expect(heading).toBeInTheDocument());
  });

  it('render heading', async () => {
    const { findByRole } = render(<Game />, {
      wrapper: ProvidersWraper,
    });
    const heading = await findByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
  });

  it('render game container with words', async () => {
    const { findAllByTestId } = render(<Game />, {
      wrapper: ProvidersWraper,
    });
    const paragraphs = await findAllByTestId('word');
    paragraphs.forEach((paragraph) =>
      expect(paragraph).toBeInTheDocument(),
    );
  });

  it('render enable button', async () => {
    const { findByRole } = render(<Game />, {
      wrapper: ProvidersWraper,
    });
    const button = await findByRole('button', { name: /check/i });
    expect(button).not.toBeDisabled();
  });
});
