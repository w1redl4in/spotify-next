import styled from 'styled-components';

export const HeaderContainer = styled.header`
  grid-area: Header;

  background: ${({ theme }) => theme.colors.grey};

  display: flex;

  justify-content: space-between;
`;

export const ArrowsWrapper = styled.div`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.grey};
  margin-left: 1rem;

  button {
    background: ${({ theme }) => theme.colors.darkGrey};

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
    background: ${({ theme }) => theme.colors.grey};
    color: ${({ theme }) => theme.colors.white};
    transition: all 0.2s;

    &:hover {
      background: ${({ theme }) => theme.colors.white};
      transform: scale(1.1);
      color: ${({ theme }) => theme.colors.black};
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
