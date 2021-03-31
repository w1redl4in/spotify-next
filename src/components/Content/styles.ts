import styled from 'styled-components';
import { BiPlay } from 'react-icons/bi';

export const ContentContainer = styled.main`
  grid-area: Content;
  background: ${({ theme }) => theme.colors.grey600};

  h1 {
    color: ${({ theme }) => theme.colors.white};
    margin: 1rem;
  }

  max-height: 77vh;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0.8rem;
    transition: all 0.2s;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.grey400};
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.grey300};
  }
`;

export const ItemsWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;

  > div {
    width: 10rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    position: relative;

    padding: 0.8rem;
    margin: 0.5rem 1rem;
    border-radius: 0.5rem;
    background: ${({ theme }) => theme.colors.grey500};

    overflow: hidden;
    text-overflow: ellipsis;

    transition: background 0.2s;

    &:hover {
      cursor: pointer;
      background: ${({ theme }) => theme.colors.grey400};
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

export const PlayIcon = styled(BiPlay)`
  @keyframes move {
    from {
      opacity: 0;
      bottom: 6rem;
    }
    to {
      opacity: 1;
      bottom: 7rem;
    }
  }

  @media (max-width: 1600px) {
    @keyframes move {
      from {
        opacity: 0;
        bottom: 6rem;
      }
      to {
        opacity: 1;
        bottom: 7rem;
      }
    }

    left: 3.5rem;

    height: 2rem;
    width: 2rem;
  }

  position: absolute;
  bottom: 7rem;
  left: 5.5rem;

  animation: move 0.5s;

  height: 3rem;
  width: 3rem;
  padding-left: 0.3rem;
  background: ${({ theme }) => theme.colors.spotify};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 50%;
`;
