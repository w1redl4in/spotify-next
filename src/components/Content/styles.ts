import styled from 'styled-components';

export const ContentContainer = styled.main`
  grid-area: Content;
  background: ${({ theme }) => theme.colors.grey600};

  h1 {
    color: ${({ theme }) => theme.colors.white};
    margin: 1rem;
  }

  max-height: 77vh;
  overflow-y: auto;
`;

export const Playlists = styled.section`
  display: flex;
  flex-wrap: wrap;

  > div {
    width: 10rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    padding: 0.8rem;
    margin: 0.5rem 1rem;
    border-radius: 0.5rem;
    background: ${({ theme }) => theme.colors.grey500};

    overflow: hidden;
    text-overflow: ellipsis;

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
      color: ${({ theme }) => theme.colors.grey100};
      font-size: ${({ theme }) => theme.fontSize.medium};
      margin-top: 1rem;
    }
  }

  img {
    width: 8rem;
    height: 8rem;
    border-radius: 1rem;

    @media (max-width: 1600px) {
      width: 5rem;
      height: 5rem;
    }
  }
`;

export const Category = styled.span`
  width: 10rem;
  height: 10rem;
  border-radius: 2rem;

  margin: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.colors.grey500};
  color: ${({ theme }) => theme.colors.grey100};
  font-size: ${({ theme }) => theme.fontSize.medium};
  text-align: center;

  transition: all 0.2s;

  h2 {
    padding: 0 1.5rem;
  }

  &:hover {
    border: 2px solid ${({ theme }) => theme.colors.spotify};
    color: ${({ theme }) => theme.colors.white};
    transform: scale(1.1);
    cursor: pointer;
  }
`;
