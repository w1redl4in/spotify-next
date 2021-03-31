import styled from 'styled-components';

export const PlayerContainer = styled.section`
  grid-area: Player;
  background: ${({ theme }) => theme.colors.grey400};
  border-top: 1px solid ${({ theme }) => theme.colors.grey300};

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 2rem;
`;

export const MusicInfo = styled.div`
  display: flex;

  align-items: center;

  padding: 1.5rem;

  img {
    width: 5rem;
    height: 5rem;
  }
`;

export const ArtistAndName = styled.div`
  padding: 1rem;

  h1 {
    font-size: ${({ theme }) => theme.fontSize.medium};
    font-weight: normal;
    color: ${({ theme }) => theme.colors.white};

    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }

  p {
    color: ${({ theme }) => theme.colors.grey100};
    font-size: ${({ theme }) => theme.fontSize.tiny};
    width: auto;

    &:hover {
      text-decoration: underline;
      color: ${({ theme }) => theme.colors.white};
      cursor: pointer;
    }
  }
`;

export const Player = styled.div`
  display: flex;
  flex-direction: column;

  > div {
    display: flex;
  }
`;

export const Icons = styled.div`
  display: flex;

  align-items: center;

  svg {
    width: 1.2rem;
    height: 1.2rem;
    color: ${({ theme }) => theme.colors.grey100};

    &:hover {
      cursor: pointer;
      color: ${({ theme }) => theme.colors.white};
      transform: scale(1.05);
    }
  }

  svg + svg {
    margin-left: 0.5rem;
  }
`;

export const SoundInfo = styled.div`
  svg {
    color: ${({ theme }) => theme.colors.white};
  }

  svg + svg {
    margin-left: 1rem;
  }

  input[type='range'] {
    -webkit-appearance: none;
    width: 50%;
    background: transparent;
    height: 100%;
    padding-bottom: 0.25rem;
    padding-left: 1rem;

    transition: all 0.2s;

    &::-webkit-slider-thumb {
      visibility: hidden;
    }

    &:hover {
      &::-webkit-slider-thumb {
        visibility: visible;
      }
    }
  }

  input[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 0.8rem;
    width: 0.8rem;
    border-radius: 1rem;
    background: #ffffff;
    cursor: pointer;
    margin-top: -0.3rem;
  }

  input[type='range']::-webkit-slider-runnable-track {
    width: 50%;
    height: 0.25rem;
    border-radius: 0.5rem;
    cursor: pointer;
    background: ${({ theme }) => theme.colors.grey100};

    &:hover {
      background: ${({ theme }) => theme.colors.spotify};
    }
  }
`;
