import styled from 'styled-components';

export const HeaderContainer = styled.header`
  grid-area: Header;

  background: ${({ theme }) => theme.colors.grey400};

  display: flex;

  justify-content: space-between;
`;

export const ArrowsWrapper = styled.div`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.grey400};
  margin-left: 1rem;

  button {
    background: ${({ theme }) => theme.colors.grey700};

    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;

    svg {
      width: 1.5rem;
      height: 1.5rem;
    }

    & + button {
      margin-left: 1rem;
    }
  }
`;

export const LogInSignUp = styled.div`
  display: flex;

  align-items: center;

  button:first-child {
    background: ${({ theme }) => theme.colors.grey400};
    color: ${({ theme }) => theme.colors.white};
    transition: all 0.2s;

    &:hover {
      transform: scale(1.1);
      color: ${({ theme }) => theme.colors.white};
    }
  }

  button {
    background: ${({ theme }) => theme.colors.white};
    width: 10rem;
    height: 2.5rem;
    border-radius: 5rem;
    font-weight: bold;
    font-size: ${({ theme }) => theme.fontSize.medium};

    & + button {
      margin: 0 1rem;
      transition: transform 0.2s;

      &:hover {
        transform: scale(1.1);
      }
    }
  }
`;

export const LoggedPanel = styled.div`
  display: flex;

  align-items: center;

  margin-right: 1rem;

  button {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 13rem;
    height: 2.5rem;
    border-radius: 5rem;

    font-size: ${({ theme }) => theme.fontSize.large};
    font-weight: bold;
    color: ${({ theme }) => theme.colors.white};

    background: ${({ theme }) => theme.colors.grey700};
    transition: all 0.2s;

    img {
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
    }

    &:hover {
      color: ${({ theme }) => theme.colors.white};
      transform: scale(1.1);

      svg {
        color: ${({ theme }) => theme.colors.white};
      }
    }

    svg {
      width: 1rem;
      height: 1rem;
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;
