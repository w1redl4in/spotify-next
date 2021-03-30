import styled from 'styled-components';

export const SidebarContainer = styled.section`
  grid-area: Sidebar;
  background: ${({ theme }) => theme.colors.black};

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  nav {
    height: 18rem;
    padding: 0.8rem 0;
    color: ${({ theme }) => theme.colors.lighterGrey};

    h1 {
      display: flex;
      align-items: center;

      &:hover {
        cursor: pointer;
      }
    }
  }
`;

export const NavItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 0.1rem;
  justify-content: space-around;
  height: 8rem;
  margin-top: 1rem;

  a {
    display: flex;
    align-items: center;
    font-size: ${({ theme }) => theme.fontSize.medium};
    width: 98%;
    padding: 0.6rem 1rem;
    font-weight: bold;

    transition: color 0.2s;

    &.active {
      background: ${({ theme }) => theme.colors.grey};
      border-radius: 0.2rem;
      color: ${({ theme }) => theme.colors.white};
    }

    &:hover {
      color: ${({ theme }) => theme.colors.white};
    }

    svg {
      width: 1.5rem;
      height: 1.5rem;
      margin-right: 1rem;
    }
  }
`;

export const AdditionalInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};

  span {
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;
    transition: color 0.2s;
    font-weight: bold;

    &:hover {
      color: ${({ theme }) => theme.colors.white};
      cursor: pointer;
    }

    svg {
      width: 1.5rem;
      height: 1.5rem;
      margin-right: 1rem;
    }
  }
`;

export const InstallAppLabel = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 2rem;
  color: ${({ theme }) => theme.colors.lighterGrey};
  transition: color 0.2s;

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.white};
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 0.5rem;
  }
`;
