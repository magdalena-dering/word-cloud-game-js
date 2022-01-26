import { waitFor, render, fireEvent } from '@testing-library/react';
import 'jest-styled-components';
import { ProvidersWrapper } from '../../../../testUtils/renderContext';
import Game from '../game';
import Word from '../../../components/word';
import { palette } from '../../../constants/palette';

const { dimgray, lightseagreen, red } = palette;

const mockResponse = {
  question: 'select vehicles',
  all_words: [
    'belief',
    'wire',
    'car',
    'bus',
    'star',
    'river',
    'hat',
    'skirt',
    'train',
  ],
  good_words: ['car', 'bus', 'train'],
};

describe('render Game component', () => {
  it('render header with user name and log out link', async () => {
    const { findByTestId, getByRole } = render(<Game />, {
      wrapper: ProvidersWrapper,
    });
    const paragraph = await findByTestId('user-name');
    const link = getByRole('link', { name: /log out/i });
    expect(link.closest('a')).toHaveAttribute('href', '/');
    expect(paragraph).toBeInTheDocument();
  });
  it('navigate to log in screen when log out button was clicked', async () => {
    const { findByRole } = render(<Game />, {
      wrapper: ProvidersWrapper,
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
      wrapper: ProvidersWrapper,
    });
    const heading = await findByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
  });

  it('render game container with words', async () => {
    const { findAllByTestId } = render(<Game />, {
      wrapper: ProvidersWrapper,
    });
    const paragraphs = await findAllByTestId('word');
    paragraphs.forEach((paragraph) =>
      expect(paragraph).toBeInTheDocument(),
    );
  });

  it('render enable button', async () => {
    const { findByRole } = render(<Game />, {
      wrapper: ProvidersWrapper,
    });
    const button = await findByRole('button', { name: /check/i });
    expect(button).not.toBeDisabled();
  });

  it('deafult words color should be dimgray', async () => {
    const { findAllByTestId } = render(<Game />, {
      wrapper: ProvidersWrapper,
    });
    const paragraphs = await findAllByTestId('word');
    paragraphs.forEach((paragraph) =>
      expect(paragraph).toHaveStyleRule('color', `${dimgray}`),
    );
  });

  it('disable button and display error when no word was clicked', async () => {
    const { findAllByTestId, findByRole, findByText } = render(
      <Game />,
      {
        wrapper: ProvidersWrapper,
      },
    );
    const paragraphs = await findAllByTestId('word');
    const button = await findByRole('button', { name: /check/i });

    // dimgray is the deafult color
    paragraphs.forEach((paragraph) => {
      expect(paragraph).toHaveStyleRule('color', `${dimgray}`);
    });
    fireEvent.click(button);
    expect(button).toBeDisabled();
    expect(findByText('Click at least one word :)'));
  });

  it('change content of button to "Finsh game" when at least one word was clicked', async () => {
    const { findAllByTestId, findByRole } = render(<Game />, {
      wrapper: ProvidersWrapper,
    });
    const paragraphs = await findAllByTestId('word');
    const button = await findByRole('button', { name: /check/i });

    // dimgray is the deafult color
    paragraphs.forEach((paragraph) => {
      fireEvent.click(paragraph);
      expect(paragraph).not.toHaveStyleRule('color', `${dimgray}`);
    });
    fireEvent.click(button);
    expect(await findByRole('button', { name: /finish game/i }));
  });

  it('change background to green when the correct word was clicked', () => {
    const mockClickedWords = [
      { word: 'train', clicked: true },
      { word: 'bus', clicked: true },
      { word: 'car', clicked: true },
    ];
    const wrapper = render(
      <Word
        correctWords={mockResponse.good_words}
        clickedWords={mockClickedWords}
      />,

      {
        wrapper: ProvidersWrapper,
      },
    );
    expect(wrapper.getByText('train')).toHaveStyle(
      `background: ${lightseagreen};`,
    );
  });

  it('change background to red when the wrong word was clicked', () => {
    const mockClickedWords = [
      { word: 'red', clicked: true },
      { word: 'sofa', clicked: true },
      { word: 'cabin', clicked: true },
    ];
    const wrapper = render(
      <Word
        correctWords={mockResponse.good_words}
        clickedWords={mockClickedWords}
      />,

      {
        wrapper: ProvidersWrapper,
      },
    );
    expect(wrapper.getByText('sofa')).toHaveStyle(
      `background: ${red};`,
    );
  });

  it('change background to "opacity: 0.5" when the correct word was not clicked', () => {
    const mockClickedWords = [
      { word: 'train', clicked: false },
      { word: 'bus', clicked: false },
      { word: 'car', clicked: false },
    ];
    const wrapper = render(
      <Word
        correctWords={mockResponse.good_words}
        clickedWords={mockClickedWords}
      />,

      {
        wrapper: ProvidersWrapper,
      },
    );
    expect(wrapper.getByText('train')).toHaveStyle('opacity: 0.5;');
  });
});
