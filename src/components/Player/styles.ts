import styled from 'styled-components';

export const PlayerContainer = styled.section`
  grid-area: Player;
  background: ${({ theme }) => theme.colors.grey};
  border-top: 1px solid ${({ theme }) => theme.colors.lightGrey};
`;
