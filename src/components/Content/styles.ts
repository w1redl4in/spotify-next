import styled from 'styled-components';

export const ContentContainer = styled.main`
  grid-area: Content;
  background: ${({ theme }) => theme.colors.anotherGrey};

  h1 {
    color: ${({ theme }) => theme.colors.white};
    margin: 1rem;
  }
`;

export const Playlists = styled.section`
  display: flex;

  > div {
    max-width: 10rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 0.8rem;
    margin: 0.5rem 1rem;
    border-radius: 0.5rem;
    background: ${({ theme }) => theme.colors.someGrey};

    transition: transform 0.2s;

    &:hover {
      cursor: pointer;
      transform: scale(1.1);
    }

    h2 {
      color: ${({ theme }) => theme.colors.white};
      font-size: ${({ theme }) => theme.fontSize.large};
      margin-top: 1rem;
    }

    p {
      color: ${({ theme }) => theme.colors.grey99};
      font-size: ${({ theme }) => theme.fontSize.medium};
      margin-top: 1rem;
    }
  }

  img {
    width: 8rem;
    height: 8rem;
    border-radius: 1rem;
  }
`;
